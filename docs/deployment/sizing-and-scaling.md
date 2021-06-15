---
title: Sizing and Scaling
description: Sizing and Scaling Flagsmith
sidebar_position: 6
---

## Overview

Flagsmith has a very simple architecture, making it well understood when it comes to serving high loads.

## Frontend Dashboard

Generally this component is not put under any sort of significant load. It can be load balanced if required. It does not
require sticky-sessions.

## API

The API is completely stateless. This means it can scale out behind a load balancer almost perfectly.

## Database

Our recommendation is to first scale the database up with a more powerful single server.

Once the database connections have been saturated by the API cluster, adding read replicas to the database solves the
next bottleneck of database connections.

We would also recommend testing [pgBouncer](https://www.pgbouncer.org/) in your environment as it generally optimises
database connections and reduces the load on the database.
