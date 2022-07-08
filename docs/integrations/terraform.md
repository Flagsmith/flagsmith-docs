---
title: Terraform Provider
sidebar_label: Terraform
hide_title: true
---

![Terraform](/img/integrations/terraform/terraform-logo.svg)

You can integrate Flagsmith with Terraform. Use our
[Terraform provider](https://registry.terraform.io/providers/Flagsmith/flagsmith) to drive flag management as part of
your Infrastructure as Code tooling.

> NOTE: You can find the latest docs for using the Flagsmith provider
> [here](https://registry.terraform.io/providers/Flagsmith/flagsmith/latest/docs)

The process is as follows:

## Prerequisite

### [Terraform API Key](../advanced-use/system-administration.md#terraform-api-keys-for-organisations):

In order to configure flagsmith terraform provider we are going to need an API key, to generate that head over to the
Organisation settings page, and click on `Create Terraform API Key`

> NOTE: Organisation admin permission is needed to generate Terraform API Key

## Using Flagsmith Terraform Provider

Once you have the terraform provider key you can go ahead and create a terraform config file that will look something
like this:

```terraform
terraform {
  required_providers {
    flagsmith = {
      source = "Flagsmith/flagsmith"
      version = "0.1.0" # or whatever the latest version is
    }
  }
}

provider "flagsmith" {
  # or omit this for master_api_key to be read from environment variable
  master_api_key = "<Your Terraform API Key>"
}

# the feature that you want to manage
resource "flagsmith_flag" "feature_1_prod" {
  enabled         = false
  environment_key = "some_enviroment_key"
  feature_name    = "test_feature"
  feature_state_value = {
    type         = "unicode"
    string_value = "I_am_a_test_feature"

  }
}

```

Now, to bring a flagsmith feature into terraform(and start tracking it's state) you can go ahead and
[import](https://registry.terraform.io/providers/Flagsmith/flagsmith/latest/docs/resources/flag#import) it.

Once that is done, you can just simply update its value(i.e: `feature_state_value` or `enabled`) and do
`terraform apply` to apply those changes.
