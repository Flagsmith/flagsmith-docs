description: Perform A/B tests quickly and easily with Flagsmith, the Feature Flagging platform.

# A/B Testing

A/B testing enables you to expirement with design and functionality variants of your application. The data generated will allow you to make modifications to your app, safe in the knowledge that it will have a net postive effect.

You can use Flagsmith to perform A/B Tests. Using a combination of [Multivariate Flags](/managing-features/) and a 3rd party analytics tool like [Amplitude](https://amplitude.com/) or [Mixpanel](https://mixpanel.com/), you can easily perform complex A/B tests that will help improve your product.

Running AB tests require two main components: a bucketing engine and an analytics platform. The bucketing engine is used to put users into a particular AB testing bucket. These buckets will control the specific user experience that is being tested. The analytics platform will receive a stream of event data derived from the behaviour of the user. Combining these two concepts allows you to deliver seamless AB test.

## Overview

For this example, lets assume we have an app that currently accepts Credit Card payments only. We have a hunch that we are losing out on potential customers that would like to pay with Paypal. We're going to test whether adding Paypal to the payment options increases our checkout rate.

We have a lot of users on our platform, so we dont want to run this test against our entire user-base. We want 90% of our users to be excluded from the test. Then for our test, 5% of our users will see the new Paypal button, and the remaining 5% will be the control. So we will have 3 buckets:

1. Excluded Users
2. Paypal Test Button Users
3. Control Users

In order to perform the A/B Test, we need to complete the following steps:

1. Create a new Multivariate Feature Flag that will control which of the 3 buckets the user is put into. We'll call this flag "Paypal Checkout Test". We will provide 3 variate options:
  
    1. Excluded (90% of users)
    2. Paypal Button (5% of users)
    3. Control (5% of users)

2. In our app, we want to [Identify](/managing-identities/) each user before they start the checkout process. All Flagsmith Multivariate flags need us to Identify the user, so we can bucket them in a reproducable manner.
3. When we get to the checkout page, check the state of the "Paypal Checkout Test" flag for that user. If it is option 2, show the Paypal payment button.
4. Send an event message to the Analytics platform, adding the name/value pair of "Paypal Checkout Enabled" and the value of the flag.
5. Deploy your app, enable the flag and watch the data come in.

## Example

We made [a repo](https://github.com/flagsmith/flagsmith-js-client/tree/master/examples/ab-testing) with a [JSFiddle](https://jsfiddle.net/vw0af7zq/) that demonstrates an A/B Test using Javascript.

## Anonymous/Unknown Identities

To do A/B testing you need to use Segments, and to use Segments you need to Identify your users. What if you want to run an A/B test in an area of your application where you dont know who your users are? For example on the homepage of your website? In this instance, you need to generate *GUID* values for your users.

A *GUID* value is just a random string that has an extremely high likelihood of being unique. There's more info about generating GUID values [on Stack Overflow](https://stackoverflow.com/a/2117523).

The general flow would be like this:

1. An new browser visits your website homepage for the first time.
2. You see that this is an anonymous user, so you generate a random *GUID* for that user and assign it to them.
3. You send that GUID along with an Identify call to Flagsmith. This will then segment that visitor.
4. You cookie the browser and store the GUID. That way, if the browser returns to your page, they will still be in the same segment.

These techniques will be slightly different depending on what platform you are developing for, but the general concept will remain the same.
