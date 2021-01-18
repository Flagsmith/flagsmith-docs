description: Perform A/B tests quickly and easily with Flagsmith, the Feature Flagging platform.

# A/B Testing

A/B testing enables you to expirement with design and functionality variants of your application. The data generated will allow you to make modifications to your app, safe in the knowledge that it will have a net postive effect.

You can use Flagsmith to perform A/B Testing. Using a combination of [Flagsmith Segments](/managing-segments) and a 3rd party analytics tool like [Google Analytics](https://analytics.google.com/) or [Mixpanel](https://mixpanel.com/), you can generate the relevant data to perform the A/B test.

## Overview

For this example, lets assume we have an app that currently accepts Credit Card payments only. We have a hunch that we are losing out on potential customers that would like to pay with Paypal. We're going to test whether adding Paypal to the payment options increases our checkout rate.

In order to perform an A/B Test, we need to complete the following steps:

1. Create a new Feature Flag that will control whether the user sees the Paypal Button or not. We'll call this flag "Paypal Checkout Enabled".
2. Create a new Segment, called "Paypal Checkout Enabled", with 1 Rule: Include users with a % Split figure of 50.
3. In our app, we want to [Identify](/managing-identities/) each user before they start the checkout process. All Flagsmith Segments need us to Identify the user, so we can uniquely identify them.
4. When we get to the checkout page, check the state of the "Paypal Checkout Enabled" flag for that user. If it is enabled, show the Paypal payment button.
5. Send a message to the Analytics platform, adding the name/value pair of "Paypal Checkout Enabled" and the value of the flag.
6. Deploy your app and watch the data come in.

## Example

We made [a repo](https://github.com/BulletTrainHQ/bullet-train-js-client/tree/master/examples/ab-testing) with a [JSFiddle](https://jsfiddle.net/vw0af7zq/) that demonstrates an A/B Test using Javascript.

## Anonymous/Unknown Identities

To do A/B testing you need to use Segments, and to use Segments you need to Identify your users. What if you want to run an A/B test in an area of your application where you dont know who your users are? For example on the homepage of your website? In this instance, you need to generate *GUID* values for your users.

A *GUID* value is just a random string that has an extremely high likelihood of being unique. There's more info about generating GUID values [on Stack Overflow](https://stackoverflow.com/a/2117523).

The general flow would be like this:

1. An new browser visits your website homepage for the first time.
2. You see that this is an anonymous user, so you generate a random *GUID* for that user and assign it to them.
3. You send that GUID along with an Identify call to Flagsmith. This will then segment that visitor.
4. You cookie the browser and store the GUID. That way, if the browser returns to your page, they will still be in the same segment.

These techniques will be slightly different depending on what platform you are developing for, but the general concept will remain the same.
