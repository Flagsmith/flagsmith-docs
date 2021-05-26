# Flagsmith Documentation

This is the documentation repository for the [Docs](https://docs.flagsmith.com/) of [Flagsmith](https://flagsmith.com/).
The site is currently hosted on [https://zeit.co/](https://zeit.co/).

Built with [MKDocs](https://www.mkdocs.org/).

## Pre requesites

[pip](https://pip.pypa.io/)

## Local Development

This sets up pip-tools, mkdocs and pre-commit.

```bash
pip install virtualenv
virtualenv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
```

You can set up prettier on a pre-commit hook with:

```bash
pre-commit install
```

## Deploy

Deployments to Vercel happen automatically if configured on the Vercel side. You can build a local static version of the
site with

```bash
mkdocs build
```

## Useful links

[Website](https://flagsmith.com)

[Documentation](https://docs.flagsmith.com/)

[Code Examples](https://github.com/flagsmith/flagsmith-docs)

[Youtube Tutorials](https://www.youtube.com/channel/UCki7GZrOdZZcsV9rAIRchCw)
