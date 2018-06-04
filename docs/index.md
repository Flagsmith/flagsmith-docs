# Welcome to Bullet Train

Bullet Train lets you manage features across web, mobile and server side applications.

The application consist of 3 components:

1. The Server-Side REST API.
2. The Front End Administration Web Interface.
3. Client Libraries.

To get up and running, you can either use [https://bullet-train.io/](https://bullet-train.io/) for 1 and 2 above, or you can self host the API and Front End. This guide will get you set up self-hosting 1 and 2. Once you have these components up and running, you can add the client libraries to your apps and start managing your features remotely. 

## Server Side API

The source code can be found at [this GitHub project](https://github.com/SolidStateGroup/Bullet-Train-API). 

## Front End Website

The source code can be found at [this GitHub project](https://github.com/SolidStateGroup/Bullet-Train-Frontend). 

## Client Libraries

Once you are setup with the front and back end, you can integrate our client libraries with your apps. 

* [Javascript and React/React Native](clients/javascript.md) 
* [NodeJS](clients/node.md) 
* [Java](clients/java.md) 

## Features

Rather than just a flag that can be turned on / off, features within Bullet Train are pieces of functionality that have an enabled state as well as a configurable value. This allows you to use Bullet Train in the following ways.

- Showing and hiding features in your application. E.g. Instant messaging within an application
- Configuring values used within your application remotely. E.g. The number of power-ups a user might have in a game/
- Configuring environment variables. E.g. Setting the database URL for your API.

Features are created on a per project basis but edited per environment and can then be overridden on a per user basis. 

## Organisations

Organisations are a way for you and other team members to manage projects and their features. Users can be members of multiple organisations.

## Projects

Projects contain one or more environments that share a single set of features and one or more environments. Organisations can have any number of projects.

## Environments

Environments are a way to separate the configuration of your features. For example, your project's Development and Staging environments might have a feature configured as on while it is turned off in your Production environment. A project can have any number of environments. 

## Users

Users are a particular registration for one of your Project's environments, features can be overridden from your environment defaults. For example, joe@yourwebsite.com would be a different user in your development environment to the one in production.
 
Users are created from your client SDKs, generally you'd make a call to identify as user whenever they are logged into your website or whenever your API receives a request that requires checking for features.    

## Segments (**Coming soon**)

Segments are a way to define a group of users by traits such as number of times logged in, device, location or any number of custom defined traits.
 
 Similarly to individual users, you will be able to override environment defaults for features. For example showing certain features for a "power user" segment.