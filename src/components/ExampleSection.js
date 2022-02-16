import React from 'react'
import './example-section.css'

export default ({ children, name, description }) => {
  return (
    <div className="example-section">
      <div className="title-section">
        <div className="title">
          {name}
        </div>
        <div style={{ height: '4px' }} />
        <div className="description">
          {description}
        </div>
        <div style={{ height: '4px' }} />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        {children.map((c, i) => <div key={i} style={{ margin: '4px' }}>{c}</div>)}
      </div>
    </div>
  )
}
