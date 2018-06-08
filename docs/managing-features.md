## Features

Rather than just a flag that can be turned on / off, features within Bullet Train are pieces of functionality that have an enabled state as well as a configurable value. This allows you to use Bullet Train in the following ways.

- Showing and hiding features in your application. E.g. Instant messaging within an application.
- Configuring values used within your application remotely. E.g. The number of power-ups a user might have in a game.
- Configuring environment variables. E.g. Setting the database URL for your API.

Features are created on a per project basis but edited per environment and can then be overridden on a per user basis. 

## Organisations

Organisations are a way for you and other team members to manage projects and their features. Users can be members of multiple organisations.

## Projects

Projects contain one or more environments that share a single set of features and one or more environments. Organisations can have any number of projects.

## Environments

Environments are a way to separate the configuration of your features. For example, your project's Development and Staging environments might have a feature configured as on while it is turned off in your Production environment. A project can have any number of environments. 

## Users

Users are a particular registration for one of your Project's environments. Registering users within the client application allows you to manage features for individual users. User features can be overridden from your environment defaults. For example, joe@yourwebsite.com would be a different user in your development environment to the one in production, and they can have different features enabled for each environment.
 
Users are created within Bullet Train automatically when they are identified from your client SDKs. Generally you'd make a call to identify a user with a unique string/id whenever they log into your website or whenever your API receives a request that requires checking for features.   

## Segments (**Coming soon**)

Segments are a way to define a group of users by traits such as number of times logged in, device, location or any number of custom defined traits.
 
Similarly to individual users, you will be able to override environment defaults for features. For example showing certain features for a "power user" segment.