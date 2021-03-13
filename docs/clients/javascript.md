description: Manage your Feature Flags and Remote Config in your Javascript applications.

This library can be used with pure Javascript, React (and all other popular frameworks/libraries) and React Native projects. The source code for the client is available on [Github](https://github.com/flagsmith/flagsmith-js-client).

Example applications for a variety of Javascript frameworks such as React, Vue and Angular, as well as React Native, can be found here:

- [Flagsmith Framework Examples](https://github.com/flagsmith/flagsmith-js-client/tree/master/examples)

## Installation

### NPM

```bash
npm i flagsmith --save
```

### Via JavaScript CDN

```html
<script src="https://cdn.jsdelivr.net/npm/flagsmith/lib/index.js"></script>
```

### NPM for React Native

```bash
npm i react-native-flagsmith --save
```

## Basic Usage

The SDK is initialised against a single environment within a project on [https://flagsmith.com](https://flagsmith.com),
for example the Development or Production environment. You can find your environment key in the Environment settings page.

<img src="/images/api-key.png"/>

### Example: Initialising the SDK

```javascript
import flagsmith from "flagsmith or react-native-flagsmith"; //Add this line if you're using flagsmith via npm

flagsmith.init({
    environmentID:"<YOUR_ENVIRONMENT_KEY>",
    cacheFlags: true,
    onChange: (oldFlags,params)=>{ //Occurs whenever flags are changed
        const {isFromServer} = params; //determines if the update came from the server or local cached storage

        //Check for a feature
        if (flagsmith.hasFeature("myCoolFeature")){
            myCoolFeature();
        }

        //Or, use the value of a feature
        const bannerSize = flagsmith.getValue("bannerSize");

        //Check whether value has changed
        const bannerSizeOld = oldFlags["bannerSize"] && oldFlags["bannerSize"].value;
        if (bannerSize !== bannerSizeOld) {

        }
    }
});
```

## Identifying users

Identifying users allows you to target specific users from the Flagsmith dashboard and configure features and traits. You can call this before or after you initialise the project, calling it after will re-fetch features from the API.

User features can be managed by navigating to users on [https://flagsmith.com](https://flagsmith.com) for your desired project.
 <img src="/images/user-features.png"/>

### Example: Initialising the SDK and identifying as a user

```javascript
import flagsmith from 'flagsmith';

/*
Can be called both before or after you're done initialising the project.
Calling identify before will prevent flags being fetched twice.
*/
flagsmith.identify("bullet_train_sample_user"); //This will create a user in the dashboard if they don't already exist

//Standard project initialisation
flagsmith.init({
    environmentID: "QjgYur4LQTwe5HpvbvhpzK",
        onChange: (oldFlags,params)=>{ //Occurs whenever flags are changed

        const {isFromServer} = params; //determines if the update came from the server or local cached storage

        //Set a trait against the Identity
        flagsmith.setTrait("favourite_colour","blue"); //This save the trait against the user, it can be queried with flagsmith.getTrait 

        //Check for a feature
        if (flagsmith.hasFeature("myPowerUserFeature")){
            myPowerUserFeature();
        }

        //Check for a trait
        if (!flagsmith.getTrait("accepted_cookie_policy")){
            showCookiePolicy();
        }

        //Or, use the value of a feature
        const myPowerUserFeature = flagsmith.getValue("myPowerUserFeature");

        //Check whether value has changed
        const myPowerUserFeatureOld = oldFlags["myPowerUserFeature"] && oldFlags["myPowerUserFeature"].value;
        if (myPowerUserFeature !== myPowerUserFeatureOld) {

        }

    }
})
```

## API Reference

### Initialisation options

| Property        | Description           | Required  | Default Value  |
| ------------- |:-------------:| -----:| -----:|
| ```environmentID```     | Defines which project environment you wish to get flags for. *example ACME Project - Staging.* | **YES** | null
| ```onChange```     | Your callback function for when the flags are retrieved ``` (flags,{isFromServer:true/false})=>{...} ``` | **YES** | null
| ```onError```     | Callback function on failure to retrieve flags. ``` (error)=>{...} ``` | | null
| ```AsyncStorage```     | Needed for cacheFlags option, used to tell the library what implementation of AsyncStorage your app uses, i.e. ReactNative.AsyncStorage vs @react-native-community/async-storage. | | null
| ```cacheFlags```     | Any time flags are retrieved they will be cached, flags and identities will then be retrieved from local storage before hitting the API ``` | | null
| ```enableAnalytics```     | [Enable sending flag analytics](/flag-analytics/) for getValue and hasFeature evaluations. | | false
| ```enableLogs```     | Enables logging for key Flagsmith events ``` | | null
| ```defaultFlags```     | Allows you define default features, these will all be overridden on first retrieval of features. | | null
| ```preventFetch```     | If you want to disable fetching flags and call getFlags later. | | false
| ```api```     | Use this property to define where you're getting feature flags from, e.g. if you're self hosting. | | https://api.flagsmith.com/api/v1/

### Available Functions

| Property        | Description |
| ------------- |:-------------:|
| ```init```     | Initialise the sdk against a particular environment
| ```hasFeature(key)```     | Get the boolean value of a particular *Feature Flag*  e.g. ```flagsmith.hasFeature("powerUserFeature") // true```
| ```getValue(key)```     | Get the value of a particular *Remote Config Value* e.g. ```flagsmith.getValue("font_size") // 10```
| ```getTrait(key)```     | Once used with an identified user you can get the value of any trait that is set for them e.g. ```flagsmith.getTrait("accepted_cookie_policy")```
| ```setTrait(key, value)```     | Once used with an identified user you can set the value of any trait relevant to them e.g. ```flagsmith.setTrait("accepted_cookie_policy", true)```
| ```setTraits(object)```     | Set multiple traits e.g. ```flagsmith.setTraits({foo:"bar",numericProp:1,boolProp:true})```. Setting a value of null for a trait will remove that trait.
| ```incrementTrait(key, value)```     | You can also increment/decrement a particular trait them e.g. ```flagsmith.incrementTrait("click_count", 1)```
| ```startListening(ticks=1000)```     | Poll the api for changes every x milliseconds
| ```stopListening()```     | Stop polling the api
| ```getFlags()```     | Trigger a manual fetch of the environment features, if a user is identified it will fetch their features. Resolves a promise when the flags are updated.
| ```identify(userId)```     | Identify as a user, this will create a user for your environment in the dashboard if they don't exist, it will also trigger a call to ```getFlags()```, resolves a promise when the flags are updated.
| ```logout()```     | Stop identifying as a user, this will trigger a call to ```getFlags()```

## FAQs

**How do I call ``identify``, ``setTraits`` etc alongside ``init``?**

- ``init`` should be called once in your application, we recommend you call ``init`` before any other flagsmith call.  
-  ``init`` retrieves flags by default, you can turn this off with the ``preventFetch`` option to ``init``. This is useful for when you know you're identifying a user straight after.

**When does onChange callback?**

``onChange`` calls when flags are fetched this can be a result of:

    - init
    - setTrait
	- incrementTrait
    - getFlags
    - identify
    - flags evaluated by local storage

Using onChange is best used in combination with your application's state management e.g. onChange triggering an action to re-evaluate flags with ``hasFeature`` and ``getValue``.

However, if this does not fit in with your development pattern, all the above flagsmith functions return a promise that resolves when fresh flags have been retrieved.

For example by doing the following:

```
    await flagsmith.setTrait("age",21)
    const hasFeature = flagsmith.hasFeature("my_feature")
```

On change calls back with information telling you what has changed, you can use this to prevent any unnecessary re-renders.

```
    onChange(this.oldFlags, {
        isFromServer: true, // flags have come from the server or local storage
        flagsChanged: deepEqualsCheck(oldFlags,newFlags),
        traitsChanged: deepEqualsCheck(oldFlags,newFlags),
    });
```

**How does caching flags work?**

If the ``cacheFlags`` is set to true on ``init``, the SDK will cache flag evaluations in local async storage. Upon reloading the browser, an onChange event will be fired immediately with the local storage flags. The flow for this is as follows

1 - ``init`` is called
2 - if ``cacheFlags`` is enabled, local storage checks for any stored flags and traits.
3 - if flags have been found in local storage, ``onChange`` is triggered with the stored flags.
4 - at the same time, fresh flags will be retrieved which will result in another ``onChange`` callback.
5 - whenever flags have been retrieved local storage will be updated.

By default, these flags will be persisted indefinitely, you can clear this by removing ``"BULLET_TRAIN_DB"`` from ``localStorage``.
