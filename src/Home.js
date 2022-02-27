import React from 'react'
import './home.css'

import Button from './components/Button'
import ExampleSection from './components/ExampleSection'
import Tooltip from './components/Tooltip'
import { observer } from 'mobx-react-lite'
import UIContext from './contexts/interface'

const Spacer = () => <div style={{ width: '8px', height: '8px' }} />

export default observer(() => {
  const ui = React.useContext(UIContext)
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
      </div>
    </div>
  )
})
