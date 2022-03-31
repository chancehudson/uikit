import React from 'react'
import './toggle.css'
import UIContext from './contexts/interface'

const ToggleSwitch = ({ onChange, checked, ...props }) => {
  const ui = React.useContext(UIContext)

  return (
    <input
      className={`nanoether--toggle ${ui.modeCssClass}`}
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.checked)
        }
      }}
      {...props}
    />
  )
}

export default ToggleSwitch
