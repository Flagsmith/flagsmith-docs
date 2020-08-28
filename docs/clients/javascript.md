description: Manage your Feature Flags and Remote Config in your Javascript applications.

This library can be used with pure Javascript, React (and all other popular frameworks/libraries) and React Native projects. The source code for the client is available on [Github](https://github.com/BulletTrainHQ/bullet-train-js-client).

Example applications for Web and React Native can be found here:

- [Web example](https://github.com/BulletTrainHQ/bullet-train-js-client/tree/master/bullet-train-client/example)
- [React Native example](https://github.com/BulletTrainHQ/bullet-train-js-client/tree/master/react-native-bullet-train/example)

Examples applications for many popular JS frameworks such as React, Vue and Angular can be found here:

- [JS framework examples](https://github.com/BulletTrainHQ/bullet-train-examples)

## Installation

### NPM

```bash
npm i bullet-train-client --save
```

### Via JavaScript CDN

```html
<script src="https://cdn.jsdelivr.net/npm/bullet-train-client/lib/index.js"></script>
```

### NPM for React Native

```bash
npm i react-native-bullet-train --save
```

## Basic Usage

The SDK is initialised against a single environment within a project on [https://bullet-train.io](https://bullet-train.io),
for example the Development or Production environment. You can find your environment key in the Environment settings page.

<img src="/images/api-key.png"/>

### Example: Initialising the SDK

```javascript
import bulletTrain from "bullet-train-client or react-native-bullet-train"; //Add this line if you're using bulletTrain via npm

bulletTrain.init({
    environmentID:"<YOUR_ENVIRONMENT_KEY>",
    cacheFlags: true,
    onChange: (oldFlags,params)=>{ //Occurs whenever flags are changed

        const {isFromServer} = params; //determines if the update came from the server or local cached storage

        //Check for a feature
        if (bulletTrain.hasFeature("myCoolFeature")){
            myCoolFeature();
        }


        //Or, use the value of a feature
        const bannerSize = bulletTrain.getValue("bannerSize");

        //Check whether value has changed
        const bannerSizeOld = oldFlags["bannerSize"] && oldFlags["bannerSize"].value;
        if (bannerSize !== bannerSizeOld) {

        }

    }
});
```

## Identifying users

Identifying users allows you to target specific users from the Bullet Train dashboard and configure features and traits. You can call this before or after you initialise the project, calling it after will re-fetch features from the API.

User features can be managed by navigating to users on [https://bullet-train.io](https://bullet-train.io) for your desired project.
 <img src="/images/user-features.png"/>

### Example: Initialising the SDK and identifying as a user

```javascript
import bulletTrain from 'bullet-train-client';

/*
Can be called both before or after you're done initialising the project.
Calling identify before will prevent flags being fetched twice.
*/
bulletTrain.identify("bullet_train_sample_user"); //This will create a user in the dashboard if they don't already exist
bulletTrain.setTrait("favourite_colour","blue"); //This save the trait against the user, it can be queried with bulletTrain.getTrait 

//Standard project initialisation
bulletTrain.init({
    environmentID: "QjgYur4LQTwe5HpvbvhpzK",
        onChange: (oldFlags,params)=>{ //Occurs whenever flags are changed

        const {isFromServer} = params; //determines if the update came from the server or local cached storage

        //Check for a feature
        if (bulletTrain.hasFeature("myPowerUserFeature")){
            myPowerUserFeature();
        }

        //Check for a trait
        if (!bulletTrain.getTrait("accepted_cookie_policy")){
            showCookiePolicy();
        }

        //Or, use the value of a feature
        const myPowerUserFeature = bulletTrain.getValue("myPowerUserFeature");

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
| ```enableLogs```     | Enables logging for key bullet train events ``` | | null
| ```defaultFlags```     | Allows you define default features, these will all be overridden on first retrieval of features. | | null
| ```preventFetch```     | If you want to disable fetching flags and call getFlags later. | | false
| ```api```     | Use this property to define where you're getting feature flags from, e.g. if you're self hosting. | | https://api.bullet-train.io/api/v1/

### Available Functions

| Property        | Description |
| ------------- |:-------------:|
| ```init```     | Initialise the sdk against a particular environment
| ```hasFeature(key)```     | Get the boolean value of a particular *Feature Flag* e.g. ```bulletTrain.hasFeature("powerUserFeature") // true```
| ```getValue(key)```     | Get the value of a particular *Remote Config Value* e.g. ```bulletTrain.getValue("font_size") // 10```
| ```getTrait(key)```     | Once used with an identified user you can get the value of any trait that is set for them e.g. ```bulletTrain.getTrait("accepted_cookie_policy")```
| ```setTrait(key, value)```     | Once used with an identified user you can set the value of any trait relevant to them e.g. ```bulletTrain.setTrait("accepted_cookie_policy", true)```
| ```setTraits(object)```     | Set multiple traits e.g. ```bulletTrain.setTraits({foo:"bar",numericProp:1,boolProp:true})```. Setting a value of null for a trait will remove that trait.
| ```incrementTrait(key, value)```     | You can also increment/decrement a particular trait them e.g. ```bulletTrain.incrementTrait("click_count", 1)```
| ```startListening(ticks=1000)```     | Poll the api for changes every x milliseconds
| ```stopListening()```     | Stop polling the api
| ```getFlags()```     | Trigger a manual fetch of the environment features, if a user is identified it will fetch their features
| ```identify(userId)```     | Identify as a user, this will create a user for your environment in the dashboard if they don't exist, it will also trigger a call to ```getFlags()```
| ```logout()```     | Stop identifying as a user, this will trigger a call to ```getFlags()```

## Notes on initialisation

``identify``, ``setTrait`` and ``setTraits`` all trigger calls to ``getFlags``, which in turn hits the get flags endpoint. This is due to identities and traits affecting flags that are returned.

However, you can avoid these extra calls to get flags if you call these functions before  ``bulletTrain.init``.

## Contributing

Please read [Contributing](/contributing) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email [support@bullet-train.io](mailto:support@bullet-train.io).
