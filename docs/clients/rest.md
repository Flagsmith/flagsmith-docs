# Direct API Access

You can access the API directly with tools like [curl](https://curl.haxx.se/) or [httpie](https://httpie.org/), or with clients for languages that we do not currently have SDKs for.

## API Explorer

You can view the API via Swagger at [https://api.bullet-train.io/api/v1/docs/](https://api.bullet-train.io/api/v1/docs/).

## Environment Key

Publicly accessible API calls need to have an environment key supplied with each request. This is provided as an HTTP header, with the name ```X-Environment-Key``` and the value of the environment API key that you can find within the Bullet Train administrative area. 

### Curl Example

```
curl 'https://api.bullet-train.io/api/v1/flags/' -H 'X-Environment-Key: TijpMX6ajA7REC4bf5suYg'
```

### httpie Example

```
http GET 'https://api.bullet-train.io/api/v1/flags/' 'X-Environment-Key':'TijpMX6ajA7REC4bf5suYg'
```
