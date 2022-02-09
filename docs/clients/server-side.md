---
description: Manage your Feature Flags and Remote Config in your Server Side Applications.
sidebar_label: Server Side
sidebar_position: 2
---

# Server Side SDKs

Server Side SDKs can run in 2 different modes: `Local Evaluation` and `Remote Evaluation`. We recommend
[reading up about the differences](overview#remote-and-local-evaluation-modes) first before integrating the SDKS into
your applications.

Once you've got understood, lets get the SDKs integrated!

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
# Maven
<dependency>
  <groupId>com.flagsmith</groupId>
  <artifactId>flagsmith-java-client</artifactId>
  <version>3.1</version>
</dependency>

# Gradle
implementation 'com.flagsmith:flagsmith-java-client:2.8'
```

</TabItem>
</Tabs>

## Initialise the SDK

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
from flagsmith import Flagsmith
from flagsmith.models import DefaultFlag

app = Flask(__name__)

flagsmith = Flagsmith(
    environment_key = os.environ.get("FLAGSMITH_SERVER_SIDE_SDK_TOKEN"),
    defaults=[
        # Set a default flag which will be used if the "secret_button"
        # feature is not returned by the API or if the API is not reachable
        DefaultFlag(
            enabled = False,
            value = json.dumps({"colour": "#b8b8b8"}),
            feature_name = "secret_button",
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
</Tabs>

## Get Flags for an Environment

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
flags = flagsmith.get_environment_flags() # This method triggers a network request
show_button = flags.is_feature_enabled("secret_button")
button_data = json.loads(flags.get_feature_value("secret_button"))
```

</TabItem>
<TabItem value="java" label="Java">

```java
Java
```

</TabItem>
</Tabs>

## Get Flags for an Identity

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
identifier = "delboy@trotterstraders.co.uk"
traits = {"age": 32}

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
</Tabs>

## Configuring the SDK

You can modify the behaviour of the SDK during initialisation. Full configuration options are shown below.

<Tabs groupId="language">
<TabItem value="py" label="Python">

```python
flagsmith = Flagsmith(
    # Your API Token.
    # Required.
    environment_key = os.environ.get("FLAGSMITH_SERVER_SIDE_SDK_TOKEN"),

    # Controls which mode to run in; local or remote evaluation.
    # Optional.
    # Defaults to False.
    enable_local_evaluation = False,

    # Override the default Flagsmith API URL if you are self-hosting.
    # Optional.
    api_url = "https://api.yourselfhostedflagsmith.com/api/v1",

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
    retries: Retry = None,

    # Controls whether Flag Analytics data is sent to the Flagsmith API
    # See https://docs.flagsmith.com/advanced-use/flag-analytics
    # Optional
    # Defaults to False
    enable_analytics: bool = False,

    # You can pass custom headers to the Flagsmith API with this Dictionary.
    # This can be helpful, for example, when sending request IDs to help trace requests.
    # Optional
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
</Tabs>
