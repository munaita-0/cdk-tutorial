import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');

export class HelloCdkStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

        new s3.Bucket(this, 'SuzukiTestBucketFromCdk', {
            versioned: true
        });
    }
}
