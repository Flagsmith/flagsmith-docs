description: Running with Docker

## Getting Started

You can use docker to set up an entire [Flagsmith Feature Flag](https://www.flagsmith.com) environment locally. Just clone the [docker repository](https://github.com/Flagsmith/flagsmith-docker) and run docker-compose:

```bash
git clone https://github.com/Flagsmith/flagsmith-docker.git
cd flagsmith-docker
docker-compose up
```

Wait for the images to download and run, then visit `http://localhost:8080/`. As a first step, you will need to create a new account at [http://localhost:8080/signup](http://localhost:8080/signup)


## Architecture

The docker-compose file runs the following containers:

### Front End Dashboard - Port 8080

The Web user interface. From here you can create accounts and manage your flags. The front end is written in node.js and React.

### REST API - Port 8000

The web user interface communicates via REST to the API that powers the application. The SDK clients also connect to this API. The API is written in Django and the Django REST Framework.

Once you have created an account and some flags, you can then start using the API with one of the [Flagsmith Client SDKs](https://github.com/Flagsmith?q=client&type=&language=). You will need to override the API endpoint for each SDK to point to [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/).

You can access the Django Admin console to get CRUD access to some of the core tables within the API. You will need to create a super user account first with the following command:

```bash
# Make sure you are in the root directory of this repository
docker-compose run --rm --entrypoint "python src/manage.py createsuperuser" api
```

You can then access the admin dashboard at [http://localhost:8000/admin/](http://localhost:8000/admin/)

## Access Flagsmith Remotely

You will need to either open ports into your docker host or set up a reverse proxy to access the two Flagsmith services (dashboard and API). You will also need to configure the dashboard environment variable `API_URL`, which tells the dashboard where the REST API is located.

## Postgres Database

The REST API stores all its data within a Postgres database. Schema changes will be carried out automatically when upgrading using Django Migrations.

## InfluxDB

Flagsmith has a soft dependency on InfluxDB to store time-series data. You dont need to configure Influx to run the platform, but SDK traffic and flag analytics will not work without it being set up and configured correctly. Once your docker-compose is running:

1. Create a user account in influxdb. You can visit http://localhost:8086/ and do this. Create an Initial Bucket with the name `flagsmith_api`
2. Go into Data > Buckets and create a second bucket, `flagsmith_api_downsampled_15m`.
3. Go into Data > Tokens and grab your access token.
4. Edit the `docker-compose.yml` file and add the following `environment` variables in the api service to connect the api to InfluxDB:
    * `INFLUXDB_TOKEN`: The token from the step above
    * `INFLUXDB_URL`: `http://influxdb`
    * `INFLUXDB_ORG`: The organisation ID - you can find it [here](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/)
    * `INFLUXDB_BUCKET`: `flagsmith_api`
5. Restart `docker-compose`
6. Log into InfluxDB, create a new bucket called `flagsmith_api_downsampled_15m`
7. Create a new task with the following query. This will downsample your per millisecond data down to 15 minute blocks for faster queries. Set it to run every 15 minutes.

```
option task = {name: "Downsample", every: 15m}

data = from(bucket: "flagsmith_api")
	|> range(start: -duration(v: int(v: task.every) * 2))
	|> filter(fn: (r) =>
		(r._measurement == "api_call"))

data
	|> aggregateWindow(fn: sum, every: 15m)
	|> filter(fn: (r) =>
		(exists r._value))
	|> to(bucket: "flagsmith_api_downsampled_15m")
```

Once this task has run you will see data coming into the Organisation API Usage area.
