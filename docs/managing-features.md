description: Feature Flags are a development methodology that allow you to ship code and features before they are finished.

# Feature Flags

Flags within Flagsmith are:

* A Boolean value
* Optionally, a String of text.

This allows you to use Flagsmith in the multiple ways.

* Showing and hiding features in your application. E.g. A sharing button within an application.
* Configuring values used within your application remotely. E.g. The number of power-ups a user might have in a game.
* Configuring environment variables. E.g. Setting the database URL for your API.

Features are *created per Project* but *edited per environment* and can then be overridden on a per user or segment basis.

## Feature Flags and Remote Config

You can create a new feature flag by going to the Flags page and hitting the Create Feature button.

Flags default to On (true) or Off (false). You can also optionally store and override String and numerical (int and float) values.

<img src="/images/create-feature.png" width="75%"/>

## Features List

You can toggle feature Boolean values or override Remote Config values on a per-Environment basis.

<img src="/images/features-list.png" width="100%"/>