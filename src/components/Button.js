import React from 'react'
const { useState } = React
import './button.css'
import UIContext from '../stores/interface'
import { observer } from 'mobx-react-lite'

export default observer(({
  type,
  children,
  loadingText,
  onClick,
}) => {
  const ui = React.useContext(UIContext)
  const [mouseActive, setMouseActive] = useState(false)
  const [mouseClicked, setMouseClicked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState()
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState()
  const [errored, setErrored] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Error!')
  const onMouseEnter = () => setMouseActive(true)
  const onMouseLeave = () => setMouseActive(false)
  const onMouseDown = () => setMouseClicked(true)
  const onMouseUp = () => setMouseClicked(false)
  const handleClick = async () => {
    if (typeof onClick !== 'function') return
    if (errored || success || loading) return
    const updateFunc = (newText) => setLoadingMessage(newText)
    try {
      setLoading(true)
      const res = onClick(updateFunc)
      if (typeof res === 'object' && typeof res.then === 'function') {
        const message = await onClick(updateFunc)
        setLoading(false)
        setSuccessMessage(message ?? 'Success!')
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      } else {
        setLoading(false)
      }
    } catch (err) {
      setErrored(true)
      setLoading(false)
      if (err.toString().startsWith('Error: Button: ')) {
        setErrorMessage(err.toString().replace('Error: Button: ', ''))
      } else {
        setErrorMessage('Error!')
      }
      setTimeout(() => setErrored(false), 3000)
    } finally {
      setLoadingMessage()
    }
  }
  return (
    <div className="button-outer">
      <div
        className={
          `
            button-inner
            ${type ?? 'outline'}
            ${mouseActive && !mouseClicked ? 'hover' : ''}
            ${mouseClicked ? 'clicked' : ''}
            ${errored ? 'error' : ''}
            ${success ? 'success' : ''}
            ${ui.modeCssClass}
          `
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onClick={handleClick}
      >
        {errored ? errorMessage : undefined}
        {loading ? (loadingMessage ?? loadingText ?? 'Loading...') : undefined}
        {success ? successMessage ?? 'Success!' : undefined}
        {!errored && !loading && !success ? children : undefined}
      </div>
    </div>
  )
})
