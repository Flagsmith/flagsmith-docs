---
title: Edge API
---

## Overview

:::tip

The Edge API is currently in beta. If you want to join the beta programme, please connect with us in
[Discord](https://discord.gg/hFhxNtXzgm).

:::

[The Flagsmith Architecture](/advanced-use/integration-approaches#flags-are-evaluated-server-side) is based around a
server-side flag engine. This comes with a number of benefits, but it can increase latency especially when the calls are
being made from a location that is not located near the EU - the location of our current API.

In order to solve this problem we have developer a Global Edge API. Our aim for this API is to serve all SDK requests
within 100 milliseconds, anywhere in the world. In order to achieve this, we are using the following AWS components.

### Lambda@Edge

Our core [Rules Engine](https://github.com/Flagsmith/flagsmith-engine) has been factored out of our REST API. This
allows us to use it as a dependency within both the Flagsmith API, but also within a set of Lambda functions that
service SDK API calls. This means that you can point your SDK clients to our global Cloudfront CDN which in turn will
serve your request using a Lambda function running in an AWS data-centre near your client. This is how we reduce
latency!

### DynamoDB Global Tables

We store state within our API - both related to the Environments for your projects, but also for the Identities within
those Environments. Our Edge design sees us write this data through to DynamoDB global tables, which are replicated
globally.

Our Lambda functions then connect to the nearest DynamoDB table to retrieve both Environment and Identity data.

## Enabling the Edge API

Once you have had your project added to the beta, all you will need to do is point your SDK to a new Flagsmith Edge API
URL. This URL will point to our edge Cloudfront CDN. That's it!

## Current Caveats

Whilst in beta, there are some limitations to the platform. These are being worked on and will be in place when we put
the Edge API into production.

### Identities are isolated between Edge and non-Edge endpoints

If you have an existing Identity currently in Flagsmith, it will _not_ exist in our Edge API database. You have to
create the Identity within the Edge API.

### Integrations are not currently implemented

[Integrations](/integrations/overview.md) are not currently supported.

### You may experience cold starts in different regions

Cold starts currently add around 400ms to service a request. We are building out a solution to this issue but whilst the
platform is in beta and not serving a large volume of traffic, you will occasionally experience cold starts.
