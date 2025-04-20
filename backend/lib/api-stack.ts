
import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { HttpOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

interface ApiStackProps extends cdk.StackProps {
  websiteBucket: s3.Bucket; //from CDN stack
  restApi: apigateway.RestApi; //from ApiResources stack
  imageUploadLambda: lambda.Function;
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


    props.websiteBucket.grantPut(props.imageUploadLambda, 'uploads/*');
    props.imageUploadLambda.addEnvironment('UPLOAD_BUCKET', props.websiteBucket.bucketName);


    const api = props.restApi;
    const apiRoot = api.root.addResource('api');
    const v1 = apiRoot.addResource('v1');

    const parks = v1.addResource('parks');
    parks.addMethod('GET', new apigateway.LambdaIntegration(getLambda));
    parks.addMethod('POST', new apigateway.LambdaIntegration(postLambda));
    parks.addMethod('DELETE', new apigateway.LambdaIntegration(deleteLambda));

    const uploadImage = v1.addResource('uploadImage');
    uploadImage.addMethod('POST', new apigateway.LambdaIntegration(props.imageUploadLambda));

    // this.restApi = api;

    const origin = new HttpOrigin(`${api.restApiId}.execute-api.${this.region}.amazonaws.com`, {
      originPath: '/prod',
    })


}
}