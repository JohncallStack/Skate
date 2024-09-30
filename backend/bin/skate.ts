#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdnStack } from '../lib/cdn-stack';
import * as path from 'path';
import { ApiStack } from '../lib/api-stack';

const staticFilesPath = path.join(__dirname, '../../frontend/dist/skate/browser');

const app = new cdk.App();

const cdn = new CdnStack(app, 'SkateStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */

  domainName: 'johncallstack.me',
  siteDomain: 'johncallstack.me',
  staticFilesPath


});

new ApiStack(app, 'ApiStack', {
  cloudfrontDistribution: cdn.distribution,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});