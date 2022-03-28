---
id: intro
slug: /
title: Manage feature flags across web, mobile and server side applications
sidebar_position: 1
sidebar_label: Overview
---

# ![Flagsmith Documentation](/img/banner-logo-dark.png)

[Flagsmith](https://flagsmith.com/) lets you manage features across web, mobile and server side applications. Flagsmith
is Open Source. Host yourself or let us take care of the hosting.

The application consist of 3 components:

1. [Server-Side REST API](https://github.com/Flagsmith/flagsmith/tree/main/api).
2. [Front End Administration Web Interface](https://github.com/Flagsmith/flagsmith/tree/main/frontend).
3. [Client Libraries](/#client-libraries).

To get up and running, you can either use [https://flagsmith.com/](https://flagsmith.com/) for 1 and 2 above, or you can
self host the API and Front End. Once you have these components up and running, you can add the client libraries to your
apps and start managing your features remotely.

## Installation

:::tip

We also have a paid-for [Enterprise Edition](enterprise-edition.md) of the platform with a number of additional
features. Please get in touch if you want to learn more.

:::

More information can be found on the [Self Hosted Page](/deployment/overview).

### Server Side API

The source code and installation instructions can be found at
[the GitHub project](https://github.com/flagsmith/flagsmith). The API is written in Python and is based on Django and
the Django Rest Framework.

### Front End Website

The source code and installation instructions can be found at
[the GitHub project](https://github.com/flagsmith/flagsmith-frontend). The Front End Website is written in
React/Javascript and requires NodeJS.

## Client Libraries

Once you are setup with the front and back end, you can integrate our client libraries within your apps.

| Client Side SDKs                       | Server Side SDKs          |
|----------------------------------------| ------------------------- |
| [Javascript](/clients/javascript)      | [Node.js](/clients/node)  |
| [Android/Kotlin](/clients/android)     | [Java](/clients/java)     |
| [Flutter](/clients/flutter)            | [.Net](/clients/dotnet)   |
| [iOS/Swift](/clients/ios)              | [Python](/clients/python) |
| [React & React Native](/clients/react) | [Ruby](/clients/ruby)     |
| [Next.js & SSR](/clients/next-ssr)     | [Rust](/clients/rust)     |
|                                        | [Go](/clients/go)         |
|                                        | [Elixir](/clients/elixir) |

## What Next

Check out our [Quick Start Guide](quickstart.md) to get a high level overview of how to implement feature flags in your
application.
