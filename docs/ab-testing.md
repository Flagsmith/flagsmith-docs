# A/B Testing

A/B testing enables you to expirement with design and functionality variants of your application. The data generated will allow you to make modifications to your app, safe in the knowledge that it will have a net postive effect.

You can use Bullet Train to perform A/B Testing. Using a combination of [Bullet Trains Segments](/managing-segments) and a 3rd party analytics tool like [Google Analytics](https://analytics.google.com/) or [Mixpanel](https://mixpanel.com/), you can generate the relevant data to perform the A/B test.

## Overview

For this example, lets assume we have an app that currently accepts Credit Card payments only. We have a hunch that we are losing out on potential customers that would like to pay with Paypal. We're going to test whether adding Paypal to the payment options increases our checkout rate.

In order to perform an A/B Test, we need to complete the following steps:

1. Create a new Feature Flag that will control whether the user sees the Paypal Button or not. We'll call this flag "Paypal Checkout Enabled".
2. Create a new Segment, called "Paypal Checkout Enabled", with 1 Rule: Include users with a % Split figure of 50.
3. In our app, we want to [Identify](/managing-identities/) each user before they start the checkout process. All Bullet Train Segments need us to Identify the user, so we can uniquely identify them.
4. When we get to the checkout page, check the state of the "Paypal Checkout Enabled" flag for that user. If it is enabled, show the Paypal payment button.
5. Send a message to the Analytics platform, adding the name/value pair of "Paypal Checkout Enabled" and the value of the flag.
6. Deploy your app and watch the data come in.

## Example

We made [a repo](https://github.com/BulletTrainHQ/bullet-train-js-client/tree/master/examples/ab-testing) with a [JSFiddle](https://jsfiddle.net/vw0af7zq/) that demonstrates an A/B Test using Javascript. 
