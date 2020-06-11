description: Manage your Feature Flags and Remote Config in your Java applications.

# Java Client

This library can be used with server-side Java and Android applications. The source code for the client is available on [Github](https://github.com/BulletTrainHQ/bullet-train-java-client).

## Quick Setup

The client library is available from the Central Maven Repository and can be added to your project by many tools:

### Maven

Add following dependencies to your project in `pom.xml`

```xml
<dependency>
  <groupId>com.solidstategroup</groupId>
  <artifactId>bullet-train-client</artifactId>
  <version>1.5</version>
</dependency>
```

### Gradle

```groovy
implementation 'com.solidstategroup:bullet-train-client:1.5'
```

## Usage

Sign Up and create account at [https://bullet-train.io/](https://www.bullet-train.io/)

In your application initialise BulletTrain client with your API key

```java
BulletTrainClient bulletClient = BulletTrainClient.newBuilder()
                .setApiKey("YOUR_ENV_API_KEY")
                .build();
```

To check if feature flag exist and enabled:

```java
boolean featureEnabled = bulletClient.hasFeatureFlag("my_test_feature");
if (featureEnabled) {
    // run the code to execute enabled feature
} else {
    // run the code if feature switched off
}
```

To get configuration value for feature flag:

```java
String myRemoteConfig = bulletClient.getFeatureFlagValue("my_test_feature");
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

### Identifying users

Identifying users allows you to target specific users from the [Bullet Train dashboard](https://www.bullet-train.io/).

To check if feature exist for given user context:

```java
User user = new User();
user.setIdentifier("bullet_train_sample_user");
boolean featureEnabled = bulletClient.hasFeatureFlag("my_test_feature", user);
if (featureEnabled) {
    // run the code to execute enabled feature for given user
} else {
    // run the code when feature switched off
}
```

To get configuration value for feature flag for given user context:

```java
String myRemoteConfig = bulletClient.getFeatureFlagValue("my_test_feature", user);
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

To get user traits for given user context:

```java
List<Trait> userTraits = bulletClient.getTraits(user)
if (userTraits != null && userTraits) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To get user trait for given user context and specific key:

```java
Trait userTrait = bulletClient.getTrait(user, "cookies_key");
if (userTrait != null) {
    // run the code to use user trait
} else {
    // run the code without user trait
}
```

Or get user traits for given user context and specific keys:

```java
 List<Trait> userTraits = bulletClient.getTraits(user, "cookies_key", "other_trait");
if (userTraits != null) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To update value for user traits for given user context and specific keys:

```java
 Trait userTrait = bulletClient.getTrait(user, "cookies_key");
if (userTrait != null) {
    // update value for user trait
    userTrait.setValue("new value");
    Trait updated = bulletClient.updateTrait(user, userTrait);
} else {
    // run the code without user trait
}
```

## Override default configuration

By default, client is using default configuration. You can override configuration as follows:

override just API uri with your own one

```java
BulletTrainClient bulletClient = BulletTrainClient.newBuilder()
                .setApiKey("YOUR_ENV_API_KEY")
                .withApiUrl("http://yoururl.com")
                .build();
```

override full configuration with your own

```java
BulletTrainClient bulletClient  = BulletTrainClient.newBuilder()
            .setApiKey("YOUR_ENV_API_KEY")
            .withConfiguration(BulletTrainConfig.newBuilder()
                    .baseURI("http://yoururl.com")
                    .connectTimeout(200)
                    .writeTimeout(5000)
                    .readTimeout(5000)
                    .build())
            .build();

```

## Contributing

Please read [Contributing](/contributing) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email [support@bullet-train.io](mailto:support@bullet-train.io).
