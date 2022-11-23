# Real-Time Flags

:::tip

Real-time Flags are part of our SaaS Scale-Up and Enterprise plans.

:::

:::info

Real-time Flags are currently in beta. Please contact us to join the beta!

:::

## Overview

Real-time flags allow you to stream flag changes from Flagsmith downstream to connected clients.

## How it works

Our SDK will make a long-lived request (actually a
[Server Sent Event](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)), to
our real-time infrastructure. This connection will remain open for the duration of the SDK session, listening for events
from our API.

When an Environment is updated in some way, either via the Flagsmith dashboard or our API, all the clients connected to
that Environment stream will receive a message telling them to refresh their flags, which they will go ahead and do.

It is then up to you, as part of the SDK integration, to reflect that new flag state within your application.

## Pricing

Real-time flags are included within the Scale-Up and Enterprise plans.

## SDK support

We are working to build out support for all our SDKs. We are going to prioritise client-side SDKs over server-side SDKs
but are happy to take pull requests!

### Client Side

| Language       | Support |
| -------------- | ------- |
| Javascript     | ✅      |
| iOS/Swift      | ❌      |
| Android/Kotlin | ❌      |
| Dart/Flutter   | ❌      |

### Server Side

| Language | Support |
| -------- | ------- |
| Node.js  | ❌      |
| Java     | ❌      |
| .Net     | ❌      |
| Python   | ❌      |
| Ruby     | ❌      |
| Rust     | ❌      |
| Go       | ❌      |
| Elixir   | ❌      |

## Things you should know

### Per-Identity overrides do not trigger an update

### Identity Trait updates do not trigger an update