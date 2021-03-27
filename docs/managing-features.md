description: Feature Flags are a development methodology that allow you to ship code and features before they are finished.

## Overview

!!! note
    Multivariate Flags are currently a beta feature. If you want access to the beta, please get in touch.

Flags in Flagsmith are *created and shared at a Project level*, but *overridden at an Environment level*. They can also be overridden on a [per Identity](/managing-identities/) or [per Segment](/managing-segments/) basis.

Flags within Flagsmith are a combination of:

* A Boolean value - the `Flag State`

and then optionally:

* A String of text - the `Flag Value`

or

* A selected Multivariate value - the `Flag Value`

You are free to use either the `Flag State`, or the `Flag Value` or a combination of both `Flag State` and `Flag Value` within each flag. You dont have to provide or use a `Flag Value`. If you just want a boolean flag, you can just ignore the `Flag Value` altogether.

## Multivariate Flags

You can create a Multivariate Flag if you want the `Flag Value` to be one value out of a selection that you define. Multivariate Flags are useful in 2 core use-cases:

1. You want to be able to control the `Flag Value` from a pre-selected list.
2. You want to run an A/B test. [Learn more here](/ab-testing/).

## Examples of Use

This allows you to use Flagsmith in the multiple ways:

* Showing and hiding features in your application. E.g. Controlling a new User Interface element within your application using the boolean `Flag State`
* Configuring environment variables/keys in your application. E.g. Setting the database URL for your API using the String `Flag Value`, or setting the Google Analytics API key in your front end.
* Configuring String values used within your application remotely. E.g. You might want to define different colour schemes for your application banner depending on the Environment.

If you provide a `Flag Value` to a flag, this will always be included and returned within the [Flagsmith SDKS](/clients/rest/) and API, regardless of the boolean `Flag State`.

## Creating a new Feature Flag

You can create a new feature flag by going to the Flags page within any Environment and hitting the Create Feature button.

Flags default to On (true) or Off (false). You can also optionally store and override String and numerical (int and float) values, or create a selection of MultiVariate values.

<img src="/images/create-feature.png" width="75%"/>

## Features List

You can toggle feature Boolean values or override Flag values on a per-Environment basis.

<img src="/images/features-list.png" width="100%"/>