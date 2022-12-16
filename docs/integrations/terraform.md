---
title: Terraform Provider
sidebar_label: Terraform
hide_title: true
---

![Terraform](/img/integrations/terraform/terraform-logo.svg)

You can integrate Flagsmith with Terraform. Use our
[Terraform provider](https://registry.terraform.io/providers/Flagsmith/flagsmith) to drive flag management as part of
your Infrastructure as Code tooling.

:::tip

You can find the latest Hashicorp docs for using the Flagsmith provider
[here](https://registry.terraform.io/providers/Flagsmith/flagsmith/latest/docs).

:::

The process is as follows:

## Prerequisite

### [Terraform API Key](../advanced-use/system-administration.md#terraform-api-keys-for-organisations):

In order to configure the Flagsmith Terraform provider we are going to need an API key. To generate that head over to
the Organisation Settings page, and click on `Create Terraform API Key`.

:::info

Organisation Administrator permission is required to generate Terraform API Key.

:::

## Using the Flagsmith Terraform Provider

Once you have the Terraform Provider key you can go ahead and create a Terraform config file, which will look something
like this:

```hcl
terraform {
  required_providers {
    flagsmith = {
      source = "Flagsmith/flagsmith"
      version = "0.3.0" # or whatever the latest version is
    }
  }
}

provider "flagsmith" {
  # or omit this for master_api_key to be read from environment variable
  master_api_key = "<Your Terraform API Key>"
}

# the feature that you want to manage
resource "flagsmith_feature" "new_standard_feature" {
  feature_name = "new_standard_feature"
  project_uuid = "10421b1f-5f29-4da9-abe2-30f88c07c9e8"
  description  = "This is a new standard feature"
  type         = "STANDARD"
}

```

:::note We are [working](https://github.com/Flagsmith/flagsmith/issues/1740) on adding a json view to our objects but
for now we need to inspect the network calls to get the uuid.

For example: ![Image](/img/feature-uuid.png) :::

Now, to create/update/delete the feature all we have to do is run `terraform apply`.

To bring an existing Flagsmith feature into Terraform (and start tracking it's state) you can go ahead and
[import](https://registry.terraform.io/providers/Flagsmith/flagsmith/latest/docs/resources/feature#import) it.
