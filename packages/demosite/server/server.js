import path from 'path'
import fs from 'fs/promises'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import Home from '../src/Home'

const app = express()

app.get('/', async (req, res) => {
  const app = ReactDOMServer.renderToString(<Home />)
  const indexFile = path.resolve('./build/index.html')
  try {
    const data = await fs.readFile(indexFile, 'utf8')
    res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    )
  } catch (err) {
    console.error('Something went wrong:', err)
    return res.status(500).send('Internal server error')
  }
})

app.use(express.static('./build'))

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
