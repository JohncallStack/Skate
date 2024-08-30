# Skate

Simple app to show how to build and deploy a basic Serverless SPA.

## Prerequisites

NodeJS >= v18

NPM >= v10

Connect your computer to GitHub:
- https://docs.github.com/en/get-started/getting-started-with-git/set-up-git

Install the AWS CLI:
- https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Use the AWS CLI to connect to AWS:
- https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html

## Steps

### 1. Create a monorepo
  - init a new repo
    - link to github
  - init an angular app
  - init an aws-cdk app
  - manage both apps with npm workspaces

### 2. Deploy a website
  - deploy angular app to S3 bucket
  - host site behind Cloudfront
  - configure Route53 to point a domain to CloudFront

### 3. Add backend functionality
  - add a DynamoDB table
  - add an API Gateway
  - add some Lambadas to GET/POST/DELETE

### 4. Add frontend functionality
  - create some child components to:
    - present data in database
    - add data to database
    - delete data from database

## Docs

[NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces?v=true)

[Angular Docs](https://angular.dev/)

[AWS CDK Docs](https://docs.aws.amazon.com/cdk/api/v2/)