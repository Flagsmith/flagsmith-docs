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

To retrieve flags by an identity and specified traits use this:

```kotlin
val result = client.getIdentityFlags("development_user_identity", traits = hasMapOf("fav_colour" to "color_hex"))
for (flag in flags.allFlags) {
    val name = flag.featureName
    val value = flag.value
    val enabled = flag.enabled
    println("$name = enabled: $enabled value: $value")
}
```

For more info about managing identities check out this article:
[Identities](https://docs.flagsmith.com/managing-identities/)

For more info about identity traits follow this article:
[Traits](https://docs.flagsmith.com/managing-identities/#identity-traits)

## Override default configuration

If you would like to change the default settings, you can overwrite them by using the available builder methods:

```kotlin
val client: FlagsmithClient = FlagsmithClient.Builder()
    .apiKey("YOUR_ENV_API_KEY")
    .apiUrl("http://yoururl.com")
    .customHeaders(hashMapOf("headerKey" to "headerVal"))
    .build()
```

or by using the `FlagsmithConfig` you're able to define more advanced settings:

```kotlin
val config: FlagsmithConfig = FlagsmithConfig.Builder()
    .baseUri("http://yoururl.com")
    .addHttpInterceptor(interceptor)
    .environmentRefreshIntervalSeconds(10)
    .build()

val client: FlagsmithClient = FlagsmithClient.Builder()
    .apiKey("YOUR_ENV_API_KEY")
    .configuration(config)
    .build()
```

For more info about the available `FlagsmithConfig`'s builder methods see the
[Configuring the SDK](https://docs.flagsmith.com/clients/server-side#configuring-the-sdk) article.
