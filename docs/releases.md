description: Flagsmith Releases

# Releases

## v2.4

Relased **7 Dec 2020**

This release is the first under our new brand, Flagsmith.

The rebrand comes with no breaking changes, mainly just a refactor to urls and wording, however we have built several new features and bug fixes since our last release:

- If your api is using influx, we now show usage data in a graph format
![image](https://user-images.githubusercontent.com/8608314/101258233-16227880-3719-11eb-86c0-738c43d2ec0f.png)
- New look and feel
- Ability to bulk enable / disable all segment overrides and user overrides for a flag
![image](https://user-images.githubusercontent.com/8608314/101258463-87aef680-371a-11eb-9e98-35c976612962.png)
- Sensible page size for the users page
- Improved E2E stability
- Integration page, this page is almost fully managed by remote config. It will allow users t enhance Flagsmith with your favourite tools. We currently support data dog and will shortly support amplitude.
![image](https://user-images.githubusercontent.com/8608314/101258436-6ea64580-371a-11eb-8afe-3626eb36bbbe.png)

The remote config to use this is as follows:

```json
integrations:

["data_dog"]
```

```json
integration_data
{
    "perEnvironment": false,
    "image": "https://xyz",
    "fields": [
      {
        "key": "base_url",
        "label": "Base URL"
      },
      {
        "key": "api_key",
        "label": "API Key"
      }
    ],
    "tags": [
      "logging"
    ],
    "title": "Data dog",
    "description": "Sends events to Data dog for when flags are created, updated and removed. Logs are tagged with the environment they came from e.g. production."
}
```

## v2.3

Released **9 Nov 2020**

We've added a bunch of new features and bug fixes.

- You can now tag flags with user-defined tags. You can use these tags to manage flags and organise them. 
- Beta release of both [Data Dog](https://docs.bullet-train.io/integrations/datadog/) and [Amplitude](https://docs.bullet-train.io/integrations/amplitude/) integrations.
- You can now set multiple traits in a single call
- For a given feature, show which Identities have it individually overridden
- When viewing an Identity, show the segments and test whether the identity is a member of each segment

## v2.2

Released **12th June 2020**

- Flags that are defined with Segment overrides are now based on an Environment level, as opposed to a Project level. So you can now define Segment overrides differently between Environments
- Redesigned the left hand navigation area
- You can now filter the audit log per flag
- You can jump to a flags audit log from the main features page

## v2.1

Released **28th May 2020**

[Front End](https://github.com/BulletTrainHQ/bullet-train-frontend/releases/tag/v2.1.0) / [API](https://github.com/BulletTrainHQ/bullet-train-api/releases/tag/v2.1.0)

- Google OAuth2 integration
- 2 Factor authentication
- Influx DB integration for API call statistics
- The API can now set multiple traits in a single API request
- Fixed an issue where webhooks could miss data in a certain scenarios
- Mainly CSS design Tweaks

## v2.0

Released **19th December 2019**

- Removed Flagsmith homepage from Front End App
- Added Webhooks

## v1.9

Released **22nd September 2019**

- Added Segments
- Added Auditing Logs
- Better E2E testing
