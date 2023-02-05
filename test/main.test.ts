import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { PhilanthropyWatch } from '../src/main';

test('Snapshot', () => {
  const app = new App();
  const stack = new PhilanthropyWatch(app, 'philanthropy-watch-infra-dev');

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
