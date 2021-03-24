description: Feature Flags are a development methodology that allow you to ship code and features before they are finished.

# Feature Flags

Flags within Flagsmith are a combination of:

* A Boolean value - the `Flag State`
* A String of text - the `Flag Value`

You are free to use either the `Flag State`, or the `Flag Value` or a combination of both `Flag State` and `Flag Value` within the one flag.

Features are *created per Project* but *edited and overridden per environment*. They can also be overridden on a [per Identity](/managing-identities/) or [per Segment](/managing-segments/) basis.

This allows you to use Flagsmith in the multiple ways:

* Showing and hiding features in your application. E.g. Controlling a new User Interface element within your application using the boolean `Flag State`
* Configuring environment variables/keys in your application. E.g. Setting the database URL for your API using the String `Flag Value`, or setting the Google Analytics API key in your front end.
* Configuring String values used within your application remotely. E.g. You might want to define different colour schemes for your application banner depending on the Environment.

If you provide a `Flag Value` to a flag, this will always be included and returned within the [Flagsmith SDKS](/clients/rest/) and API, regardless of the boolean `Flag State`.

## Feature Flags and Remote Config

You can create a new feature flag by going to the Flags page and hitting the Create Feature button.

Flags default to On (true) or Off (false). You can also optionally store and override String and numerical (int and float) values.

<img src="/images/create-feature.png" width="75%"/>

## Features List

You can toggle feature Boolean values or override Remote Config values on a per-Environment basis.

<img src="/images/features-list.png" width="100%"/>