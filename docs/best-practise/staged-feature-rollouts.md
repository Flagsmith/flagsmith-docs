---
title: Staged Feature Rollouts
---

## What are Staged Feature Rollouts

Staged Feature Rollouts allow you to test a new feature with a small subset of your user base. If you are happy with the
feature, you can increase the percentage of users that see the feature until it is available to your entire user base.

This method can increase your confidence in rolling out a new feature. If there are issues with the rollout, you can
simply disable the Feature Flag, thus hiding the feature within your application.

## Creating Staged Rollouts

:::important

Staged Rollouts **_only_** come into effect if you are getting the Flags for a particular Identity. If you are just
retrieving the flags for an Environment without passing in an Identity, your user will never be included in the "%
Split% Segment.

:::

You can achieve staged rollouts by creating a [Segment](/basic-features/managing-segments.md) and adding a rule defined
with the "% Split" condition. Specifying a "% Split" value between 1 and 100 then defines what percentage of your user
base are included within this Segment.

![Image](/img/percent-rollout.png)

Once you have created the Segment, you can then go ahead and connect it up to a Feature Flag as per regular
[Segments](/basic-features/managing-segments.md).

Note that you can include the "% Split" rule alongside other Segment rules if you wish.

## How does it work

Every Identity/Segment combination is combined and then hashed, and a floating point value between 0.0 and 1.0 is
generated from this hash. This value is then evaluated against the "% Split" rule.
