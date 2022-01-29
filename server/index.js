import path from 'path'
import fs from 'fs/promises'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import express from 'express'

import Home from '../src/Home'


const app = express()

app.get('/', async (req, res) => {
  const css = new Set() // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  console.log(css)

  const app = ReactDOMServer.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Home />
    </StyleContext.Provider>
  )
  const indexFile = path.resolve('./build/index.html')
  try {
    const data = await fs.readFile(indexFile, 'utf8')
    res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace('<!-- ssr style outlet -->', `<style>${[...css].join('')}</style>`)
    )
  } catch (err) {
    console.error('Something went wrong:', err)
    return res.status(500).send('Oops, better luck next time!')
  }
})

app.use(express.static('./build'))

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
