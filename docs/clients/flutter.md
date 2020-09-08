description: Manage your Feature Flags and Remote Config in your .Net applications.

This SDK can be used for Flutter applications. The source code for the client is available on [Github](https://github.com/BulletTrainHQ/bullet-train-flutter-client).

## Getting Started

The client library is available from the [https://pub.dev](https://pub.dev):

```dart
dependencies:
  bullet_train:
```

## Usage

### Retrieving feature flags for your project

**For full documentation visit [https://docs.bullet-train.io](https://docs.bullet-train.io)**

Sign Up and create an account at [https://bullet-train.io/](https://www.bullet-train.io/)

In your application, initialise the BulletTrain client with your API key:

```dart
var bulletClient = BulletTrainClient(apiKey: 'YOUR_ENV_API_KEY')
```

To check if a feature flag exists and is enabled:

```dart
bool featureEnabled = await bulletClient.hasFeatureFlag("my_test_feature");
if (featureEnabled) {
    // run the code to execute enabled feature
} else {
    // run the code if feature switched off
}
```

To get the configuration value for a feature flag:

```dart
var myRemoteConfig = await bulletClient.getFeatureFlagValue("my_test_feature");
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

### Identifying users

Identifying users allows you to target specific users from the [Bullet Train dashboard](https://www.bullet-train.io/).

To check if a feature exists for a given user Identity:

```dart
var user = FeatureUser(identifier: 'bullet_train_sample_user');
bool featureEnabled = await bulletClient.hasFeatureFlag('my_test_feature', user: user);
if (featureEnabled) {
    // run the code to execute enabled feature for given user
} else {
    // run the code when feature switched off
}
```

To get the configuration value for a feature flag for given a user Identity:

```dart
var myRemoteConfig = await bulletClient.getFeatureFlagValue('my_test_feature', user: user);
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

To get the user traits for given user Identity:

```dart
var userTraits = await bulletClient.getTraits(user)
if (userTraits != null && userTraits) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To get user trait for given user Identity and specific Trait key:

```dart
var userTrait = await bulletClient.getTrait(user, 'cookies_key');
if (userTrait != null) {
    // run the code to use user trait
} else {
    // run the code without user trait
}
```

Or get user traits for given user Identity and specific Trait keys:

```dart
 var userTraits = await bulletClient.getTraits(user, keys: ['cookies_key', 'other_trait']);
if (userTraits != null) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To update a user trait for given user Identity:

```dart
 var userTrait = await bulletClient.getTrait(user, 'cookies_key');
if (userTrait != null) {
    // update value for user trait
    var updatedTrait = userTrait.copyWith(value: 'new value');
    Trait updated = await bulletClient.updateTrait(user, updatedTrait);
} else {
    // run the code without user trait
}
```

## Override default configuration

By default, the client uses the default configuration. You can override this configuration as follows:

```dart
var bulletClient = BulletTrainClient(
      config: BulletTrainConfig(
          baseURI: 'http://yoururl.com/'
      ), apiKey: 'YOUR_ENV_API_KEY');
```

Override the default configuration with your own:

```dart
var bulletClient = BulletTrainClient(
      config: BulletTrainConfig(
          baseURI: 'http://yoururl.com/',
          connectTimeout: 200,
          receiveTimeout: 500,
          sendTimeout: 500,
      ), apiKey: 'YOUR_ENV_API_KEY');
```

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email [support@bullet-train.io](mailto:support@bullet-train.io).
