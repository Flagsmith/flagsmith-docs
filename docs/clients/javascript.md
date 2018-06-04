This library can be used with pure Javascript, React and React Native projects. The source code for the client is available on [Github](https://github.com/SolidStateGroup/bullet-train-js-client).

## Installation

**NPM**

```
npm i bullet-train-client --save
```

**Via JavaScript CDN**

```
<script src="https://cdn.jsdelivr.net/npm/bullet-train-client/lib/index.js"></script>
```

**NPM for React Native**
```
npm i react-native-bullet-train --save
```

## Basic Usage

The SDK is initialised against a single environment within a project on [https://bullet-train.io](https://bullet-train.io),
for example the Development or Production environment. You can find your environment key in the Environment settings page.
 
<img src="/images/api-key.png"/>
 
Example applications for Web and React Native can be found here:
 - [Web example](https://github.com/SolidStateGroup/bullet-train-js-client/tree/master/bullet-train-client/example)
 - [React Native example](https://github.com/SolidStateGroup/bullet-train-js-client/tree/master/react-native-bullet-train/example)

**Example: Initialising the SDK**

```javascript
import bulletTrain from "bullet-train-client or react-native-bullet-train"; //Add this line if you're using bulletTrain via npm

bulletTrain.init({
	environmentID:"<YOUR_ENVIRONMENT_KEY>",
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

Identifying users allows you to target specific users from the Bullet Train dashboard. You can call this before or after you initialise the project, calling it after will re-fetch features from the API.

User features can be managed by navigating to users on [https://bullet-train.io](https://bullet-train.io) for your desired project.
 <img src="/images/user-features.png"/>

**Example: Initialising the SDK and identifying as a user**

```
import bulletTrain from 'bullet-train-client';

/*
Can be called both before or after you're done initialising the project.
Calling identify before will prevent flags being fetched twice.
*/
bulletTrain.identify("bullet_train_sample_user",{traits}); //This will create a user in the dashboard if they don't already exist

//Standard project initialisation
bulletTrain.init({
	environmentID: "QjgYur4LQTwe5HpvbvhpzK",
		onChange: (oldFlags,params)=>{ //Occurs whenever flags are changed
	
		const {isFromServer} = params; //determines if the update came from the server or local cached storage
		
		//Check for a feature
		if (bulletTrain.hasFeature("myPowerUserFeature")){
			myPowerUserFeature();
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

**Initialisation options**

| Property        | Description           | Required  | Default Value  |
| ------------- |:-------------:| -----:| -----:|
| ```environmentID```     | Defines which project environment you wish to get flags for. *example ACME Project - Staging.* | **YES** | null
| ```onChange```     | Your callback function for when the flags are retrieved ``` (flags,{isFromServer:true/false})=>{...} ``` | **YES** | null
| ```onError```     | Callback function on failure to retrieve flags. ``` (error)=>{...} ``` | | null
| ```defaultFlags```     | Allows you define default features, these will all be overridden on first retrieval of features. | | null
| ```disableCache```     | If you want to disable local storage of feature flags. | | false
| ```api```     | Use this property to define where you're getting feature flags from, e.g. if you're self hosting. | | https://featureflagger.3qqe.flynnhub.com/api/

**Available Functions**

| Property        | Description |         
| ------------- |:-------------:|
| ```init```     | Initialise the sdk against a particular environment
| ```hasFeature(key)```     | Get the value of a particular feature e.g. ```bulletTrain.hasFeature("powerUserFeature") // true```
| ```getValue(key)```     | Get the value of a particular feature e.g. ```bulletTrain.getValue("font_size") // 10```
| ```startListening(ticks=1000)```     | Poll the api for changes every x milliseconds
| ```stopListening()```     | Stop polling the api
| ```getFlags()```     | Trigger a manual fetch of the environment features, if a user is identified it will fetch their features
| ```identify(userId)```     | Identify as a user, this will create a user for your environment in the dashboard if they don't exist, it will also trigger a call to ```getFlags()```
| ```logout()```     | Stop identifying as a user, this will trigger a call to ```getFlags()```

