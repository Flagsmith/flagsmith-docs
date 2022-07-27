---
title: Migrating from Self Hosted to Cloud
---

Flagsmith offers some helpful utilities if you want to migrate your application from your self hosted instance to our cloud offering. 

The process looks something like: 

 Step 1. Contact Flagsmith support to confirm you would like to migrate from self hosted to cloud
 Step 2. Generate a JSON file from your self hosted instance (more information below) 
 Step 3. Send the JSON file to Flagsmith support
 Step 4. Flagsmith support import the JSON file into our cloud offering
 Step 5. Register and re-add your users and passwords (Flagsmith support will need to assign at least one organisation administrator to the newly imported organisation)

## The export process

The export process involves running a command from a terminal window. This must either be run from a running container in your self hosted deployment or, alternatively, you can run a separate container that can connect to the same database as your deployed fleet of flagsmith instances. To run the command, you'll also need to find the id of your organisation. You can do this through the django admin interface. Information about accessing the admin interface can be found [here](/deployment/django-admin.md). Once you've obtained access to the admin interface, if you browse to the 'Organisations' menu item on the left, you should see something along the lines of the following: 

![](/img/organisations-admin.png)

The id you need is the one in brackets after the organisation name, so here it would be 1. 

Once you've obtained the id of your organisation, you're ready to export the organisation as a JSON file. The command you need to run so is: 

```bash
python manage.py dump-organisation-to-local-fs <organisation-id> <local-file-system-path>
```

e.g. 

```bash
python manage.py dump-organisation-to-local-fs 1 /tmp/organisation-1.json
```

Since this will write to your local file system, you may need to attach a volume to your docker container to be able to obtain the file afterwards. There is an example docker-compose file provided below to help guide you to do this. Alternatively, you can also dump the JSON file to an s3 bucket by using a similar command: 

```bash
python manage.py dump-organisation-to-s3 <organisation-id> <bucket-name> <key>
```

e.g. 

```bash
python manage.py dump-organisation-to-s3 1 my-export-bucket exports/organisation-1.json
```

This requires the application to be running with access to an AWS account. If you're running the application in AWS, make sure whichever role you are using to run you container has access to read and write to the given S3 bucket. Alternatively, you can provide the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables to refer to an IAM user that has access to the S3 bucket. 
