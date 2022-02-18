# Sync Step Functions

_Infrastructure as code framework used_: AWS SAM
_AWS Services used_: AWS Lambda, AWS API Gateway, AWS Step Functions

## Summary of the demo

In this demo you will see:

- How to create an AWS Step Function using AWS SAM.
- How to create an API Gateway with OpenAPI using AWS Cloudformation / AWS SAM
- How to invoke an AWS Step Function from an API Gateway in a syncronous manner.

This demo is part of a video posted in FooBar Serverless channel. You can check the video to see the whole demo.

## Deploy this demo

We will be using AWS SAM and make sure you are running the latest version - at the time of writing, this was 1.37.0 (sam --version).

Deploy the project to the cloud:

```
sam deploy -g # Guided deployments
```

When asked about functions that may not have authorization defined, answer (y)es. The access to those functions will be open to anyone, so keep the app deployed only for the time you need this demo running.

Next times, when you update the code, you can build and deploy with:

```
sam deploy
```

To delete the app:

```
sam delete
```

## Links related to this code

- Video with more details: https://youtu.be/R6xqbFtU2Z0
- Launch blog post: https://aws.amazon.com/blogs/compute/new-synchronous-express-workflows-for-aws-step-functions/
