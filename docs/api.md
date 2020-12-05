description: API Access and Management

# The Flagsmith API

Flagsmith is built around a client/server architecture. The REST API server is accessible from SDK clients as well as the administration front end. This decoupling means that you can programatically access the entire API programatically if you wish.

You can view the current REST API via Swagger at [https://api.flagsmith.com/api/v1/docs/](https://api.flagsmith.com/api/v1/docs/).

## Authentication

There are two main types of API access:

1. Publicly accessible endpoints (such as those consumed by the client SDKs). These simply require an environment key in the HTTP header.
2. Private endpoints that require a secure token to access.

## Public Endpoints

Every time you create a new Project Environment, an environment API key is automatically generated for you. This is all you need to pass in to get access to Flags etc.

```bash
curl 'https://api.flagsmith.com/api/v1/flags/' -H 'x-environment-key: <ENVIRONMENT KEY>'
```

## Private Endpoints

You can also do things like create new flags, environments, toggle flags or indeed anything that is possible from the administrative front end via the API.

To authenticate, get a token by logging in with an account credentials:

```bash
curl 'https://api.flagsmith.com/api/v1/auth/login/' \
    -H 'content-type: application/json' \
    --data-binary '{"email":"<ACCOUNT EMAIL ADDRESS>","password":"<ACCOUNT PASSWORD>"}'

{"key":"<KEY HASH>"}
```

Then use this token for subsequent requests. For example, to create a new evironment:

```bash
curl 'https://api.flagsmith.com/api/v1/environments/' \
    -H 'content-type: application/json' \
    -H 'authorization: Token <TOKEN FROM PREVIOUS STEP>' \
    --data-binary '{"name":"New Environment","project":"<Project ID>"}'
```

You can find a complete list of endpoints via the Swagger REST API at [https://api.flagsmith.com/api/v1/docs/](https://api.flagsmith.com/api/v1/docs/).
