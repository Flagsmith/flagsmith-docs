---
title: Datadog Integration
sidebar_label: Datadog
hide_title: true
---

![Datadog](/img/integrations/datadog/datadog-logo.svg)

You can integrate Flagsmith with Datadog in two ways:

1. Integrate Flagsmith into your Datadog Dashboard
2. Send flag change events from Flagsmith into your Datadog event stream.

## 1. Integrate Flagsmith into your Datadog Dashboard

This integration lets you add a Flagsmith widget into your Datadog Dashboard so you can view and manage your flags
without having to leave the Datadog application.

IMG

The video below will walk you through the steps of adding the integration:

<div class="wistia_responsive_padding"><div class="wistia_responsive_wrapper"><iframe src="https://fast.wistia.net/embed/iframe/76558s9yj7?videoFoam=true" title="datadog Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="450"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## 2. Send Flag Change events to Datadog

The second type of integration allows you to send Flag change events in Flagsmith into your Datadog event stream.

![Datadog](/img/integrations/datadog/datadog-3.png)

1. Log into Datadog and go to Integrations > API
2. Generate an API key
3. Add the Datadog API key into Flagsmith (Integrations > Add Datadog Integration)
4. Add the Datadog URL into Flagsmith - (This is either `https://api.datadoghq.com/` or `https://api.datadoghq.eu/`)

![Datadog](/img/integrations/datadog/datadog-1.png)

![Datadog](/img/integrations/datadog/datadog-2.png)

Flag change events will now be sent to Datadog.
