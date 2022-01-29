import React from 'react'
import s from './shared.css'
import withStyles from 'isomorphic-style-loader/withStyles'

export default withStyles(s)(() => {
  return (
    <div className="container">
      <div className="header">
        <div>
          Privacy and Scalability Explorations UIKit
        </div>
      </div>
      <div style={{ height: '8px'}} />
      <div className="section-box">
        A shared interface kit for developing Ethereum based applications.
      </div>
    </div>
  )
})
