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

```gradle
//flagsmith
implementation 'com.github.Flagsmith/flagsmith-kotlin-android-client:0.1.0'
```

### Gradle - Project

In new gradle version 7+ write at file "settings.gradle"

```gradle
repositories {
    google()
    mavenCentral()

    maven { url "https://jitpack.io" }

}
```

## Tutorial

### Android App Screens

![Android App Screens](/img/languages/kotlin-java-1.png)

## Basic Usage

The SDK is initialised against a single environment within a project on [https://flagsmith.com](https://flagsmith.com),
for example the Development or Production environment. You can find your Client-side Environment Key in the Environment
settings page.

## Initialization

### Create class `Helper` to set the constant key

- This key generated from Dashboard Website
- By default, the client uses a default configuration. You can override the configuration as follows Override just the
  default API URI with your own:

```kotlin
object Helper {

   var tokenApiKey: String = "a97c6f022fe7b736f7bcf6f99019337a7ff2f7d3"
   var environmentDevelopmentKey = "DaeCHJMjZtSmNuuzhV9UWy"
   var identifierUserKey: String = "development_test_user_123456";
}
```

### Within your Activity inside `onCreate()`

```kotlin
lateinit var flagBuilder : FlagsmithBuilder

override fun onCreate(savedInstanceState: Bundle?) {
    initBuilder();
}

private fun initBuilder() {
    flagBuilder = FlagsmithBuilder.Builder()
        .tokenApi( Helper.tokenApiKey)
        .environmentId(Helper.environmentDevelopmentKey)
        .identifierUser( Helper.identifierUserKey)
        .build();
}
```

## Flags

### Flag Object Data

```kotlin
data class ResponseFlagElement (
    val id: Long,
    val feature: Feature,
    val featureStateValue: String,
    val environment: Long,
    val identity: Any? = null,
    val featureSegment: Any? = null,
    val enabled: Boolean
)

data class Feature (
    val id: Long,
    val name: String,
    val description: String,
    val type: String
)
```

Now you are all set to retrieve feature flags from your project. For example to list and print all flags

```kotlin
//listener
flagBuilder.getAllFlag(
    object : IFlagArrayResult {
        override fun success(list: ArrayList<ResponseFlagElement>) {
        }

    override fun failed(str: String) {
    }
});
```

Check Flag key is found

```kotlin
flagBuilder.hasFeatureFlag(keyFlag, object  : IFeatureFoundChecker {
    override fun found() {

    }

    override fun notFound() {

    }
})
```

### Get Flag Object by `featureId`

To retrieve a config value by its name

```kotlin
flagBuilder.getFeatureByIdAPi(   searchText, object  : IFlagSingle{
    override fun success(flag: ResponseFlagElement) {

    }

    override fun failed(str: String) {

    }
});
```

### Create Tait by `keyTrait` and `valueTrait`

```kotlin
flagBuilder.createTrait(  key, value, object  : ITraitUpdate {
    override fun success(response: ResponseTraitUpdate) {

    }

    override fun failed(str: String) {

    }
})
```

### Get all Traits

To retrieve a trait for a particular identity [Traits](../../basic-features/managing-identities.md#identity-traits)

```kotlin
flagBuilder.getAllTrait(   object : ITraitArrayResult {
    override fun success(list: ArrayList<Trait>) {

    }

    override fun failed(str: String) {


    }
})
```
