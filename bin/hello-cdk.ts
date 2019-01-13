import cdk = require('@aws-cdk/cdk');
import { HelloCdkStack } from '../lib/hello-cdkstack';

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');
app.run();
