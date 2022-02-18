import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './index.css'
import './colors.css'

const Page1 = () => (<div>Page 1</div>)

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  </BrowserRouter>
)
