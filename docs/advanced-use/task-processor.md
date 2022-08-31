# Asynchronous Task Processor

Flagsmith has the ability to consume asynchronous tasks using a separate task processor service. If flagsmith is run
without the asynchronous processor, the flagsmith API will run any asynchronous tasks in a separate, unmanaged thread.

## Running the Processor

The task processor can be run using the flagsmith/flagsmith-api image with a slightly different entrypoint. It should be
pointed to the same database that the API container is using.

A basic docker-compose setup might look like:

```yaml
    postgres:
        image: postgres:11.12-alpine
        environment:
            POSTGRES_PASSWORD: password
            POSTGRES_DB: flagsmith
        container_name: flagsmith_postgres

    flagsmith:
        image: flagsmith/flagsmith-api
        environment:
            DJANGO_ALLOWED_HOSTS: '*'
            DATABASE_URL: postgresql://postgres:password@postgres:5432/flagsmith
            ENV: prod
            TASK_RUN_METHOD: TASK_PROCESSOR
        ports:
            - '8000:8000'
        depends_on:
            - postgres
        links:
            - postgres

   flagsmith_processor:
       build:
           dockerfile: api/Dockerfile
           context: .
       environment:
           DATABASE_URL: postgresql://postgres:password@postgres:5432/flagsmith
       command:
           - "python"
           - "manage.py"
           - "runprocessor"
       depends_on:
           - flagsmith
           - postgres
```

## Configuring the processor

The processor exposes a number of configuration options to tune the processor to your needs / setup. These configuration
options are via command line arguments when starting the processor.

| Argument            | Description                                                               | Default |
| ------------------- | ------------------------------------------------------------------------- | ------- |
| `--sleepintervalms` | The amount of ms each worker should sleep between checking for a new task | 2000    |
| `--numthreads`      | The number of worker threads to run per task processor instance           | 5       |
| `--graceperiodms`   | The amount of ms before a worker thread is considered 'stuck'.            | 3000    |
