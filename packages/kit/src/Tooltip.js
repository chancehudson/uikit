import React, { useState, useEffect } from 'react'
import measureText from './utils/measure-text'
import './tooltip.css'
import UIContext from './contexts/interface'
import { observer } from 'mobx-react-lite'

export default observer(({ text, maxWidth }) => {
  const ui = React.useContext(UIContext)
  const containerEl = React.createRef()
  const [showingPopup, setShowingPopup] = useState(false)
  const [leftOffset, setLeftOffset] = useState(0)
  const [textWidth, setTextWidth] = useState(0)
  useEffect(() => {
    const _textWidth = measureText(text, {
      fontSize: '12px',
      fontWeight: 'normal',
    })
    const _maxWidth = maxWidth ?? 200
    const calcWidth = Math.min(_maxWidth, _textWidth)
    setTextWidth(calcWidth)
    const { x } = containerEl.current.getBoundingClientRect()
    const screenMaxWidth = window.innerWidth - x
    const minWidth = _maxWidth + 20
    setLeftOffset(screenMaxWidth > minWidth ? 0 : (minWidth - screenMaxWidth))
  })
  return (
    <div className="tooltip-outer" ref={containerEl}>
      <div
        onMouseEnter={() => setShowingPopup(true)}
        onMouseLeave={() => setShowingPopup(false)}
      >
        <img
          width="18px"
          height="18px"
          src={require('../assets/info_question.svg')}
          alt="Mouseover tooltip icon"
        />
      </div>
      {showingPopup &&
        <div className={`tooltip-popup ${ui.modeCssClass}`}
            style={{
              width: `${textWidth}px`,
              left: `-${leftOffset}px`,
            }}
        >
          <div
            className={`tooltip-inner ${ui.modeCssClass}`}
          >
            {text}
          </div>
        </div>
      }
    </div>
  )
})
