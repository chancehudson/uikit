import React from 'react'
import './toggleswitch.css'
import UIContext from './contexts/interface'

const ToggleSwitch = ({ onChange, checked, id, ...props }) => {
  const ui = React.useContext(UIContext)

  return (
    <div className={ui.modeCssClass}>
      <input
        id={id}
        className="nanoether--toggle"
        type="checkbox"
        checked={typeof checked === 'boolean' ? checked : undefined}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked)
          }
        }}
      />
      <label htmlFor={id} />
    </div>
  )
}

export default ToggleSwitch
