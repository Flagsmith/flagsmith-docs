description: Group your users based on a set of rules, then control Feature Flags and Remote Config for those groups.

# Segments

Segments allow you to group your users based on a set of rules, and then control Feature Flags and Remote Config for
those groups. You can create a Segment and then override a Feature Flag state or Remote Config value for that segment of
users.

Segments for Flags and Config are overridden at the Environment level, meaning that different Environments can define
their own Segment overrides.

## Example - Beta Users

Let's say that you want all your team to automatically be defined as `Beta Users`. Right now, all your logged in users
are [identified](/managing-identities/) with their email address along with some other
[traits](/managing-identities/#identity-traits).

You create a new Segment, call it `Beta Users`, and define a single rule:

- `email_address` contains `@flagsmith.com`

<img src="/images/edit-segment.png"/>

Once the Segment has been defined, you can then associate that Segment with a specific Feature Flag. To do this, edit
the Feature Flag that you want to connect our Segment to. You then have the option of connecting a Segment to the
Feature. If the Identified user is a member of that Segment, the flag will be overridden.

<img src="/images/edit-feature-with-segment.png"/>

For all the Feature Flags that relate to Beta features, you can associate this `Beta Users` segment with each Flag, and
set the Flag value to `true` for that Segment. To do this, edit the Feature Flag and select the segment in the 'Segment
Overrides' drop down.

At this point, all users who log in with an email address that contains `@flagsmith.com` will have all Beta features
enabled.

Let's say that you then partner with another company who need access to all Beta features. You can then simply modify
the Segment rules:

- `email_address` contains `@flagsmith.com`
- `email_address` contains `@solidstategroup.com`

Now all users who log in with a `@solidstategroup.com` email address are automatically included in beta features.

## Feature Flag and Remote Config Precedence

Feature Flag states and Remote Config values can be defined in 3 different places:

1. The default Flag/Config value itself
2. The Segment associated with the Flag/Config
3. Overridden at an Identity level

For example, a Feature Flag `Show Paypal Checkout` could be set to `false` on the Flag itself, `true` in the Beta Users
segment, and then overridden as `false` for a specific Identity.

In order to deal with this situation, there is an order of priority:

1. If the Identity has an override value, this is returned ahead of Segments and Flags/Config
2. If there's no Identity override, the Segment is checked and returned if valid
3. If no Identity or Segment overrides the value, the default Flag/Config value is used

More simply, the order of precendence is:

1. Identity
2. Segment
3. Flag
