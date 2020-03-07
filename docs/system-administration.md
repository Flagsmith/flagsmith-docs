description: Manage additional aspects of your Bullet Train platform.

# System Administration

## Web Hooks

You can use the Web Hooks to send events from Bullet Train into your own infrastructure. Web Hooks are managed at an Environment level, and can be configured in the Environment settings page.

<img src="/images/add-webhook.png"/>

Currently the following events will generate a Web Hook action:

- Creating Flags
- Updating Flag state (both Flags and Remote Config)
- Deleting Flags

You can define any number of Web Hook endpoints per Environment. Web Hooks can be managed from the Environment settings page.

A typical use case for Web Hooks is if you want to cache flag state locally within your server environment.

Each event generates an HTTP POST with the following body payload to each of the Web Hooks defined within that Environment:

```json
{
    "data": {
        "author": {
            "email": "ben@bullet-train.io",
            "first_name": "Ben",
            "id": 8,
            "last_name": "Rometsch"
        },
        "created_date": "2020-02-24T11:18:28.809498Z",
        "environment": {
            "api_key": "AF6tmkbBLywFXChJ7dTyCo",
            "id": 14,
            "name": "Development",
            "project": 7
        },
        "log": "Flag state / Remote Config value updated for feature: power_user",
        "project": {
            "id": 7,
            "name": "This is great",
            "organisation": 7
        },
        "related_object_id": 37,
        "related_object_type": "FEATURE_STATE"
    },
    "event_type": "AUDIT_LOG_CREATED"
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

## Full API Access

The client SDK libraries are designed solely for end client use, and do not have an interface to the full Bullet Train API. However, you can easily access the full API by generating a login token and sending that with your API requests. To generate a login token, send an HTTP POST to [https://api.bullet-train.io/auth/login](https://api.bullet-train.io/auth/login) with the following JSON payload:

```bash
curl -X "POST" "https://api.bullet-train.io/v1/auth/login/" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "username": "<admin username>",
  "password": "<admin password>"
}'
```

This will generate a token (that does not expire) which you can then use with subsequent API calls. You can pass this token in the HTTP header with `Token <token>`
