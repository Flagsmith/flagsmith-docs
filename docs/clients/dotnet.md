description: Manage your Feature Flags and Remote Config in your .Net applications.

This SDK can be used for .NET Core, .NET Framework, Mono, Xamarin and Universal Windows Platform applications. The source code for the client is available on [Github](https://github.com/BulletTrainHQ/bullet-train-dotnet-client).

## Getting Started

## Quick Setup

The client library is available from NuGet and can be added to your project by many tools. You can find the package here [https://www.nuget.org/packages/BulletTrain/](https://www.nuget.org/packages/BulletTrain/)

## Usage
**Retrieving feature flags for your project**

**For full documentation visit [https://docs.bullet-train.io](https://docs.bullet-train.io)**

Sign Up and create account at [https://bullet-train.io/](https://www.bullet-train.io/)

In your application initialise the Bullet Train client once with your environment API key and API URL.

```c#
BulletTrainConfiguration configuration = new BulletTrainConfiguration()
{
    ApiUrl = "https://api.bullet-train.io/api/v1/",
    EnvironmentKey = "env-key-goes-here"
};

BulletTrainClient bulletClient = new BulletTrainClient(configuration);
```

You can then use the `instance` static variable on `BulletTrainClient` anywhere within your app.

To check if a feature flag exists and is enabled:

```c#
bool featureEnabled = await BulletTrainClient.instance.HasFeatureFlag("my_test_feature");
if (featureEnabled) {
    // run the code to execute enabled feature
} else {
    // run the code if feature switched off
}
```

To get a remote config feature value:

```c#
string myRemoteConfig = await BulletTrainClient.instance.GetFeatureValue("my_test_feature");
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

**Identifying users**

Identifying users allows you to target specific users from the [Bullet Train dashboard](https://www.bullet-train.io/).

To check if a feature exists and is enabled for a specific user:

```c#
bool featureEnabled = await BulletTrainClient.instance.HasFeatureFlag("my_test_feature", "my_user_id");
if (featureEnabled) {
    // run the code to execute enabled feature for given user
} else {
    // run the code when feature switched off
}
```

To get a remote config value for specific user:

```c#
string myRemoteConfig = await BulletTrainClient.instance.GetFeatureValue("my_test_feature", "my_user_id");
if (myRemoteConfig != null) {
    // run the code to use remote config value
} else {
    // run the code without remote config
}
```

To get user traits:

```c#
List<Trait> userTraits = await BulletTrainClient.instance.GetTraits("my_user_id")
if (userTraits != null && userTraits) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To get a specific user trait:

```c#
string userTrait = await BulletTrainClient.instance.GetTrait("my_user_id", "cookies_key");
bool userTrait = await BulletTrainClient.instance.GetBoolTrait("my_user_id", "cookies_key");
int userTrait = await BulletTrainClient.instance.GetIntegerTrait("my_user_id", "cookies_key");
```

To get filtered user traits:

```c#
List<Trait> userTraits = await BulletTrainClient.instance.GetTraits("my_user_id", new List<string> { "specific_key", /* rest of elements */ });
if (userTraits != null) {
    // run the code to use user traits
} else {
    // run the code without user traits
}
```

To set or update a user trait:

```c#
Trait userTrait = await BulletTrainClient.instance.SetTrait("my_user_id", "my_user_trait", "blue");
Trait userTrait = await BulletTrainClient.instance.SetTrait("my_user_id", "my_user_number_trait", 4);
Trait userTrait = await BulletTrainClient.instance.SetTrait("my_user_id", "my_user_bool_trait", true);
```

To increment a numeric user trait:

```c#
Trait userTrait = await BulletTrainClient.instance.IncrementTrait("my_user_id", "my_user_number_trait", 1);
```

To retrieve a user identity (both features and traits):

```c#
Identity userIdentity = await BulletTrainClient.instance.GetUserIdentity("my_user_id");
if (userIdentity != null) {
  // Run the code to use user identity i.e. userIdentity.flags or userIdentity.traits
}
```

## Contributing

Please read [Contributing](/contributing) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email [support@bullet-train.io](mailto:support@bullet-train.io).
