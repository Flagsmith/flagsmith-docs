---
title: Enterprise Edition
---

## Overview

The Flagsmith platform is made up of 4 main components:

- The Flagsmith REST API
- The Flagsmith administration front end (a React-based web application)
- A SQL Database (currently we support Postgres)
- A time-series database (currently we support InfluxDB 2.0)

All of these components are open source, but the API is also provided as an "Enterprise Edition" which has additional
features and capabilities:

- Role Based Access Controls
- SAML authentication
- Additional Database Engines (Oracle, SQL Server and MySQL)

## Deployment Options

We currently support the following infrastructure platforms:

- Kubernetes
- Redhat OpenShift
- Amazon Web Services (AWS) - via
  [Amazon ECS](https://aws.amazon.com/ecs/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)
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

The Flagsmith API Enterprise Edition is hosted within AWS ECR. To access the Docker images in this repository you will
need an AWS IAM access key and secret. Please contact us for these credentials.

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

Env Var: **API_URL** Value example: http://localhost:8888/api/v1 Description: The URL of the API Backend

Env Var: **FLAGSMITH_CLIENT_API** Value example: http://localhost:8888/api/v1 Description: This is where the features
for the front end themselves are pulled from. Create a project within your backend and refer to flag names
[here](https://gist.github.com/kyle-ssg/55f3b869c28bdd13c02c6688bc76c67f).

Env Var: **FLAGSMITH** Value example: 4vfqhypYjcPoGGu8ByrBaj Description: The `environment id` for the
`FLAGSMITH_CLIENT_API` project above.

### Backend Environment Variables

### Version Tags

The versions of the `flagsmith-api-ee` track the versions of our Open Source version. You can view these tags here:

[https://github.com/Flagsmith/flagsmith-api/tags](https://github.com/Flagsmith/flagsmith-api/tags)

## AppDynamics

The application supports the use of AppDynamics for monitoring purposes. In order to set up AppDynamics for your
environment follow the steps below:

<!-- prettier-ignore -->
!!! note
      There is a bug in the AppDynamics wizard that sets the value `ssl = (on)` which needs to be changed to
`ssl = on`

1. Set up your application in your AppDynamics dashboard using the "Getting Started Wizard - Python".
2. In the wizard you will need to select the "uWSGI with Emperor: Module Directive" when choosing a deployment method
3. On completing the wizard you will be provided with a configuration file like the one seen here in the
   appdynamics.template.cfg provided, except with your application information. Make a copy of this information and
   place it in a file.

### Running with docker

When running with traditional Docker you can use the code snippet below to inject the required information for running
App Dynamics

```shell
docker run -t {image_name} -v {config_file_path}:/etc/appdynamics.cfg -e APP_DYNAMICS=on
```

Replacing the values for:

- **_{image_name}_**: the tagged name of the docker image you are using
- **_{config_file_path}_**: the absolute path of the appdynamics.cfg file on your system

### Running with docker-compose

When running with the `docker-compose.yml` file provided ensure the `APP_DYNAMICS` environment variable is set to `on`
as seen below:

```yaml
api:
   build:
   context: .
   dockerfile: docker/Dockerfile
   env:
      APP_DYNAMICS: "on"
   volumes:
   - {config_file_path}:/etc/appdynamics.cfg
```

Replacing the value for **_{config_file_path}_** with the absolute path of the appdynamics.cfg file on your system.

Running the command below will build the docker image with all the AppDynamics config included

```shell
docker-compose -f docker-compose.yml build
```

This image can then be run locally using the docker-compose `up` command as seen below

```shell
docker-compose -f docker-compose.yml up
```

### Additional settings

If you need additional AppDynamics setup options you can find the other environment variables you can set
[here](https://docs.appdynamics.com/display/PRO21/Python+Agent+Settings).

## Load testing

### JMeter

There are [JMeter](https://jmeter.apache.org/) tests avaiable in our public repo on Github:

https://github.com/Flagsmith/flagsmith-api/tree/master/jmeter-tests

### wrk

We also recommend using [wrk](https://github.com/wg/wrk) for load testing the core SDK endpoints. Some examples of this
(make sure you update URL and environment keys!)

```bash
# Simple get flags endpoint
wrk -t6 -c200 -d20s -H 'X-Environment-Key: iyiS5EDNDxMDuiFpHoiwzG' http://127.0.0.1:8000/api/v1/flags/

# Get flags for an identity
wrk -t6 -c200 -d20s -H 'X-Environment-Key: iyiS5EDNDxMDuiFpHoiwzG' "http://127.0.0.1:8000/api/v1/identities/?identifier=ben.rometsch%40bullet-train.io"
```

## Common Installation Issues and Fixes

### Front end build errors with npm ERR! errno 137

This is an out of memory error. Start the container with more RAM.
