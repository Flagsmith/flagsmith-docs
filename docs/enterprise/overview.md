description: Feature Flags are a development methodology that allow you to ship code and features before they are finished.

# Flagsmith Enterprise Edition

## Overview

The Flagsmith platform is made up of 4 main components:

- The Flagsmith REST API
- The Flagsmith administration front end (a React-based web application)
- A SQL Database (currently we support Postgres)
- A time-series database (currently we support InfluxDB 2.0)

All of these components are open source, but the API is also provided as an "Enterprise Edition" which has additional features and capabilities:

- Roll Based Access Controls
- SAML authentication
- Additional Database Engines (Oracle, SQL Server and MySQL)

## Deployment Options

We currently support the following infrastructure platforms:

- Kubernetes
- Redhat OpenShift
- Amazon Web Services (AWS) - via [Amazon ECS](https://aws.amazon.com/ecs/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)
- Google Cloud Platform (GCP) - via [AppEngine](https://cloud.google.com/appengine)
- Azure - via [Container Instances](https://azure.microsoft.com/en-gb/services/container-instances/)

If you require additional deployment options, please contact us.

## Orchestration

We currently have the following orchestration options:

- [Pulumi](https://www.pulumi.com/) scripts for AWS deployments
- [Terraform](https://www.terraform.io/) scripts for AWS and GCP deployments
- [Helm Charts](https://helm.sh/) for Kubernetes deployments
- [Kubernetes Operator](https://operatorhub.io/operator/flagsmith) for Kubernetes Operator deployments

Please contact us for the relevant source code for these projects.

## Docker Image Repository

The Flagsmith API Enterprise Edition is hosted within AWS ECR. To access the Docker images in this repository you will need an AWS IAM access key and secret. Please contact us for these credentials.

The base ECR image repository URL is `084060095745.dkr.ecr.eu-west-2.amazonaws.com`.

### Requirements

You must install the [AWS cli](https://aws.amazon.com/cli/) and the docker command line tools.

### Pulling the Docker images

Once you have been provided with these credentials, add the following to your `~/.aws/credentials`:

```txt
[flagsmith-ee-ecr]
aws_access_key_id = <your AWS access key>
aws_secret_access_key = <your AWS secret key>
```

Then you can log in to AWS and add the access token to your docker cli

```bash
aws --profile flagsmith-ee-ecr ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 084060095745.dkr.ecr.eu-west-2.amazonaws.com
```

You can then use regular docker commands, e.g.:

```bash
docker pull 084060095745.dkr.ecr.eu-west-2.amazonaws.com/flagsmith-api-ee:latest
```

## Environment Variables

### Frontend Environment Variables

Env Var: **API_URL**
Value example: http://localhost:8888/api/v1
Description: The URL of the API Backend

Env Var: **FLAGSMITH_CLIENT_API**
Value example: http://localhost:8888/api/v1
Description: This is where the features for the front end themselves are pulled from. Create a project within your backend and refer to flag names [here](https://gist.github.com/kyle-ssg/55f3b869c28bdd13c02c6688bc76c67f).

Env Var: **FLAGSMITH**
Value example: 4vfqhypYjcPoGGu8ByrBaj
Description: The `environment id` for the `FLAGSMITH_CLIENT_API` project above.

### Backend Environment Variables

### Version Tags

The versions of the `flagsmith-api-ee` track the versions of our Open Source version. You can view these tags here:

[https://github.com/Flagsmith/flagsmith-api/tags](https://github.com/Flagsmith/flagsmith-api/tags)

## Load testing

### JMeter

There are [JMeter](https://jmeter.apache.org/) tests avaiable in our public repo on Github:

https://github.com/Flagsmith/flagsmith-api/tree/master/jmeter-tests

### wrk

We also recommend using [wrk](https://github.com/wg/wrk) for load testing the core SDK endpoints. Some examples of this (make sure you update URL and environment keys!)

```bash
# Simple get flags endpoint 
wrk -t6 -c200 -d20s -H 'X-Environment-Key: iyiS5EDNDxMDuiFpHoiwzG' http://127.0.0.1:8000/api/v1/flags/

# Get flags for an identity
wrk -t6 -c200 -d20s -H 'X-Environment-Key: iyiS5EDNDxMDuiFpHoiwzG' "http://127.0.0.1:8000/api/v1/identities/?identifier=ben.rometsch%40bullet-train.io"
```

## Common Installation Issues and Fixes

### Front end build errors with npm ERR! errno 137

This is an out of memory error. Start the container with more RAM. 
