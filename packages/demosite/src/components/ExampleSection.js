import React from 'react'
import './example-section.css'
import UIContext from '../contexts/interface'
import { observer } from 'mobx-react-lite'

export default observer(({ children, name, description }) => {
  const ui = React.useContext(UIContext)
  return (
    <div className={`example-section ${ui.modeCssClass}`}>
      <div className="title-section">
        <div className="header6">
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
})
