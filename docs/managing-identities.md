# Identities

Identities are created within Bullet Train automatically the first time they are identified from your client SDKs. Generally you'd make a call to identify a user with a unique string/id whenever they log into your app/site.

Identity features can be overridden from your environment defaults. For example, joe@yourwebsite.com would be a different identity in your development environment to the one in production, and they can have different features enabled for each environment.

## Identity Feature Flags

By default, Identities receive the default flags for their environment. The main use for identities is to be able to override flags and configs on a per-identity basis. You can do this by navigating to the Users page, finding the user and modifying their flags. 

## Identity Traits

You can also use Bullet Train to store 'Traits' against identities. Traits are simply key/value pairs that are associated with individual Identities. Traits can be used to store additional data about your users that would be cumbersome to store within your application. Some possible uses for traits could be:

- Storing whether the user has accepted a new set of terms and conditions.
- Storing the last viewed page of the application so that you can resume the users place later, across any device.

Generally if they are lower-value pieces of information about your user, it might be simpler/easier to store them in Bullet Train rather than in your core application.

Traits are stored natively as either numbers, strings or booleans.

## Traits powering Segments

When the Segments feature is built, you will be able to specify segments based on Identity Traits.