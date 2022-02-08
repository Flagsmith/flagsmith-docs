---
title: Deploying Flagsmith on AWS
description: Getting Started with Flagsmith on AWS
sidebar_label: AWS
sidebar_position: 70
---

## Overview

We recommend running Flagsmith on AWS using the following AWS services:

- ECS/Fargate for running the Docker images
- RDS/Aurora/Postgres for the database
- Application Load Balancer to distribute traffic

## ECS

We recommend run 2 docker containers: one for the API and the other for the Dashboard Front End. See the
[Docker](/deployment/docker) page for more information on how these relate to each other.

We run two ECS services, 1 for each container. We strongly recommend running the API with at least two Fargate instances
running for failover. For more info on Fargate sizes, see our [scaling page](/deployment/sizing-and-scaling).

If you are using health-checks, make sure to use `/health` as the health-check endpoint for both the API and the Front
End.

## RDS/Aurora

We run in production on PostgreSQL version `11`; Aurora release `3.x`.

## Application Load Balancer

We direct all traffic through an AWS ALB to the relevant ECS service. We run with two domains:

- **api**.domain.com
- **app**.domain.com
