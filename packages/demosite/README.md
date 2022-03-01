# uikit [![CircleCI](https://img.shields.io/circleci/build/github/vimwitch/uikit?label=deploy)](https://app.circleci.com/pipelines/github/vimwitch/uikit?branch=main&filter=all)

A working repo for building Ethereum UIKit components.

View the site [here](https://uikit.jchancehud.workers.dev).

## Use

`npm install`

### React Development

Use `npm run dev` to start a local webpack server. This will not SSR.

### SSR Development

Use `npm run dev:ssr` to ssr using express. For SSR tuning.

### Worker Development

Use `npx wrangler dev` to test the worker script. Must have a Cloudflare `account_id` in `wrangler.toml`.
