import { getAssetFromKV, NotFoundError, MethodNotAllowedError } from '@cloudflare/kv-asset-handler'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Home from '../src/Home'

addEventListener('fetch', event => event.respondWith(handleEvent(event)))

const DEBUG = true

async function handleEvent(event) {
  const options = {}
  if (DEBUG) {
    Object.assign(options, {
      bypassCache: true,
    })
  }
  if (/.+\.[a-zA-Z]+$/.test(event.request.url)) {
    // the file has an extension, treat it as a static asset
    const asset = await getAssetFromKV(event, options)
    const response = new Response(asset.body, asset)
    response.headers.set('Referrer-Policy', 'unsafe-url')
    return response
  }
  // otherwise SSR
  const index = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>uikit</title>
      <link rel="stylesheet" type="text/css" href="./styles.css" />
    <script defer src="/main.js"></script><link href="/styles.css" rel="stylesheet"></head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  `
  try {
    const app = ReactDOMServer.renderToString(<Home />)
    const finalIndex = index
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    const response = new Response(finalIndex, options)
    response.headers.set('content-type', 'text/html')
    return response
  } catch (err) {
    return new Response(err.toString(), {
      ...options,
      status: 500,
    })
  }
}
