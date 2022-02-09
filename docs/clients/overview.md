---
description: Manage your Feature Flags and Remote Config in your REST APIs.
sidebar_label: Overview
sidebar_position: 1
---

# SDKs Overview

Flagsmith ships with SDKs for a bunch of different programming languages. We also have a [REST API](rest.md) that you
can use if you want to consume the API directly.

:::tip

The Server Side SDKs can operate in 2 different modes; Remote and Local evaluation modes. It's important to understand
which mode is right for your use case. This is detailed below.

:::

## Remote and Local Evaluation Modes

The Server Side SDKs (e.g Python, Ruby etc) can operate in 2 different modes:

1. `Remote Evaluation`
2. `Local Evaluation`

In order to make the right choice, it's worth digging into how these two approaches are different, and what the pros and
cons of each one are.

### 1 - Remote Evaluation

In this mode, every time the SDK needs to get some Flags, it will make a blocking request to the Flagsmith API to get
the Flags for the particular request.

`Remote Evaluation` is the default mode; simply initialise the SDK with the `Environment Key` and you will be running in
`Remote Evaluation` mode.

This is the same way that the [Client Side SDKs](#client-side-sdks) work.

### 2 - Local Evaluation

In this mode, all flag values are calculated locally, on your server. The Flagsmith SDK includes an implementation of
the Flag Engine.

You have to configure the SDK to run in `Local Evaluation` mode. See the
[SDK configuration options](server-side.md#configuring-the-sdk) for details on how to set that in your particular
language.

When the SDK is initialised, it will grab the entire set of details about the Environment from the Flagsmith API. This
will include all the Flags, Flag values, Segment rules, Segment overrides etc for that Environment. This full complement
of data about the Environment enables the Flagsmith SDK to run the Flag Engine _locally_ and _natively_ within your
server infrastructure.

The benefits to doing this are mainly one of latency and performance. Your server side code does not need to hit the
Flagsmith API each time a user requests their flags - the flags can be computed locally. Hence it does not need to block
and wait for the response back from the Flagsmith API.

:::tip

The SDK has to request all of the data about an Environment in order to run. Because some of this data could be
sensitive (for example, your Segment Rules), the SDK requires a specific `Server Side API Key`. This is different to the
regular `Environment Key`. This key should _not_ be shared, and should be considered sensitive data.

:::

In order to keep their Environment data up-to-date, SDKs running in `Local Evaluation` mode will poll the Flagmsith API
regularly and update their local Environment data with any changes from the Flagsmith API. By default the SDK will poll
the Flagsmith every `60` seconds; this rate is configurable within each SDK.

It's important to understand the [pros and cons](#pros-cons-and-caveats) for runing `Local Evaluation`.

### Client Side SDKs

All our Client Side SDKs run in `Remote Evaluation` mode only; they cannot run in `Local Evaluation mode`. The reason
for this is down to data sensitivity. Because some of this data could be sensitive (for example, your Segment Rules), we
only allow Client Side SDKs to run in `Remote Evaluation` mode.

:::info

Because Clients are almost always operating remotely from your server infrastructure, there is little benefit to them
running in `Local Evaluation` mode.

:::

## Pros, Cons and Caveats

### Remote Evaluation Mode

- Identities are persisted within the Flagsmith Datastore.
- Identity overrides specified within the Dashboard
- All Integrations work as designed.

### Local Evaluation Mode

- Identities are _not_ sent to the API and so are not persisted in the datastore.
- [Identity overrides](../basic-features/managing-identities#identity-overrides) do not operate at all.
- Integrations do not run.

The benefit of running in Local Evaluation mode is that you can process flag evaluations much more efficiently; they are
all computed locally.
