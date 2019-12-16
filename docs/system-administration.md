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
        "changed_by": "Ben Rometsch",
        "new_state": {
            "enabled": true,
            "environment": 4053,
            "feature": {
                "created_date": "2019-12-11T15:47:26.959385Z",
                "default_enabled": true,
                "description": null,
                "id": 2391,
                "initial_value": null,
                "name": "your_feature_name",
                "project": 1661,
                "type": "FLAG"
            },
            "feature_segment": null,
            "feature_state_value": null,
            "id": 7952,
            "identity": null
        },
        "timestamp": "2019-12-11T15:47:26.973Z"
    },
    "event_type": "FLAG_UPDATED"
}
```

## Permissions and User Roles

There are currently 2 different role type available when managing the application.

We will be rolling out fine grained user permissions in a future release.

### Admin Role

The Admin Role can perform all actions within the application, including the management of users who have access to the Bullet Train administrative console.

### Standard User

The Standard User can perform all actions within the application, but they *cannot* manage users within the Bullet Train administrative console.
