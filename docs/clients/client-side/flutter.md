---
title: Flagsmith Flutter SDK
sidebar_label: Flutter
description: Manage your Feature Flags and Remote Config in your Flutter applications.
slug: /clients/flutter
---

This SDK can be used for Flutter applications. The source code for the client is available on
[Github](https://github.com/flagsmith/flagsmith-flutter-client).

## Getting Started

The client library is available from the [https://pub.dev/packages/flagsmith](https://pub.dev/packages/flagsmith):

```dart
dependencies:
  flagsmith:
```

## Basic Usage

The SDK is initialised against a single environment within a project on [https://flagsmith.com](https://flagsmith.com),
for example the Development or Production environment. You can find your environment key in the Environment settings
page.

<img src="/img/api-key.png"/>

### Retrieving feature flags for your project

Sign Up and create an account at [https://flagsmith.com/](https://flagsmith.com/)

In your application, initialise the Flagsmith client with your API key:

```dart
final flagsmithClient = FlagsmithClient(
        apiKey: 'YOUR_ENV_API_KEY'
        config: config,
        seeds: <Flag>[
            Flag.seed('feature', enabled: true),
        ],
    );
await flagsmithClient.getFeatureFlags(reload: true) // fetch updates from api
```

if you prefer async initialization then you should use

```dart
final flagsmithClient = await FlagsmithClient.init(
        apiKey: 'YOUR_ENV_API_KEY',
        config: config,
        seeds: <Flag>[
            Flag.seed('feature', enabled: true),
        ],
        update: false,
    );
await flagsmithClient.getFeatureFlags(reload: true) // fetch updates from api
```

To check if a feature flag exists and is enabled:

```dart
bool featureEnabled = await flagsmithClient.hasFeatureFlag("my_test_feature");
if (featureEnabled) {
    // run the code to execute enabled feature
} else {
    // run the code if feature switched off
}
```

To get the configuration value for a feature flag:

```dart
final myRemoteConfig = await flagsmithClient.getFeatureFlagValue("my_test_feature");
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

## Cached flags

You can use caches instead of async/await

```dart
final config = FlagsmithConfig(
    baseURI: 'http://yoururl.com/',
    connectTimeout: 200,
    receiveTimeout: 500,
    sendTimeout: 500,
    storeType = StoreType.inMemory,
    caches: true, // mandatory if you want to use caches
);

final flagsmithClient = await FlagsmithClient.init(
        apiKey: 'YOUR_ENV_API_KEY',
        config: config,
        seeds: <Flag>[
            Flag.seed('feature', enabled: true),
        ],
    );

await flagsmithClient.getFeatureFlags(reload: true); // fetch updates from api
bool isFeatureEnabled = flagsmithClient.hasCachedFeatureFlag('feature');
```

### Identifying users

Identifying users allows you to target specific users from the [Flagsmith dashboard](https://flagsmith.com/).

To check if a feature exists for a given user Identity:

```dart
final user = FeatureUser(identifier: 'flagsmith_sample_user');
bool featureEnabled = await flagsmithClient.hasFeatureFlag('my_test_feature', user: user);
if (featureEnabled) {
    // run the code to execute enabled feature for given user
} else {
    // run the code when feature switched off
}
```

To get the configuration value for a feature flag for given a user Identity:

```dart
final myRemoteConfig = await flagsmithClient.getFeatureFlagValue('my_test_feature', user: user);
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

To get the user traits for given user Identity:

```dart
final userTraits = await flagsmithClient.getTraits(user)
if (userTraits != null && userTraits) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To get user trait for given user Identity and specific Trait key:

```dart
final userTrait = await flagsmithClient.getTrait(user, 'cookies_key');
if (userTrait != null) {
    // run the code to use user trait
} else {
    // run the code without user trait
}
```

Or get user traits for given user Identity and specific Trait keys:

```dart
final userTraits = await flagsmithClient.getTraits(user, keys: ['cookies_key', 'other_trait']);
if (userTraits != null) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To update a user trait for given user Identity:

```dart
final userTrait = await flagsmithClient.getTrait(user, 'cookies_key');
if (userTrait != null) {
    // update value for user trait
    var updatedTrait = userTrait.copyWith(value: 'new value');
    Trait updated = await flagsmithClient.updateTrait(user, updatedTrait);
} else {
    // run the code without user trait
}
```

## Override default configuration

By default, the client uses the default configuration. You can override this configuration as follows:

```dart
final flagsmithClient = FlagsmithClient(
      config: FlagsmithConfig(
          baseURI: 'http://yoururl.com/'
      ), apiKey: 'YOUR_ENV_API_KEY');
```

Override the default configuration with your own:

```dart
final flagsmithClient = FlagsmithClient(
      config: FlagsmithConfig(
          baseURI: 'http://yoururl.com/',
          connectTimeout: 200,
          receiveTimeout: 500,
          sendTimeout: 500,
          storeType = StoreType.inMemory,
          caches: true,
      ), apiKey: 'YOUR_ENV_API_KEY');
```
