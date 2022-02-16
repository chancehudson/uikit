import React from 'react'
import './shared.css'

import Button from './components/Button'
import ExampleSection from './components/ExampleSection'

const Spacer = () => <div style={{ width: '8px', height: '8px' }} />

export default () => {
  return (
    <div className="container">
      <div className="header">
        <div>
          Privacy and Scalability Explorations UIKit
        </div>
      </div>
      <div style={{ height: '8px'}} />
      <div className="section-box">
        A shared interface kit for developing Ethereum based applications.
      </div>
      <div className="section-components">
        <ExampleSection name="Button" description="A multi-purpose button with support for asynchronous operations.">
          <Button onClick={() => new Promise(r => setTimeout(r, 2000))}>
            Normal Example
          </Button>
          <Button onClick={async (update) => {
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
          <Button
            loadingText="😅 😅 😅"
            onClick={() => new Promise((_,r) => setTimeout(() => r(new Error('Button: Uh Oh!')), 2000))}
          >
            Error Example
          </Button>
        </ExampleSection>
      </div>
    </div>
  )
}
