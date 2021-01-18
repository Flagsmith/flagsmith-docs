description: Manage your Feature Flags and Remote Config in your iOS applications.

# iOS Client

This library can be used with iOS and Mac applications. The source code for the client is available on [Github](https://github.com/BulletTrainHQ/bullet-train-ios-client).

## Installation

### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate Flagsmith into your Xcode project using CocoaPods, specify it in your `Podfile`:

```ruby
pod 'BulletTrainClient', '~> 1.0'
```

## Usage

### Sign Up

Sign up at [Flagsmith](https://flagsmith.com/) and create a project. Take a note of the API key which you will need to configure your app.

### Initialization

Within your application delegate (usually *AppDelegate.swift*) add:

```swift
import BulletTrainClient
```

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

BulletTrain.shared.apiKey = "<YOUR_API_KEY>"
// The rest of your launch method code
}
```

Now you are all set to retrieve feature flags from your project. For example to list and print all flags:

```swift
BulletTrain.shared.getFeatureFlags() { (result) in
    switch result {
    case .success(let flags):
        for flag in flags {
            let name = flag.feature.name
            let value = flag.value
            let enabled = flag.enabled
            print(name, "= enabled:", enabled, "value:", value ?? "nil")
        }
    case .failure(let error):
        print(error)
    }
}
```

To retrieve a feature flag boolean value by its name:

```swift
BulletTrain.shared.hasFeatureFlag(withID: "test_feature1", forIdentity: nil) { (result) in
    print(result)
}
```

To retrieve a config value by its name:

```swift
BulletTrain.shared.getFeatureValue(withID: "test_feature2", forIdentity: nil) { (result) in
    switch result {
    case .success(let value):
        print(value ?? "nil")
    case .failure(let error):
        print(error)
    }
}
```

These methods can also specify a particular identity to retrieve the values for a user registration. See [Identities](https://docs.flagsmith.com/managing-identities/) , using the **forIdentity** parameter.

To retrieve a trait for a particular identity (see [Traits](https://docs.flagsmith.com/managing-identities/#identity-traits)):

```swift
BulletTrain.shared.getTraits(forIdentity: "test_user@test.com") {(result) in
    switch result {
    case .success(let traits):
        for trait in traits {
            let name = trait.key
            let value = trait.value
            print(name, "=", value)
        }
    case .failure(let error):
        print(error)
    }
}
```

## Contributing

Please read [Contributing](/contributing) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email [support@flagsmith.com](mailto:support@flagsmith.com).
