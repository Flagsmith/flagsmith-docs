description: Manage your Feature Flags and Remote Config in your REST APIs.

# Direct API Access

You can access the API directly with tools like [curl](https://curl.haxx.se/) or [httpie](https://httpie.org/), or with
clients for languages that we do not currently have SDKs for.

## API Explorer

You can view the API via Swagger at [https://api.flagsmith.com/api/v1/docs/](https://api.flagsmith.com/api/v1/docs/).

## Environment Key

Publicly accessible API calls need to have an environment key supplied with each request. This is provided as an HTTP
header, with the name `X-Environment-Key` and the value of the environment API key that you can find within the
Flagsmith administrative area.

### Curl Example

```bash
curl 'https://api.flagsmith.com/api/v1/flags/' -H 'X-Environment-Key: TijpMX6ajA7REC4bf5suYg'
```

### httpie Example

```bash
http GET 'https://api.flagsmith.com/api/v1/flags/' 'X-Environment-Key':'TijpMX6ajA7REC4bf5suYg'
```

## Private Endpoints

You can also do things like create new flags, environments, toggle flags or indeed anything that is possible from the
administrative front end via the API.

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

You can find a complete list of endpoints via the Swagger REST API at
[https://api.flagsmith.com/api/v1/docs/](https://api.flagsmith.com/api/v1/docs/).
