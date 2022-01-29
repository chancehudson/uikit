import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import Home from './Home'
import './index.css'

const Page1 = () => (<div>Page 1</div>)

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

export default () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={(
          <StyleContext.Provider value={{ insertCss }}>
          <Home />
      </StyleContext.Provider>
        )} />
        <Route path="/page1" element={<Page1 />} />
    </Routes>
  </BrowserRouter>
)
