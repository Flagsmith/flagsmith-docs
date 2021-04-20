description: Manage additional aspects of your Flagsmith platform.

# System Administration

## Web Hooks

You can use the Web Hooks to send events from Flagsmith into your own infrastructure. Web Hooks are managed at an Environment level, and can be configured in the Environment settings page.

<img src="/images/add-webhook.png"/>

Currently the following events will generate a Web Hook action:

- Creating Features (Sent as event_type FLAG_UPDATED)
- Updating Feature value / state in an environment (Sent as event_type FLAG_UPDATED)
- Overriding a Feature for an identity (Sent as event_type FLAG_UPDATED)
- Overriding a Feature for a segment (Sent as event_type FLAG_UPDATED)

You can define any number of Web Hook endpoints per Environment. Web Hooks can be managed from the Environment settings page.

A typical use case for Web Hooks is if you want to cache flag state locally within your server environment.

Each event generates an HTTP POST with the following body payload to each of the Web Hooks defined within that Environment:

```json
 {
  "data": {
    "changed_by": "Some User",
    "new_state": {
      "enabled": true,
      "environment": 23,
      "feature": {
        "created_date": "2020-02-25T22:11:16.355547Z",
        "default_enabled": false,
        "description": null,
        "id": 2411,
        "initial_value": "blue",
        "name": "feature_name",
        "project": 12,
        "type": "FLAG|CONFIG"
      },
      "feature_segment": null,
      "feature_state_value": null,
      "id": 10430,
      "identity": null,
      "identity_identifier": null
    },
    "previous_state": {
    "enabled": false,
      "environment": 23,
      "feature": {
        "created_date": "2020-02-25T22:11:16.355547Z",
        "default_enabled": false,
        "description": null,
        "id": 2411,
        "initial_value": "red",
        "name": "feature_name",
        "project": 12,
        "type": "FLAG|CONFIG"
      },
      "feature_segment": null,
      "feature_state_value": null,
      "id": 10430,
      "identity": null,
      "identity_identifier": null
    },
    "timestamp": "2020-03-07T13:59:07.040Z"
  },
  "event_type": "FLAG_UPDATED"
}
```

## Audit Log Webhooks

You can use Audit Log Webhooks to stream your Organisation's Audit Log into your own infrastructure. This can be useful for compliance or to reference against local CI/CD infrastructure.

```json
{
  "created_date": "2020-02-23T17:30:57.006318Z",
  "log": "New Flag / Remote Config created: my_feature",
  "author": {
    "id": 3,
    "email": "user@domain.com",
    "first_name": "Kyle",
    "last_name": "Johnson"
  },
  "environment": null,
  "project": {
    "id": 6,
    "name": "Project name",
    "organisation": 1
  },
  "related_object_id": 6,
  "related_object_type": "FEATURE"
}
```
