---
title: Defensive Coding and Default Flags
---

Introducing Feature Flags and Remote Config to your applications can provide a wealth of benefits, but there are also a
few drawbacks. Fortunately, the majority of these can be avoided through defensive coding and sensible approaches to
default flags. There are a number of solutions to issues that we recommend you follow when introducing feature flags.

## Don't expect a 200 response from the Flagsmith API

First up - we care deeply about our [SaaS uptime and stability](https://flagsmith.statuspage.io/). Whilst no one has
100% uptime, in our experience there are numerous situations where your application is unable to get a response from our
API:

- They are using a mobile device, open your app, and step into a lift.
- They are using a web application in a hotel that has the craziest DNS setup you have ever seen.
- As above but for TLS certificates.
- They are running a DNS blocker that has over-zealous blacklists.

The list goes on and on, but the bottom line is that whilst our API being down is extremely unlikely, you cannot rely on
200's from our API in 100% of cases.

So with that in mind, here are some rules you can follow to avoid any issues stemming from the above.

## Don't block your application waiting on our response

The solution here really depends on which of our SDKs you are using. By default our Client SDKs will not block your main
application thread, and are designed to work around an asynchronous callback model.

Where our Server Side SDKs are being used, it really depends on if you are using them in
[local or remote evaluation mode](../clients/overview.md#server-side-sdks). When running in local evaluation mode, they
will eventually time out and resort to
[Default flags](#rule-2-progressively-enhance-your-application-with-default-flags). When running in remote evaluation
mode, you will need to decide what the best approach is based on your particular application. Again,
[Default flags](#rule-2-progressively-enhance-your-application-with-default-flags) can help here.

## Progressively enhance your application with default flags

The most effective way of dealing with these issues is to provide a sane set of default values for _all of your flags_.
The Flagsmith SDKs all have provision for specifying default values for both flag boolean and flag text values. We
strongly recommend setting defaults for all of your flags as a matter of routine.

Your application should operate in a default, safe mode and its behaviour should only be modified or enhanced with flags
on receiving an API response.

## Cache flags where possible

Our Javascript SDK has the capability of caching the last received flags in the localStorage of the user's browser. When
the browser starts a new session, the last cached flags will be used while waiting for a response from the API for a
fresh set of flags. This pattern helps if the browser never receives a response from the API.
