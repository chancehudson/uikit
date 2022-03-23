import React from 'react'
import './example-section.css'
import UIContext from 'nanoether/interface'
import { observer } from 'mobx-react-lite'

export default observer(({ children, name, description }) => {
  const ui = React.useContext(UIContext)
  return (
    <div className={`example-section ${ui.modeCssClass}`}>
      <div className="title-section">
        <div className="header6">
          {name}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '4px'
      }}>
        {children}
      </div>
    </div>
  )
})
