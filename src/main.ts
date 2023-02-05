// import { go } from '@aws-cdk/aws-lambda-go-alpha';
import { App, Stack, StackProps, aws_events } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class PhilanthropyWatch extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new aws_events.Rule(this, 'Daily Shout Out', {
      schedule: aws_events.Schedule.cron({
        hour: '0',
        minute: '0',
      }),
    });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new PhilanthropyWatch(app, 'philanthropy-watch-infra-dev', { env: devEnv });
// new MyStack(app, 'philanthropy-watch-infra-prod', { env: prodEnv });

app.synth();
