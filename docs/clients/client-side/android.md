---
title: Flagsmith Android/Kotlin SDK
sidebar_label: Android
description: Manage your Feature Flags and Remote Config in your Android applications.
slug: /clients/android
---

This SDK can be used for Android applications written in Kotlin. The source code for the client is available on
[Github](https://github.com/Flagsmith/flagsmith-kotlin-android-client/).

## Installation

### Gradle - App

In your project path `app/build.gradle` add a new dependence

```groovy
//flagsmith
implementation 'com.github.Flagsmith/flagsmith-kotlin-android-client:1.0.0'
```

### Gradle - Project

In the new Gradle version 7+ update your `settings.gradle` file to include JitPack if you haven't already

```groovy
repositories {
    google()
    mavenCentral()

    maven { url "https://jitpack.io" }
}
```

<!-- ## Tutorial

### Android App Screens

![Android App Screens](/img/languages/kotlin-java-1.png) -->

## Basic Usage

The SDK is initialised against a single environment within a project on [https://flagsmith.com](https://flagsmith.com),
for example the Development or Production environment. You can find your Client-side Environment Key in the Environment
settings page.

![Image](/img/api-key.png)

## Initialization

### Within your Activity inside `onCreate()`

```kotlin
lateinit var flagsmith : Flagsmith

override fun onCreate(savedInstanceState: Bundle?) {
    initFlagsmith();
}

private fun initFlagsmith() {
    flagsmith = Flagsmith(environmentKey = FlagsmithConfigHelper.environmentDevelopmentKey, context = context)
}
```

## Flags

Now you are all set to retrieve feature flags from your project. For example to list and print all flags:

```kotlin
flagsmith.getFeatureFlags { result ->
    result.fold(
        onSuccess = { flagList ->
            Log.i("Flagsmith", "Current flags:")
            flagList.forEach { Log.i("Flagsmith", "- ${it.feature.name} - enabled: ${it.enabled} value: ${it.featureStateValue ?: "not set"}") }
        },
        onFailure = { err ->
            Log.e("Flagsmith", "Error getting feature flags", err)
        })
}
```

### Get Flag Object by `featureId`

To retrieve a feature flag boolean value by its name:

```kotlin
flagsmith.hasFeatureFlag(forFeatureId = "test_feature1") { result ->
    val isEnabled = result.getOrDefault(true)
    Log.i("Flagsmith", "test_feature1 is enabled? $isEnabled")
}
```

### Create a Trait for a user identity

```kotlin
flagsmith.setTrait(Trait(key = "set-from-client", value = "12345"), identity = "test@test.com") { result ->
    result.fold(
        onSuccess = { _ ->
            Log.i("Flagsmith", "Successfully set trait")

        },
        onFailure = { err ->
            Log.e("Flagsmith", "Error setting trait", err)
        })
}
```

### Get all Traits

To retrieve a trait for a particular identity as explained here
[Traits](../../basic-features/managing-identities.md#identity-traits)

```kotlin
flagsmith.getTraits(identity = "test@test.com") { result ->
    result.fold(
        onSuccess = { traits ->
            traits.forEach {
                Log.i("Flagsmith", "Trait - ${it.key} : ${it.value}")
            }
        },
        onFailure = { err ->
            Log.e("Flagsmith", "Error setting trait", err)
        })
}
```

## Override the default base URL

If you'd like to use your own API URL you can override this like so during initialization:

```kotlin
        flagsmith = Flagsmith(
            environmentKey = Helper.environmentDevelopmentKey,
            context = context,
            baseUrl = "https://hostedflagsmith.company.com/")
```
