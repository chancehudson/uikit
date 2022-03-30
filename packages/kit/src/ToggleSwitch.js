import React from 'react'
import './toggleswitch.css'
import UIContext from './contexts/interface'

const ToggleSwitch = ({ onChange, checked, ...props }) => {
  const ui = React.useContext(UIContext)

  return (
    <input
      className={`nanoether--toggle ${ui.modeCssClass}`}
      type="checkbox"
      checked={typeof checked === 'boolean' ? checked : undefined}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.checked)
        }
      }}
    />
  )
}

export default ToggleSwitch
