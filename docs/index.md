---
id: intro
slug: /
title: Welcome to the Flagsmith Docs
sidebar_position: 1
sidebar_label: Overview
---

[Flagsmith](https://flagsmith.com/) lets you manage features across web, mobile and server side applications.

[Flagsmith is Open Source](https://github.com/Flagsmith). Host yourself or let us take care of the hosting.

## Getting Started

If you're new to Flagsmith or Feature Flags in general we would recommend:

- [Signing up for a free account on our SaaS platform](https://app.flagsmith.com/signup)
- [Go through our 5 minute Quickstart Guide](quickstart.md)
- [Set up an SDK for your Project](clients/overview.md)
- [Dive into the Docs](basic-features/overview.md)

## Digging Deeper

- [Learn about our globally distributed Edge API](advanced-use/edge-api.md)
- [Use Flagsmith to run A/B and Multivariate Tests](advanced-use/ab-testing.md)
- [Integrate with 3rd party applications](integrations/overview.md)
- [Use Change Requests and Scheduled Flags to manage your workflows](advanced-use/change-requests.md)

## Check out our SDKs

### Client Side SDKs

- [Javascript](/clients/javascript)
- [Android/Kotlin](/clients/android)
- [Flutter](/clients/flutter)
- [iOS/Swift](/clients/ios)
- [React & React Native](/clients/react)
- [Next.js, Svelte and SSR](/clients/next-ssr)

### Server Side SDKs

Check out our [Server Side SDK architecture first!](clients/overview.md)

- [Node.js](/clients/server-side)
- [Java](/clients/server-side)
- [.Net](/clients/server-side)
- [Python](/clients/server-side)
- [Ruby](/clients/server-side)
- [Rust](/clients/server-side)
- [Go](/clients/server-side)
- [Elixir](/clients/server-side)

## Open Source vs SaaS vs Enterprise

You are free to run the Open Source version of Flagsmith however you see fit! There are some differences between the
Open Source, SaaS hosted and Enterprise plans:

- The Open Source version has **no** API request or Identity limits - you can run as many API instances in a cluster as
  you wish
- The Open Source version has **no** Dashboard User limits - you can have as many team members as you wish
- The SaaS and Enterprise versions have [Change Requests and Flag Scheduling](advanced-use/change-requests.md)
- The SaaS and Enterprise versions have [Role-Based Access Controls](advanced-use/permissions.md)
- The SaaS and Enterprise versions have additional [Authentication Providers](/enterprise-edition)
