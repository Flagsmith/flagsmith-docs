---
title: Managing Identities
description: Manage user traits and properties independently of your application.
---

Feature flags are great, but they can be a very blunt tool, only allowing you to enable or disable flags across your
entire user base. In order to target users more precisely, and to be able to perform
[staged feature rollouts](/advanced-use/staged-feature-rollouts.md), you need to _Identify your Users_.

Identities are created within Flagsmith automatically the first time they are identified from your client SDKs.
Generally you'd make a call to identify a user with a unique string/id whenever they log into your app/site. The SDK
will then send an API message to the Flagsmith API, with the relevant Identity information.

Once you have uniquely identified a user, you can then override features for that user from your environment defaults.
For example, you've pushed a feature into production, but the relevant feature flag is still hiding that feature to all
of your users. You can now override that flag for your own user, and test that feature. Once you are happy with
everything, you can roll that feature out to all of your users by enabling the flag itself.

Identities are specific and indivdual for each Environment within your project. For example, joe@yourwebsite.com would
be a different identity in your development environment to the one in production, and they can have different features
enabled for each environment.

## Identity Feature Flags

By default, Identities receive the default flags for their environment. The main use-case for identities is to be able
to override flags and configs on a per-identity basis. You can do this by navigating to the Users page, finding the User
and modifying their Flags.

## Identity Traits

You can also use Flagsmith to store 'Traits' against identities. Traits are simply key/value pairs that are associated
with individual Identities. Traits can be used to store additional data about your users that would be cumbersome to
store within your application. Some possible uses for traits could be:

- Storing whether the user has accepted a new set of terms and conditions.
- Storing the last viewed page of the application so that you can resume the users place later, across any device.

Generally if they are lower-value pieces of information about your user, it might be simpler/easier to store them in
Flagsmith rather than in your core application.

Traits are stored natively as either numbers, strings or booleans.

<img src="/img/identity-details.png"/>

## Traits powering Segments

Traits can be used within your application, but they also be used to power
[Segments](/basic-features/managing-segments.md).
