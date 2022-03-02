import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import './index.css'
import '@appliedzkp/kit/colors.css'
import UIContext from '@appliedzkp/kit/interface'

const RootApp = () => {
  const ui = React.useContext(UIContext)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      ui.load()
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.hydrate(<RootApp />, document.getElementById('root'))
