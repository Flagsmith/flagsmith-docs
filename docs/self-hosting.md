description: Self hosting Bullet Train.

# Self Hosting

You are free to self host the entire Bullet Train Platform. The easiest way to do this is via Docker.

## Docker

You can get a local instance of the entire platform up and running using [Bullet Train in Docker](https://github.com/BulletTrainHQ/bullet-train-docker).

```bash
git clone https://github.com/BulletTrainHQ/bullet-train-docker.git
cd bullet-train-docker
docker-compose up
```

## Manual Installation

If you want a more configurable environment, you can manually install both the Front End and the API.

### Server Side API

The source code and installation instructions can be found at [the GitHub project](https://github.com/BulletTrainHQ/Bullet-Train-API). The API is written in Python and is based on Django and the Django Rest Framework. The Server side API relies on a Postgres SQL installation to store its data. 

### Front End Website

The source code and installation instructions can be found at [the GitHub project](https://github.com/BulletTrainHQ/Bullet-Train-Frontend). The Front End Website is written in React/Javascript and requires NodeJS.
