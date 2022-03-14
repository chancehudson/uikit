import React from 'react'
import UIContext from './contexts/interface'
import { observer } from 'mobx-react-lite'
import './textfield.css'

export default observer(({
  onChange,
  onEnter,
  value,
  ...props
}) => {
  const ui = React.useContext(UIContext)
  const textChanged = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value)
    }
  }
  const keyUp = (e) => {
    if (e.keyCode === 13 && typeof onEnter === 'function') {
      onEnter(e.target.value)
    }
  }
  return (
    <input
      className={ui.modeCssClass}
      onChange={textChanged}
      onKeyUp={keyUp}
      type="text"
      value={value}
      {...props}
    />
  )
})
