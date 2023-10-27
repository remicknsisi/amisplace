# Amisplace

## Introduction

Welcome to Amisplace - an invite-only community that offers affordable short-term stays amongst friends. We're so glad you're here to help out!

## Overview

Amisplace is built using [React](https://react.dev/)/[Typescript](https://www.typescriptlang.org/docs/) on the frontend, using the [NextJS](https://nextjs.org/learn-pages-router/foundations/about-nextjs/what-is-nextjs) framework.

## Local Development

To build Amisplace locally on your machine, run the following command:

```
https://github.com/amisplace/amisplace-public.git
```

and make sure to `yarn install` to install all dependencies. Then, you should be able to run `yarn dev` and see the local instance on `localhost:3000`! 🚀

## Creating a pull request

When developing, please open a pull request so that others on the team can review your PR and leave feedback as needed.

You can create a fork of the amisplace-public repository and run the following commands to create a local instance of your fork:

```
git remote rename origin upstream
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/amisplace-public.git && git fetch --all
```

when you run `git remote -v` in your terminal, you should see something like this:

```
origin	https://github.com/<YOUR-GITHUB-USERNAME>/amisplace-public.git (fetch)
origin	https://github.com/<YOUR-GITHUB-USERNAME>/amisplace-public.git (push)
upstream	https://github.com/amisplace/amisplace-public.git (fetch)
upstream	https://github.com/amisplace/amisplace-public.git (push)
```

now, when you create a new branch and make changes, you can run the following commands to create a pull request accordingly:

```
git add .
git commit -m "Whatever you want to put here"
git push origin HEAD
```

## Linting

Prior to submitting/merging a pull request, please run the following commands to clean up your changes:

```
yarn prettier
yarn lint
```
