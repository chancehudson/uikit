import React from 'react'
import './checkbox.css'
import UIContext from './contexts/interface'
import { observer } from 'mobx-react-lite'

export default observer(({
  onChange,
  checked: _checked, // optional
  ...props
}) => {
  const ui = React.useContext(UIContext)

  const checkedChanged = (e) => {
    const enabled = e.target.checked
    if (typeof onChange === 'function') {
      onChange(enabled)
    }
  }
  return (
    <input
      className={`nanoether--checkbox ${ui.modeCssClass}`}
      type="checkbox"
      onChange={checkedChanged}
      checked={_checked}
      {...props}
    />
  )
})
