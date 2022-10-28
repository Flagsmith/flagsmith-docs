---
title: Authentication
sidebar_label: Authentication
sidebar_position: 78
---

:::tip

Organisations within Flagsmith can be locked to a single authentication method if required, meaning that accounts can
neither be created or logged into with anything other than the method specified.

This can be configured at an Organisation level by a Super-Administrator. Please get in touch if you need help with
this.

:::

As well as Email/Password and OAuth2 via Google or Github, we also provide the following methods of authentication.

## SAML - SaaS

The Flagsmith platform can be configured for a given organisation to use SAML authentication. To configure SAML login
for your organisation please get in touch with us directly to help set it up.

The steps we need to go through are something like:

1. You contact us to enable SAML for your organisation.
2. We create an XML file and provide it to you along with your SAML organisation name.
3. You supply the XML to your SAML IDP and receive some XML in return. You might need to apply some
   [attribute mappings](#attribute-mapping-information).
4. You send us this XML and we add it to Flagsmith.
5. You log in by visiting https://app.flagsmith.com/login clicking on "Single Sign On" and entering your SAML
   organisation name from step 2.

Note that users authenticated via SAML can only belong to one organisation, the one that the SAML configuration is tied
to.

To set up SAML authentication, we will provide you with a unique name for your SAML organisation that you must then
enter when prompted by the 'Single Sign on' dialog. We will also provide you with our Service Provider metadata and
expect your IdP metadata in return.

## SAML - On-premise

To allow an Organisation on the Flagsmith platform to login using SAML authentication, you'll need to access the admin
interface. Instructions on how to access the admin interface can be found
[here](https://docs.flagsmith.com/deployment/django-admin).

Once you've logged into the django admin interface, you'll need to click on the 'Saml Configurations' option in the menu
on the left. From here, you should see a list of existing SAML configuration entities. To create a new one, click on the
'ADD SAML CONFIGURATION' button in the top right corner of the screen.

You should see a screen similar to the following.

![SAML Auth Setup](/img/saml-auth-setup.png)

From the drop down next to **Organisation**, select the organisation in the Flagsmith platform that you want to
configure for SAML authentication.

Next to **Organisation name**, add a name without any spaces that identifies the organisation uniquely for the
installation of Flagsmith you're working on. This is what users will provide when authenticating with SAML so that the
platform knows where to redirect them.

Next to **Frontend url**, add in the URL at which your Frontend application is running. This is where users will be
redirected to on a successful SAML authentication.

For now, we'll leave **Idp metadata xml** empty.

Once you've completed these fields, hit the **Save** button to create the SAML configuration.

Now, we need to grab the Flagsmith service provider metadata to configure the integration on your IDP. To do this, open
a new browser tab and head to `https://<your Flagsmith API>/api/v1/auth/saml/<organisation_name>/metadata/` where
`<organisation_name>` is the name you provided above. From here, copy and paste what you see in the web page into a new
text file and save that file as `flagsmith-sp-metadata.xml` or similar.

Note: do not use 'save page as' from your browser as this will likely result in the metadata being incorrect and the
integration will not work.

Now you can use this XML metadata to create the integration on your IDP. Once created on the IDP, you can add the IDP
metadata into the **Idp metadata xml** field that we left blank earlier.

## Attribute Mapping information

To uniquely identify users, we attempt to retrieve a unique identifier from either the `subject-id` or `uid` claim, or
we use the content of the `NameID` attribute.

We also map the following Flagsmith user attributes to the following claims in the SAML response.

| Flagsmith Attribute | IdP claims                                             |
| ------------------- | ------------------------------------------------------ |
| `email`             | `mail`, `email` or `emailAddress`                      |
| `first_name`        | `gn`, `givenName` or (the first part of) `displayName` |
| `last_name`         | `sn`, `surname` or (the second part of) `displayName`  |

Here's an example configuration from Google's SAML app creation flow.

<div style={{textAlign: 'center'}}><img width="75%" src="/img/saml-mapping-configuration.png"/></div>

## OAuth

### Google

To configure OAuth for Google:

- [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en)
- Create the Flagsmith on Flagsmith flag as it shows [here](../deployment/overview#oauth_google).

## OAuth

### Github

As a pre-requisite for this configuration make sure to have
[Flagsmith on Flagsmith](../deployment/overview#running-flagsmith-on-flagsmith) set up.

Configure the following environment variables:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

To configure OAuth for Github:

- [Create an OAuth Github application](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
- For the Authorization callback URL use: `https://<your flagsmith domain name>/oauth/github`
- Create the Flagsmith on Flagsmith flag as it shows [here](../deployment/overview#oauth_github).

Now you would be able to see the GitHub SSO option.

<div style={{textAlign: 'center'}}><img width="75%" src="/img/Flagsmith_GitHub_SignUp.png"/></div>

## LDAP

LDAP Authentication is available in our [Enterprise Edition](../enterprise-edition.md). Please contact us if this is of
interest. We also support sync-ing of LDAP groups into [Flagsmith RBAC groups](../advanced-use/permissions.md#groups)).

## AD FS

Active Directory Federation Services Authentication is available in our [Enterprise Edition](../enterprise-edition.md).

## Okta

Okta Integration is available in our [Enterprise Edition](../enterprise-edition.md).
