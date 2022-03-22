import React, { useContext } from 'react'
import './stepper.css'
import UIContext from './contexts/interface'

export default ({ maxStep = 3, currentStep = 1, size, ...props }) => {
  const ui = useContext(UIContext)
  return (
    <div className={`stepper-container ${ui.modeCssClass} ${size ?? 'normal'}`} {...props}>
      {[...Array(maxStep).keys()].map((v) => (
        <>
          <span className={`stepper-item ${v < currentStep ? 'active' : 'inactive'}`}>{v + 1}</span>
          {v + 1 < maxStep && (
            <div className="stepper-line">
              <span className="stepper-line-inner"></span>
            </div>
          )}
        </>
      ))}
    </div>
  )
}
