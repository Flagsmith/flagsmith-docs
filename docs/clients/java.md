# Java Client

This library can be used with server-side Java and Android applications. The source code for the client is available on [Github](https://github.com/SolidStateGroup/bullet-train-java-client).

## Getting Started

## Quick Setup

The client library is available from the Central Maven Repository and can be added to your project by many tools:

### Maven

Add following dependencies to your project in `pom.xml`

```xml
<dependency>
  <groupId>com.solidstategroup</groupId>
  <artifactId>bullet-train-client</artifactId>
  <version>1.3</version>
</dependency>
```

### Gradle

```groovy
implementation 'com.solidstategroup:bullet-train-client:1.3'
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
    String myRemoteConfig = bulletClient.getFeatureFlagValue("my_test_feature", user);
    // run the code for to execute enabled feature for given user
} else {
    // run the code if feature switched off
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

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.
