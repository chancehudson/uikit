import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'

const Home = () => (
  <div>
    <div>Home</div>
    <Link to="/page1">page 1</Link>
  </div>
)

const Page1 = () => (<div>Page 1</div>)

const RootApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(<RootApp />, document.getElementById('root'))
