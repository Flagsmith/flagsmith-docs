description: Manage your Feature Flags and Remote Config in your PHP applications.

# Flagsmith Client

The SDK client for PHP [https://flagsmith.com/](https://www.flagsmith.com/). Flagsmith allows you to manage feature
flags and remote config across multiple projects, environments and organisations.

The source code for the client is available on [Github](https://github.com/flagsmith/flagsmith-php-client).

## Installing VIA composer

`composer require flagsmith/flagsmith-php-client`

## Basic Usage

The SDK is initialised against a single environment within a project on [https://flagsmith.com](https://flagsmith.com),
for example the Development or Production environment. You can find your environment key in the Environment settings
page.

<img src="/images/api-key.png"/>

## Usage

Retrieving feature flags for your project. For full documentation visit
[https://docs.flagsmith.com](https://docs.flagsmith.com).

```php
use Flagsmith\Flagsmith;

$bt = new Flagsmith('H8YyJ3vxBaSFVfX229MUFU');

$flags = $bt->getFlags();
foreach ($flags as &$value) {
    print_r($value);
}
```

### Available Options

| Property              |                                        Description                                         | Required |                       Default Value |
| --------------------- | :----------------------------------------------------------------------------------------: | -------: | ----------------------------------: |
| `environment api key` | Defines which project environment you wish to get flags for. E.g. `H8YyJ3vxBaSFVfX229MUFU` |  **Yes** |                                null |
| `api url`             |  Defines the base URL for the Flagsmith API. Override this value if you are self hosting   |   **No** | `https://api.flagsmith.com/api/v1/` |

### Available Functions

| Property                       |                                                   Description                                                    |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------: |
| `getFlags()`                   |     Trigger a manual fetch of the environment features, if a user is identified it will fetch their features     |
| `featureEnabled(key)`          |         Get the value of a particular feature e.g. `bulletTrain.hasFeature("powerUserFeature") // true`          |
| `featureEnabled(key, userId)`  | Get the value of a particular feature for a user e.g. `bulletTrain.hasFeature("powerUserFeature", 1234) // true` |
| `getValue(key)`                |               Get the value of a particular feature e.g. `bulletTrain.getValue("font_size") // 10`               |
| `getValue(key, userId)`        | Get the value of a particular feature for a specificed user e.g. `bulletTrain.getValue("font_size", 1234) // 15` |
| `setTrait(userId, key, value)` |       Sets a trait for a particular user e.g. `bulletTrain.setTrait(1234, "accepted_cookie_policy", true)`       |
| `getTraits(userId)`            |                                       Gets all the traits for the Identity                                       |
