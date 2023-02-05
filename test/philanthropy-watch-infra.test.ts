import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as PhilanthropyWatchInfra from '../lib/philanthropy-watch-infra-stack';

test('Event Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new PhilanthropyWatchInfra.PhilanthropyWatchInfraStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Events::Rule', {
    ScheduleExpression: "cron(0 0 * * ? *)"
  });
});
