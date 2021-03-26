description: Manage your Feature Flags and Remote Config in your Java/Kotlin applications.

# Java/Kotlin Client

This library can be used with server-side Java, Kotlin and Android applications. The source code for the client is available on [Github](https://github.com/flagsmith/flagsmith-java-client).

## Getting Started

## Quick Setup

The client library is available from the Central Maven Repository and can be added to your project by many tools:

### Maven

Add following dependencies to your project in `pom.xml`

```xml
<dependency>
  <groupId>com.flagsmith</groupId>
  <artifactId>flagsmith-java-client</artifactId>
  <version>2.6</version>
</dependency>
```

### Gradle

```groovy
implementation 'com.flagsmith:flagsmith-java-client:2.6'
```

## Usage

### Retrieving feature flags for your project

**For full documentation visit [https://docs.flagsmith.com/](https://docs.flagsmith.com/)**

Sign Up and create an account at [https://www.flagsmith.com/](https://www.flagsmith.com/)

In your application initialise the Flagsmith client with your API key:

```Java
FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
                .setApiKey("YOUR_ENV_API_KEY")
                .build();
```

To check if a feature flag exists and is enabled:

```Java
boolean featureEnabled = flagsmithClient.hasFeatureFlag("my_test_feature");
if (featureEnabled) {
    // run the code that executes the enabled feature
} else {
    // run the code that doesn't include the feature
}
```

To get configuration value for a feature flag:

```Java
String myRemoteConfig = flagsmithClient.getFeatureFlagValue("my_test_feature");
if (myRemoteConfig != null) {    
    // run the code that uses the remote config value
} else {
    // run the code that doesn't depend on the remote config value
}
```

### Identifying users

Identifying users allows you to target specific users from the [Flagsmith dashboard](https://www.flagsmith.com/).

To check if feature exists for given a user context:

```Java
User user = new User();
user.setIdentifier("flagsmith_sample_user");
boolean featureEnabled = flagsmithClient.hasFeatureFlag("my_test_feature", user);
if (featureEnabled) {
    // run the code that executes the enabled feature for a given user
} else {
    // run the code that doesn't include the feature
}
```

To get the configuration value of a feature flag for a given user context:

```Java
String myRemoteConfig = flagsmithClient.getFeatureFlagValue("my_test_feature", user);
if (myRemoteConfig != null) {    
    // run the code that uses the remote config value
} else {
    // run the code tbat doesn't depend on the remote config value
}
```

To get user traits for a given user context:

```Java
List<Trait> userTraits = flagsmithClient.getTraits(user)
if (userTraits != null && userTraits) {    
    // run the code that expects the user traits
} else {
    // run the code that doesn't depend on user traits
}
```

To get a user trait for a given user context and specific key:

```Java
Trait userTrait = flagsmithClient.getTrait(user, "cookies_key");
if (userTrait != null) {    
    // run the code that uses the user trait
} else {
    // run the code that doesn't depend on the user trait
}
```

Or get the user traits for a given user context and specific keys:

```Java
List<Trait> userTraits = flagsmithClient.getTraits(user, "cookies_key", "other_trait");
if (userTraits != null) {    
    // run the code that uses the user traits
} else {
    // run the code doesn't depend on user traits
}
```

To update the value for user traits for a given user context and specific keys:

```Java
Trait userTrait = flagsmithClient.getTrait(user, "cookies_key");
if (userTrait != null) {    
    // update the value for a user trait
    userTrait.setValue("new value");
    Trait updated = flagsmithClient.updateTrait(user, userTrait);
} else {
    // run the code that doesn't depend on the user trait
}
```

### Flags and Traits

Or get flags and traits for a user in a single call:

```Java
FlagsAndTraits userFlagsAndTraits = flagsmithClient.getUserFlagsAndTraits(user);
// get traits
List<Trait> traits = flagsmithClient.getTraits(userFlagsAndTraits, "cookies_key");
// or get a flag value
String featureFlagValue = flagsmithClient.getFeatureFlagValue("font_size", userFlagsAndTraits);
// or get flag enabled
boolean enabled = flagsmithClient.hasFeatureFlag("hero", userFlagsAndTraits);

// see above examples on how to evaluate flags and traits
```

## Override default configuration

By default, the client uses a default configuration. You can override the configuration as follows:

Override just the default API URI with your own:

```Java
FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
                .setApiKey("YOUR_ENV_API_KEY")
                .withApiUrl("http://yoururl.com")
                .build();
```

Override the full configuration with your own

```Java
FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
            .setApiKey("YOUR_ENV_API_KEY")
            .withConfiguration(FlagsmithConfig.newBuilder()
                    .baseURI("http://yoururl.com")
                    .connectTimeout(200)
                    .writeTimeout(5000)
                    .readTimeout(5000)
                    .build())
            .build();

```

### Logging

Logging is disabled by default. If you would like to enable it then call `.enableLogging()` on the client builder:

```java
FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
                // other configuration as shown above
                .enableLogging()
                .build();
```

Flagsmith uses [SLF4J](http://www.slf4j.org) and we only implement its API.
If your project does not already have SLF4J, then include an implementation, i.e.:

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>${slf4j.version}</version>
</dependency>
```

### Custom HTTP Headers

adding custom headers to all HTTP calls:

```java
final HashMap<String, String> customHeaders = new HashMap(){{
    put("x-custom-header", "value1");
    put("x-my-key", "value2");
}};
FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
    // other configuration as shown above
    .withCustomHttpHeaders(customHeaders)
    .build();
```

### In-Memory Caching

If you would like to use in-memory caching, you will need to enable it (it is disabled by default).
The main advantage of using in-memory caching is that you can reduce the number of HTTP calls performed to fetch flags.

Flagsmith uses [Caffeine](https://github.com/ben-manes/caffeine), a high performance, near optimal caching library.

If you enable caching on the Flagsmith client without setting any values (as shown below), the following default
values will be set for you:

- maxSize(10)
- expireAfterWrite(5, TimeUnit.MINUTES)

```java
// use in-memory caching with Flagsmith defaults as described above
final FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
                .setApiKey("YOUR_ENV_API_KEY")
                .withConfiguration(FlagsmithConfig
                        .newBuilder()
                        .baseURI("http://yoururl.com")
                        .build())
                .withCache(FlagsmithCacheConfig
                        .newBuilder()
                        .build())
                .build();
```

If you would like to change the default settings, you can overwrite them by using the available builder methods:

```java
// use in-memory caching with custom configuration
final FlagsmithClient flagsmithClient = FlagsmithClient.newBuilder()
                .setApiKey("YOUR_ENV_API_KEY")
                .withConfiguration(FlagsmithConfig
                        .newBuilder()
                        .baseURI("http://yoururl.com")
                        .build())
                .withCache(FlagsmithCacheConfig
                        .newBuilder()
                        .maxSize(100)
                        .expireAfterWrite(10, TimeUnit.MINUTES)
                        .recordStats()
                        .build())
                .build();
```

If you would like to manipulate the cache:

```java
// this will return null if caching is disabled
final FlagsmithCache cache = flagsmithClient.getCache();
// you can now discard a single or all entries in the cache
cache.invalidate("user-identifier");
// or
cache.invalidateAll();
// get stats (if you have enabled them in the cache configuration, otherwise all values will be zero)
final CacheStats stats = cache.stats();
// check if flags for a user identifier are cached
final FlagsAndTraits flags = cache.getIfPresent("user-identifier");
```
