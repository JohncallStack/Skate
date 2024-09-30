import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';
import { HttpOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

interface ApiStackProps extends cdk.StackProps {
  cloudfrontDistribution: cloudfront.Distribution;
}

export class ApiStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: ApiStackProps) {

    super(scope, id, props);

    // DynamoDB Table
    const table = new dynamodb.Table(this, 'ParksTable', {
      partitionKey: { name: 'park_id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Lambda Functions
    const commonLambdaProps = {
      runtime: lambda.Runtime.NODEJS_LATEST,
      environment: {
        TABLE_NAME: table.tableName,
      },
    };

    const getLambda = new NodejsFunction(this, 'GetParksLambda', {
      ...commonLambdaProps,
      entry: 'src/parks/get.lambda.ts'
    });

    const postLambda = new NodejsFunction(this, 'PostParksLambda', {
      ...commonLambdaProps,
      entry: 'src/parks/post.lambda.ts'
    });

    const deleteLambda = new NodejsFunction(this, 'DeleteParksLambda', {
      ...commonLambdaProps,
      entry: 'src/parks/delete.lambda.ts'
    });

    // Grant DynamoDB permissions to Lambda functions
    table.grantReadWriteData(getLambda);
    table.grantReadWriteData(postLambda);
    table.grantReadWriteData(deleteLambda);

    // API Gateway
    const api = new apigateway.RestApi(this, 'Api', {
      restApiName: 'Parks Service',
    });

    const parks = api.root.addResource('api').addResource('v1').addResource('parks');
    parks.addMethod('GET', new apigateway.LambdaIntegration(getLambda));
    parks.addMethod('POST', new apigateway.LambdaIntegration(postLambda));
    parks.addMethod('DELETE', new apigateway.LambdaIntegration(deleteLambda));

    const origin = new HttpOrigin(`${api.restApiId}.execute-api.${this.region}.amazonaws.com`, {
      originPath: '/prod',
    })

    const behaviorOptions: cloudfront.AddBehaviorOptions = {
      allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      originRequestPolicy: new cloudfront.OriginRequestPolicy(this, 'OrPol', {
        queryStringBehavior: cloudfront.OriginRequestQueryStringBehavior.all()
      })
    }

    // Add API Gateway as an additional behavior to the CloudFront distribution
    props.cloudfrontDistribution.addBehavior('api/*', origin, behaviorOptions);
  }
}