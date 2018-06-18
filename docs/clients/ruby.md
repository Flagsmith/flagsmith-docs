<img width="100%" src="https://raw.githubusercontent.com/SolidStateGroup/bullet-train-frontend/master/hero.png"/>

# Bullet Train Client
The SDK clients for Ruby [https://bullet-train.io/](https://www.bullet-train.io/). Bullet Train allows you to manage feature flags and remote config across multiple projects, environments and organisations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See running in production for notes on how to deploy the project on a live system.

## Installing

### VIA gem
```gem install bullet-train-client```
	
## Usage
**Retrieving feature flags for your project**

**For full documentation visit [https://docs.bullet-train.io](https://docs.bullet-train.io)**
```ruby
require "bullet-train-ruby-client"

bt = BulletTrain.new(<<Your API KEY>>")

if bt.getValue("font_size")
  #    Do something awesome with the font size
end

if bt.hasFeature("does_not_exist")
  #do something
else
  #do nothing, or something else
end

```
**Available Options**

| Property        | Description           | Required  | Default Value  |
| ------------- |:-------------:| -----:| -----:|
| ```environmentID```     | Defines which project environment you wish to get flags for. *example ACME Project - Staging.* | **YES** | null
| ```onError```     | Callback function on failure to retrieve flags. ``` (error)=>{...} ``` |  **NO** | null
| ```defaultFlags```     | Defines the default flags if there are any | **NO** | null
| ```api```     | Use this property to define where you're getting feature flags from, e.g. if you're self hosting. |  **NO** | https://bullet-train-api.dokku1.solidstategroup.com/api/v1/

**Available Functions**

| Property        | Description |         
| ------------- |:-------------:|
| ```init```     | Initialise the sdk against a particular environment
| ```hasFeature(key)```     | Get the value of a particular feature e.g. ```bulletTrain.hasFeature("powerUserFeature") // true```
| ```hasFeature(key, userId)```     | Get the value of a particular feature for a user e.g. ```bulletTrain.hasFeature("powerUserFeature", 1234) // true```
| ```getValue(key)```     | Get the value of a particular feature e.g. ```bulletTrain.getValue("font_size") // 10```
| ```getValue(keym userId)```     | Get the value of a particular feature for a specificed user e.g. ```bulletTrain.getValue("font_size", 1234) // 15```
| ```getFlags()```     | Trigger a manual fetch of the environment features, if a user is identified it will fetch their features
| ```getFlagsForUser(1234)```     | Trigger a manual fetch of the environment features with a given user id


**Identifying users**

Identifying users allows you to target specific users from the [Bullet Train dashboard](https://www.bullet-train.io/).
You can include an optional user identifier as part of the `hasFeature` and `getValue` methods to retrieve unique user flags and variables.


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates. 

## Get in touch

If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.