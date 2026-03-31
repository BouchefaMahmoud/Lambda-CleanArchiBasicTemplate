import * as path from 'path';
import { Architecture, Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib/core';

export class LambdaCleanArchiBasicTemplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new Function(this, 'LambdaFunction', {
      runtime: Runtime.DOTNET_10,
      architecture: Architecture.ARM_64,
      code: Code.fromAsset('./output.zip'),
      handler: 'MyCleanArchBasicTemplateLambda::MyCleanArchBasicTemplateLambda.Function::FunctionHandler',
      timeout: Duration.seconds(30),
      memorySize: 128,
      functionName: 'MyCleanArchBasicTemplateLambda',
    });

    new cdk.CfnOutput(this, 'LambdaFunctionArn', {
      value: lambdaFunction.functionArn,
      description: 'The ARN of the Lambda function',
    });
    
  }
}
