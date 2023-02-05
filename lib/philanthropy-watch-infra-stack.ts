import * as cdk from 'aws-cdk-lib';
import {Rule, Schedule} from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

export class PhilanthropyWatchInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Rule(this, 'Daily Shout Out', {
      schedule: Schedule.cron({
        hour: '0',
        minute: '0',
      }),
    });
  }
}
