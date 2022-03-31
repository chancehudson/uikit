import React from 'react'
import { observer } from 'mobx-react-lite'

import ExampleSection from './components/ExampleSection'
import './home.css'

import Tooltip from 'nanoether/src/Tooltip'
import Button from 'nanoether/src/Button'
import Checkbox from 'nanoether/src/Checkbox'
import UIContext from 'nanoether/src/contexts/interface'
import Textfield from 'nanoether/src/Textfield'
import Stepper from 'nanoether/src/Stepper'
import Toggle from 'nanoether/src/Toggle'

const Spacer = () => <div style={{ width: '8px', height: '8px' }} />

export default observer(() => {
  const ui = React.useContext(UIContext)
  const [pulseDriveEnabled, setPulseDriveEnabled] = React.useState(false)
  const [energyDiffusionEnabled, setEnergyDiffusionEnabled] = React.useState(true)
  const [text, setText] = React.useState('')
  const [enteredText, setEnteredText] = React.useState('')
  const [step, setStep] = React.useState(1)
  const [isOn, setIsOn] = React.useState(false)
  const [isOn2, setIsOn2] = React.useState(false)
  return (
    <div className={`container ${ui.modeCssClass}`}>
      <div className={`header ${ui.modeCssClass}`}>
        <div className="header5">
          Privacy & Scalability Explorations UIKit
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', margin: '8px'}}>
        <div className={`section-box ${ui.modeCssClass}`}>
          <div>A shared interface kit for developing Ethereum based applications.</div>
          <div style={{ width: '8px' }} />
          <Button size="xsmall" onClick={() => ui.setDarkmode(!ui.darkmode)}>
            {ui.darkmode ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
      <div className="section-components">
        <ExampleSection name="Button" description="A multi-purpose button with support for asynchronous operations.">
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Button type="outline">
              Outline
            </Button>
            <Spacer />
            <Button type="borderless">
              Borderless
            </Button>
            <Spacer />
            <Button type="solid">
              Solid
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '200px'}}>
            <Button type="outline" onClick={async (update) => {
              await new Promise(r => setTimeout(r, 2000))
              update('Still loading...')
              await new Promise(r => setTimeout(r, 2000))
              update('Uh...')
              await new Promise(r => setTimeout(r, 2000))
              update('What is taking so long...')
              await new Promise(r => setTimeout(r, 2000))
              update('3...')
              await new Promise(r => setTimeout(r, 1000))
              update('2...')
              await new Promise(r => setTimeout(r, 1000))
              update('1...')
              await new Promise(r => setTimeout(r, 1000))
              return 'Finally!'
            }
            }>
              Updating Example
            </Button>
            <Spacer />
            <Button type="borderless" onClick={() => new Promise(r => setTimeout(r, 2000))}>
              Success Example
            </Button>
            <Spacer />
            <Button
              type="solid"
              loadingText="😅 😅 😅"
              onClick={() => new Promise((_,r) => setTimeout(() => r(new Error('Button: Uh Oh!')), 2000))}
            >
              Error Example
            </Button>
          </div>
          <div className="header6" style={{ alignSelf: 'center' }}>
            Sizes
          </div>
          <div style={{ display: 'flex' }}>
            <Button type="solid" size="xlarge">
              xlarge
            </Button>
            <div style={{ width: '4px' }} />
            <Button type="outline" size="small">
              small
            </Button>
            <div style={{ width: '4px' }} />
            <Button type="outline" size="xsmall">
              xsmall
            </Button>
            <div style={{ width: '4px' }} />
            <Button type="solid" size="large">
              large
            </Button>
          </div>
        </ExampleSection>
        <ExampleSection name="Tooltip" description="A general purpose mousever text component.">
          <Tooltip text="I'm a popup!" />
          <Tooltip text="😃" />
          <Tooltip text="I'm a really long popup, I have a lot to say and don't want to overwhelm the user!" />
          <Tooltip text="I should not go off the side of the screen if the screen is small. Try resizing your window so that I'm close to the edge, and then mouse over me." />
        </ExampleSection>
        <ExampleSection style={{ flexDirection: 'column' }} name="Checkbox" description="An input for binary state">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox onChange={setPulseDriveEnabled} />
            <Spacer />
            <span>Enable pulse drive{pulseDriveEnabled ? ' 🚀' : ''}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              onChange={setEnergyDiffusionEnabled}
              checked={energyDiffusionEnabled}
            />
            <Spacer />
            <span>Enable safe energy diffusion{energyDiffusionEnabled ? '' : ' 🔥'}</span>
          </div>
        </ExampleSection>
        <ExampleSection name="Text Field (single line)" style={{ flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Textfield
              style={{ width: '250px' }}
              placeholder="Type something then press enter!"
              onChange={setText}
              onEnter={(t) => {
                setEnteredText(t)
                setText('')
              }}
              value={text}
            />
            <Spacer />
            <div>{enteredText}</div>
          </div>
        </ExampleSection>
        <ExampleSection name="Stepper">
          <div>
            <div style={{ marginBottom: '12px' }}>
              <Stepper currentStep={step} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                <Button
                  size="xsmall"
                  onClick={() => {
                    if (1 < step) setStep(step - 1)
                  }}
                >
                  prev
                </Button>
                <Button
                  size="xsmall"
                  onClick={() => {
                    if (step < 3) setStep(step + 1)
                  }}
                >
                  next
                </Button>
              </div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <Stepper size="large" maxStep={4} currentStep={2} style={{ width: '300px' }} />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <Stepper size="xlarge" />
            </div>
          </div>
        </ExampleSection>
        <ExampleSection name="Toggle Switch">
          <div style={{ flexDirection: 'column' }}>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
              <Toggle onChange={setIsOn} id="toggle-sample1" />
              <span style={{ marginLeft: '8px' }}> uncontrolled toggle {isOn ? 'on' : 'off'}</span>
            </div>
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
              <Toggle checked={isOn2} onChange={setIsOn2} id="toggle-sample2" />
              <Button style={{ marginLeft: '8px' }} size="xsmall" onClick={() => setIsOn2(!isOn2)}>
                button to toggle
              </Button>
              {isOn2 ? 'on' : 'off'}
            </div>
          </div>
        </ExampleSection>
      </div>
    </div>
  )
})
