description: Manage your Feature Flags and Remote Config in your PHP applications.

# Flagsmith Client

The SDK client for Rust [https://flagsmith.com/](https://www.flagsmith.com/). Flagsmith allows you to manage feature flags and remote config across multiple projects, environments and organisations.

The source code for the client is available on [Github](https://github.com/BulletTrainHQ/bullet-train-rust-client).

## Usage

### Retrieving feature flags for your project

For full documentation visit [https://docs.bullet-train.io](https://docs.bullet-train.io)

Sign Up and create account at [https://bullet-train.io/](https://www.bullet-train.io/)

In your application initialise the BulletTrain client with your API key

```rust
let bt = bullettrain::Client::new("<Your API Key>");
```

To check if a feature flag exists and is enabled:

```rust
let bt = bullettrain::Client::new("<Your API Key>");
if bt.feature_enabled("cart_abundant_notification_ab_test_enabled")? {
    println!("Feature enabled");
}
```

To get the configuration value for feature flag value:

```rust
use bullettrain::{Client,Value};

let bt = Client::new("<Your API Key>");

if let Some(Value::String(s)) = bt.get_value("cart_abundant_notification_ab_test")? {
    println!("{}", s);
}
```

More examples can be found in the [Tests](https://github.com/Flagsmith/flagsmith-rust-client/blob/master/tests/integration_test.rs)

## Override default configuration

By default, client is using default configuration. You can override configuration as follows:

```rust
let bt = bullettrain::Client {
    api_key: String::from("secret key"),
    base_uri: String::from("https://features.on.my.own.server/api/v1/"),
};
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email <a href="mailto:support@bullet-train.io">support@bullet-train.io</a>.
