import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class PhilanthropyWatchInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    const shoutOutFunction = new PythonFunction(this, 'Daily Shout Out Function', {
      entry: './philanthropy-watch/daily-shoutout',
      runtime: Runtime.PYTHON_3_9,
      index: 'app.py',
      handler: 'lambda_handler',
      timeout: Duration.seconds(10),
      memorySize: 512,
    });


    new Rule(this, 'Daily Shout Out Rule', {
      schedule: Schedule.cron({
        hour: '0',
        minute: '0',
      }),
      targets: [
        new targets.LambdaFunction(shoutOutFunction),
      ],
    });
  }
}
