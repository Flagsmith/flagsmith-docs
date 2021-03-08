description: Get analytics on your Feature Flag SDK evaluations.

# Feature Flag Analytics

Flag Analytics allow you to track how often individual Flags are evaluated within the Flagsmith SDK.

To view Analytics for a particular flag, browse to the relevant environment and click on a single flag to edit that flag.

<img src="/images/flag-analytics.png" width="90%"/>

Flag Analytics can be really useful when removing flags from Flagsmith. More often than not, flags can be removed from your codebase and platform once they have been rolled out and everyone is comfortable with them running in production.

Once you have removed the evaluation code from your code base, its nice to be sure that all references to that flag have been removed, and that removing the flag itself from Flagsmith will not cause any unforseen issues. Flag Analytics help with this.

Flag Analytics can also be helpful when identifying integration issues. Occasionally errors can creep into your code that cause multiple needless evaluations of a flag. Again, these analytics can help isolate these situations.

## SDK Support

We currently support Flag Analytics with the following SDKs:

* [Javascript and React/React Native](/clients/javascript/)

We are working to build integrate Flag Analytics with our other SDKs but happy to take Pull Requests!
