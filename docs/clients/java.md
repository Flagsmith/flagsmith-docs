# Bullet Train SDK for Java
> Bullet Train allows you to manage feature flags and remote config across multiple projects, environments and organisations.

The SDK for Android and Java applications for [https://bullet-train.io/](https://bullet-train.io/).

## Getting Started

## Quick Setup

Before adding maven dependency to your local environment please follow these instruction first:

- download source code from github
```ssh
git clone git@github.com:SolidStateGroup/bullet-train-java-client.git
cd bullet-train-java-client
```

- run mvn command to install jar into your local maven repository
```ssh
mvn clean install -DskipTests
```

Now you can use below steps to add client to your project.

### Maven

Add following dependencies to your project in `pom.xml`
```xml
<dependency>
  <groupId>com.ssg</groupId>
  <artifactId>bullet-train-client</artifactId>
  <version>1.0</version>
</dependency>
```

### Gradle
```groovy
implementation 'com.ssg:bullet-train-client:1.0'
```

## Usage
**Retrieving feature flags for your project**

**For full documentation visit [https://bullet-train.io/documentation](https://www.bullet-train.io/documentation)**

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
boolean featureEnabled = bulletClient.hasFeatureFlag("my_test_feature");
if (featureEnabled) {
    String myRemoteConfig = bulletClient.getFeatureFlagValue("my_test_feature");
    // run the code for to execute enabled feature
} else {
    // run the code if feature switched off
}
```

**Identifying users**

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

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates. 

## Get in touch

If you have any questions about our projects you can email <a href="mailto:bullettrain@solidstategroup.com">bullettrain@solidstategroup.com</a>.