# Edge API Migration

:::tip

The Edge API is only available with our paid-for SaaS platform. It does not form part of our Open Source project.

:::

With the introduction of the Edge API in XXX, there are now two datastores for `Identities`: the existing Core API at
`api.flagsmith.com` and the new Edge API at `edge.api.flagsmith.com`.

If you registered on our SaaS platform after XXX, your data will be stored on the Edge API. Please make sure you connect
with our [latest SDKs](../clients/overview.md) to ensure you are connecting to the Edge API. The new SDKs will connect
to the Edge API by default.

If you registered before XXX, you can migrate over to the Edge API by following the steps below. The migration occurs on
a per-Project basis within Flagsmith.

## Overview

The migration process will carry out a one-way sync of your `Identity` data, from the Core API to the Edge API. All your
`Identity` data will continue to exist within the Core API, and you can continue to write `Identities` to the Core API
if you wish. Note that writes to one API will happen independently of the other API; there is no automated sync between
the two API's.

The goal is to get all of your applications running against the Edge API, where you will benefit from global low latency
as well as multi-region failover and fault tolerance.

### Step 1 - Prepare your applications

### Step 2 - Migrate your data

You can now trigger a one-way sync of data for each of your Flagsmith Projects within the Flagsmith Dashboard. Visit the
Project Settings page in Flagsmith and hit the "Migrate Identity Data to Edge API" button. This will start a job that
can take between 1 and 15 minutes, depending on how much data you have. Once the job is complete, all the Identities
that were present in your Core API will be present in the Edge API.

### Step 3 - Deploy your applications

Once your data has been copied onto the Edge API datastore, you can now deploy your applications that point to the new
endpoint `edge.api.flagsmith.com` and benefit from global low latency!

## Things you should know

Following the migration, if we receive a request an `Identity` endpoint that results in a write to the core API, we will
persist the data in the Core API _and replay the request into the Edge API_.
