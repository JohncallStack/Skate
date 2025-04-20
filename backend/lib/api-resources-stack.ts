import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class ApiResourcesStack extends cdk.Stack {
  public readonly restApi: apigateway.RestApi;
  public readonly imageUploadLambda: lambda.Function;
  public readonly websiteBucket: s3.Bucket;


  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

        // Create the S3 bucket here
        this.websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
          websiteIndexDocument: 'index.html',
          websiteErrorDocument: 'index.html',
          publicReadAccess: true,
          blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
          removalPolicy: cdk.RemovalPolicy.DESTROY,
          autoDeleteObjects: true,
        });

    this.restApi = new apigateway.RestApi(this, 'RestApi', {
      restApiName: 'Skate API',
      deployOptions: { stageName: 'prod' },
    });

    this.imageUploadLambda = new lambda.Function(this, 'ImageUploadLambda', {
        runtime: lambda.Runtime.NODEJS_18_X,
        code: lambda.Code.fromAsset(path.join(__dirname, '../src/parks')),
        handler: 'imageUpload.handler',
      });

      // Grant S3 permissions to the Lambda
    this.websiteBucket.grantPut(this.imageUploadLambda, 'uploads/*');
    this.imageUploadLambda.addEnvironment('UPLOAD_BUCKET', this.websiteBucket.bucketName);
  }
}
