---
title: Flagsmith Android/Kotlin SDK
sidebar_label: Android
description: Manage your Feature Flags and Remote Config in your Android applications.
slug: /clients/android
---

## Installation

The client library is available from the Central Maven Repository and can be added to your project by many tools:

### Maven

Add following dependencies to your project in `pom.xml`

```xml
<dependency>
    <groupId>com.flagsmith</groupId>
    <artifactId>flagsmith-kotlin-client</artifactId>
    <version>5.0.0</version>
</dependency>
```

### Gradle

```groovy
implementation 'com.flagsmith:flagsmith-kotlin-client:5.0.0'
```

## Basic Usage

The SDK is initialised against a single environment within a project on [https://flagsmith.com](https://flagsmith.com),
for example the Development or Production environment. You can find your Client-side Environment Key in the Environment
settings page.

![Image](/img/api-key.png)

### Initialization

Within your application delegate (usually _App.kt_) add:

```kotlin
import com.flagsmith.kotlin.FlagsmithClient
```

```kotlin
val client: FlagsmithClient = FlagsmithClient.Builder()
    .apiKey("YOUR_ENV_API_KEY")
    .build()
```

Now you are all set to retrieve feature flags from your project. For example to list and print all flags:

```kotlin
val flags: Flags = client.getEnvironmentFlags()
for (flag in flags.allFlags) {
    val name = flag.featureName
    val value = flag.value
    val enabled = flag.enabled
    println("$name = enabled: $enabled value: $value")
}
```

To retrieve a feature flag boolean value by its name:

```kotlin
val result = client.hasFeatureFlag("test_feature1", forIdentity = null)
println(result)
```

To retrieve a config value by its name:

```kotlin
val result = client.getFeatureValue("test_feature2", forIdentity = null)
println(result)
```

These methods can also specify a particular identity to retrieve the values for a user registration. See
[Identities](https://docs.flagsmith.com/managing-identities/) , using the **forIdentity** parameter.

To retrieve a trait for a particular identity (see
[Traits](https://docs.flagsmith.com/managing-identities/#identity-traits)):

```kotlin
val traits: Traits = client.getTraits(forIdentity: "test_user@test.com")
for(trait in traits.allTraits){
    val name = trait.key
    val value = trait.value
    println("$name = $value")
}
```

## Override default configuration

If you would like to change the default settings, you can overwrite them by using the available builder methods:

```kotlin
val client: FlagsmithClient = FlagsmithClient.Builder()
    .apiKey("YOUR_ENV_API_KEY")
    .apiUrl("http://yoururl.com")
    .customHeaders(hashMapOf("headerKey" to "headerVal"))
    .build()
```
