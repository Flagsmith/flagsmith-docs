---
description: Manage your Feature Flags and Remote Config in your REST APIs.
sidebar_label: Flagsmith SDKs Overview
sidebar_position: 1
---

## Introduction

Flagsmith ships with SDKs for a bunch of different programming languages. We also have a [REST API](rest.md) that you
can use if you want to consume the API directly.

The Server Side SDKs (e.g Python, Ruby etc) can operate in 2 different modes: _local_ flag evaluation and _remote_ flag
evaluation. In order to make the right choice, it's worth digging into how these two approaches are different and what
the pros and cons of each one are.

## Local and Remote Flag evaluation

Our Server Side SDKs can evaluate Flags in two different modes - local and remote evaluation:

### Local Evaluation

In this mode, when the SDK is initialised, it will grab the entire set of details about the Environment. This will
include all the Flags, Flag values, Segment rules, Segment overrides etc. etc. for that Environment. This full
complement of data about the Environment enables the Flagsmith SDK to run the Flag Engine _locally_ and _natively_
within your server infrastructure.

The benefits to doing this are mainly one of latency and performance. Your server side code does not need to hit the
Flagsmith API each time a user requests their flags - it can be calculated locally. Hence it does not need to block to
get the request back from the Flagsmith API.

The SDK has to request all of the data about an Environment in order to run. Because some of this data could be
sensitive (for example, your Segment Rules details), the SDK requires a specific `Server Side API Key`. This key should
_not_ be shared, and should be considered sensitive data.
