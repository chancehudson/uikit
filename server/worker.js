import { getAssetFromKV, NotFoundError, MethodNotAllowedError } from '@cloudflare/kv-asset-handler'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Home from '../src/Home'
import html from './html'

addEventListener('fetch', event => event.respondWith(handleEvent(event)))

const DEBUG = true

async function handleEvent(event) {
  const options = {}
  if (DEBUG) {
    Object.assign(options, {
      bypassCache: true,
    })
  }
  const cache = caches.default
  const cacheKey = new Request(new URL(event.request.url).toString(), event.request)
  if (!DEBUG) {
    const response = await cache.match(cacheKey)
    console.log(`Cache hit: ${event.request.url}`)
    if (response) return response
  }
  if (/.+\.[a-zA-Z]+$/.test(event.request.url)) {
    // the file has an extension, treat it as a static asset
    const asset = await getAssetFromKV(event, options)
    // const [b1, b2] = asset.body.tee()
    const response = new Response(b1, asset)
    response.headers.set('Referrer-Policy', 'unsafe-url')
    if (/.+\.svg$/.test(event.request.url)) {
      response.headers.set('Cache-Control', 'max-age=604800,s-maxage=604800,public')
    }
    if (!DEBUG) {
      event.waitUntil(cache.put(cacheKey, new Response(asset.body, asset)))
    }
    return response
  }
  // otherwise SSR
  try {
    const app = ReactDOMServer.renderToString(<Home />)
    const finalIndex = html
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    const response = new Response(finalIndex, options)
    response.headers.set('content-type', 'text/html')
    response.headers.set('Cache-Control', 'max-age=604800,s-maxage=604800,public')
    if (!DEBUG) {
      event.waitUntil(cache.put(cacheKey, new Response(finalIndex)))
    }
    return response
  } catch (err) {
    return new Response(err.toString(), {
      ...options,
      status: 500,
    })
  }
}
