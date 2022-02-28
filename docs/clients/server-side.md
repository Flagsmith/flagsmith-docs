---
description: Manage your Feature Flags and Remote Config in your Server Side Applications.
sidebar_label: Server Side
sidebar_position: 2
---

# Server Side SDKs

:::tip

Server Side SDKs can run in 2 different modes: `Local Evaluation` and `Remote Evaluation`. We recommend
[reading up about the differences](overview#remote-and-local-evaluation-modes) first before integrating the SDKS into
your applications.

Once you've got that understood, lets get the SDKs integrated!

:::

## Github Links

All our SDKs are on Github.

<Tabs groupId="language">
<TabItem value="py" label="Python">

[Python SDK](https://github.com/Flagsmith/flagsmith-python-client)

</TabItem>
<TabItem value="java" label="Java">

[Java SDK](https://github.com/Flagsmith/flagsmith-java-client)

</TabItem>
<TabItem value="dotnet" label=".NET">

[.NET SDK](https://github.com/Flagsmith/flagsmith-dotnet-client)

</TabItem>
</Tabs>

## Add the Flagsmith package

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs groupId="language">
<TabItem value="py" label="Python">

```bash
pip install flagsmith
```

</TabItem>
<TabItem value="java" label="Java">

```xml
# Check https://search.maven.org/artifact/com.flagsmith/flagsmith-java-client for the latest version!

# Maven
<dependency>
  <groupId>com.flagsmith</groupId>
  <artifactId>flagsmith-java-client</artifactId>
  <version>4.0.1</version>
</dependency>

# Gradle
implementation 'com.flagsmith:flagsmith-java-client:4.0.1'
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```bash
# Package Manager
Install-Package Flagsmith -Version 4.0.0

#.NET CLI
dotnet add package Flagsmith --version 4.0.0

# PackageReference
<PackageReference Include="Flagsmith" Version="4.0.0" />

# Paket CLI
paket add Flagsmith --version 4.0.0
```

</TabItem>
</Tabs>

## Initialise the SDK

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
from flagsmith import Flagsmith

flagsmith = Flagsmith(
    environment_key = os.environ.get("FLAGSMITH_ENVIRONMENT_KEY")
)
```

</TabItem>
<TabItem value="java" label="Java">

```java
Java
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```csharp
using Flagsmith;

static FlagsmithClient _flagsmithClient;

_flagsmithClient = new("FLAGSMITH_ENVIRONMENT_KEY");
```

</TabItem>
</Tabs>

## Get Flags for an Environment

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
# The method below triggers a network request
flags = flagsmith.get_environment_flags()
show_button = flags.is_feature_enabled("secret_button")
button_data = json.loads(flags.get_feature_value("secret_button"))
```

</TabItem>
<TabItem value="java" label="Java">

```java
Java
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```csharp
# Sync
# The method below triggers a network request
var flags = _flagsmithClient.GetEnvironmentFlags();  # This method triggers a network request
var showButton = flags.IsFeatureEnabled("secret_button");
var buttonData = flags.GetFeatureValue("secret_button").Result;

# Async
# The method below triggers a network request
var flags = await _flagsmithClient.GetEnvironmentFlags();  # This method triggers a network request
var showButton = await flags.IsFeatureEnabled("secret_button");
var buttonData = await flags.GetFeatureValue("secret_button").Result;
```

</TabItem>
</Tabs>

## Get Flags for an Identity

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
identifier = "delboy@trotterstraders.co.uk"
traits = {"age": 32}

# The method below triggers a network request
identity_flags = flagsmith.get_identity_flags(identifier=identifier, traits=traits)
show_button = identity_flags.is_feature_enabled("secret_button")
button_data = json.loads(identity_flags.get_feature_value("secret_button"))
```

</TabItem>
<TabItem value="java" label="Java">

```java
Java
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```csharp
var Identifier = "delboy@trotterstraders.co.uk";
var traitKey = "age";
var traitValue = 32;
var traitList = new List<Trait> { new Trait(traitKey, traitValue) };

# Sync
# The method below triggers a network request
var flags = _flagsmithClient.GetIdentityFlags(Identifier, traitList);
var showButton = flags.IsFeatureEnabled("secret_button");

# Async
# The method below triggers a network request
var flags = await _flagsmithClient.GetIdentityFlags(Identifier, traitList);
var showButton = await flags.IsFeatureEnabled("secret_button");
```

</TabItem>
</Tabs>

## Managing Default Flags

Default Flags are configured by passing in a function that is called when a Flag cannot be found.

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
from flagsmith import Flagsmith
from flagsmith.models import DefaultFlag

def default_flag_handler(feature_name: str) -> DefaultFlag:
    """
    Function that will be used if the API doesn't respond, or an unknown
    feature is requested
    """
    if feature_name == "secret_button":
        return DefaultFlag(
            enabled=False,
            value=json.dumps({"colour": "#b8b8b8"}),
            feature_name="secret_button",
        )
    ],
    return DefaultFlag(False, None)

flagsmith = Flagsmith(
    environment_key=os.environ.get("FLAGSMITH_ENVIRONMENT_KEY"),
    default_flag_handler=default_flag_handler,
)
```

</TabItem>
<TabItem value="java" label="Java">

```java
Java
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```csharp
using Flagsmith;

static FlagsmithClient _flagsmithClient;

_flagsmithClient = new("FLAGSMITH_ENVIRONMENT_KEY", defaultFlagHandler: defaultFlagHandler);
static Flag defaultFlagHandler(string featureName)
{
    // Function that will be used if the API doesn't respond, or an unknown
    // feature is requested
    if (featureName == "secret_button")
        return new Flag(new Feature("secret_button"), enabled: false, value: JsonConvert.SerializeObject(new { colour = "#b8b8b8" }).ToString());
    else return new Flag() { };
}
```

</TabItem>
</Tabs>

## Network Behaviour

The Server Side SDKS share the same network behaviour across the different languages:

### Remote Evaluation Mode Network Behaviour

- A blocking network request is made every time you make a call to get an Environment Flags. In Python, for example,
  `flagsmith.get_environment_flags()` will trigger this request.
- A blocking network request is made every time you make a call to get an Identities Flags. In Python, for example,
  `flagsmith.get_identity_flags(identifier=identifier, traits=traits)` will trigger this request.

### Local Evaluation Mode Network Behaviour

- When the SDK is initialised, it will make an asnchronous network request to retrieve details about the Environment.
- Every 60 seconds (by default), it will repeat this aysnchronous request to ensure that the Environment information it
  has is up to date.

## Configuring the SDK

You can modify the behaviour of the SDK during initialisation. Full configuration options are shown below.

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
flagsmith = Flagsmith(
    # Your API Token.
    # Note that this is either the `Environment API` key or the `Server Side SDK Token`
    # depending on if you are using Local or Remote Evaluation
    # Required.
    environment_key = os.environ.get("FLAGSMITH_ENVIRONMENT_KEY"),

    # Controls which mode to run in; local or remote evaluation.
    # See the `SDKs Overview Page` for more info
    # Optional.
    # Defaults to False.
    enable_local_evaluation = False,

    # Override the default Flagsmith API URL if you are self-hosting.
    # Optional.
    # Defaults to https://edge.api.flagsmith.com/api/v1/
    api_url = "https://api.yourselfhostedflagsmith.com/api/v1/",

    # The network timeout in seconds.
    # Optional.
    # Defaults to 10 seconds
    request_timeout_seconds = 10,

    # When running in local evaluation mode, defines
    # how often to request an updated Environment document in seconds
    # Optional
    # Defaults to 60 seconds
    environment_refresh_interval_seconds: int = 60,

    # A `urllib3` Retries object to control network retry policy
    # See https://urllib3.readthedocs.io/en/latest/reference/urllib3.util.html#urllib3.util.Retry
    # Optional
    # Defaults to None
    retries: Retry = None,

    # Controls whether Flag Analytics data is sent to the Flagsmith API
    # See https://docs.flagsmith.com/advanced-use/flag-analytics
    # Optional
    # Defaults to False
    enable_analytics: bool = False,

    # You can pass custom headers to the Flagsmith API with this Dictionary.
    # This can be helpful, for example, when sending request IDs to help trace requests.
    # Optional
    # Defaults to None
    custom_headers: typing.Dict[str, typing.Any] = None,

    # You can specify default Flag values on initialisation.
    # Optional
    defaults = [
        # Set a default flag which will be used if the "secret_button"
        # feature is not returned by the API or if the API is not reachable
        DefaultFlag(
            enabled=False,
            value=json.dumps({"colour": "#b8b8b8"}),
            feature_name="secret_button",
        ),
        DefaultFlag(
            enabled=True,
            feature_name="secret_feature",
        )
    ],
)
```

</TabItem>
<TabItem value="java" label="Java">

```java
Java
```

</TabItem>
<TabItem value="dotnet" label=".NET">

```csharp
_flagsmithClient = new(
    # Your API Token.
    # Note that this is either the `Environment API` key or the `Server Side SDK Token`
    # depending on if you are using Local or Remote Evaluation
    # Required.
    environmentKey: "FLAGSMITH_ENVIRONMENT_KEY",

    # Pass in a default Flag Handler method
    # Optional
    defaultFlagHandler: defaultFlagHandler,

    # Override the default Flagsmith API URL if you are self-hosting.
    # Optional.
    # Defaults to https://edge.api.flagsmith.com/api/v1/
    apiUrl: "https://flagsmith.myproject.com"

    # Controls which mode to run in; local or remote evaluation.
    # See the `SDKs Overview Page` for more info
    # Optional.
    # Defaults to False.
    enableClientSideEvaluation = false;

    # Controls whether Flag Analytics data is sent to the Flagsmith API
    # See https://docs.flagsmith.com/advanced-use/flag-analytics
    # Optional
    # Defaults to false
    enableAnalytics: false

    # When running in local evaluation mode, defines
    # how often to request an updated Environment document in seconds
    # Optional
    # Defaults to 60 seconds
    environmentRefreshIntervalSeconds: 60

    # You can pass custom headers to the Flagsmith API with this Dictionary.
    # This can be helpful, for example, when sending request IDs to help trace requests.
    # Optional
    # Defaults to None
    customHeaders: <Dictionary>

    # How often to retry failed HTTP requests
    # Optional
    # Defaults to 1
    retries: 1

    # The network timeout in seconds.
    # Optional.
    # Defaults to null (http client default)
    requestTimeout = null,
)
```

</TabItem>
</Tabs>

## Contribute to the SDKs

All our SDKs are Open Source.

<Tabs groupId="language">
<TabItem value="py" label="Python">

https://github.com/Flagsmith/flagsmith-python-client

</TabItem>
<TabItem value="java" label="Java">

https://github.com/Flagsmith/flagsmith-java-client

</TabItem>
</Tabs>
