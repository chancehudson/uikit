# uikit [![CircleCI](https://img.shields.io/circleci/build/github/vimwitch/uikit?label=deploy)](https://app.circleci.com/pipelines/github/vimwitch/uikit?branch=main&filter=all)

A working repo for building Ethereum uikit components.

View the site [here](https://uikit.jchancehud.workers.dev).

## Structure

### `packages/demosite`

A react website showcasing each component.

### `packages/kit`

A package exporting various ui components and styles.

## Use

`npx lerna bootstrap`

### React Development

Inside the `packages/demosite` use `npm run dev` to start a local webpack server. This will not SSR.

### Worker Development

Use `npx wrangler dev` to test the worker script. Must have a Cloudflare `account_id` in `wrangler.toml`.
