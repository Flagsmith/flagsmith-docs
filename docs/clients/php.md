description: Manage your Feature Flags and Remote Config in your PHP applications.

# Bullet Train Client
The SDK client for PHP [https://bullet-train.io/](https://www.bullet-train.io/). Bullet Train allows you to manage feature flags and remote config across multiple projects, environments and organisations.

## Installing VIA composer

```composer require bullettrainhq/bullet-train-php-client```

## Usage

Retrieving feature flags for your project. For full documentation visit [https://docs.bullet-train.io](https://docs.bullet-train.io).

```php
use BulletTrain\BulletTrain;

$bt = new BulletTrain('H8YyJ3vxBaSFVfX229MUFU');

$flags = $bt->getFlags();
foreach ($flags as &$value) {
    print_r($value);
}
```

### Available Options

| Property        | Description           | Required  | Default Value  |
| ------------- |:-------------:| -----:| -----:|
| ```environmentID```     | Defines which project environment you wish to get flags for. *example ACME Project - Staging.* | **YES** | null

### Available Functions

| Property        | Description |
| ------------- |:-------------:|
| ```getFlags()```     | Trigger a manual fetch of the environment features, if a user is identified it will fetch their features
| ```featureEnabled(key)```     | Get the value of a particular feature e.g. ```bulletTrain.hasFeature("powerUserFeature") // true```
| ```featureEnabled(key, userId)```     | Get the value of a particular feature for a user e.g. ```bulletTrain.hasFeature("powerUserFeature", 1234) // true```
| ```getValue(key)```     | Get the value of a particular feature e.g. ```bulletTrain.getValue("font_size") // 10```
| ```getValue(key, userId)```     | Get the value of a particular feature for a specificed user e.g. ```bulletTrain.getValue("font_size", 1234) // 15```
| ```setTrait(userId, key, value)```     | Sets a trait for a particular user e.g. ```bulletTrain.setTrait(1234, "accepted_cookie_policy", true)```
| ```getTraits(userId)```     | Gets all the traits for the Identity

## Contributing

Please read [Contributing](/contributing) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email [support@bullet-train.io](mailto:support@bullet-train.io).
