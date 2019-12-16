# System Administration

## Web Hooks

You can use the Web Hooks to send events from Bullet Train into your own infrastructure. Currently the following events will generate a Web Hook action:

- Creating Flags
- Updating Flag state (both Flags and Remote Config)
- Deleting Flags

You can define any number of Web Hook endpoints per Environment. Web Hooks can be managed from the Environment settings page.

A typical use case for Web Hooks is if you want to cache flag state locally within your server environment.

Each event generates an HTTP POST with the following body payload to each of the Web Hooks defined within that Environment:

```json
{
    "data": {
        "changed_by": "Admin User",
        "new_state": {
            "enabled": true,
            "environment": 33,
            "feature": {
                "created_date": "2019-12-11T15:47:26.959385Z",
                "default_enabled": true,
                "description": null,
                "id": 33,
                "initial_value": null,
                "name": "your_feature_name",
                "project": 33,
                "type": "FLAG"
            },
            "feature_segment": null,
            "feature_state_value": null,
            "id": 33,
            "identity": null
        },
        "timestamp": "2019-12-11T15:47:26.973Z"
    },
    "event_type": "FLAG_UPDATED"
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

## Permissions and User Roles

There are currently 2 different role type available when managing the application.

We will be rolling out fine grained user permissions in a future release.

### Admin Role

The Admin Role can perform all actions within the application, including the management of users who have access to the Bullet Train administrative console.

### Standard User

The Standard User can perform all actions within the application, but they *cannot* manage users within the Bullet Train administrative console.
