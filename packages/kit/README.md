# `nanoether`

A general purpose user interface kit for building dapps.

[Demosite](https://nanoether.org)

## Components

### Button

A general purpose button.

Props:
  - `type`: `outline`|`borderless`|`solid`
  - `size`: `xsmall`|`small`|`normal`|`large`|`xlarge`
  - `onClick`: A function to be executed when the button is clicked. May be asynchronous. `onClick` is called with an `update` function allowing you to control the button text (example use below). Throw an error with the prefix `Button: ` to control the error text.
  - `loadingText`: Text to be shown during asynchronous button callbacks.


```jsx
import Button from 'nanother/Button'

// render
return (
  <Button onClick={async (update) => {
    update(`We're doing the thing`)
    await new Promise(r => setTimeout(r, 2000))
    update(`It's been two seconds`)
    await new Promise(r => setTimeout(r, 2000))
    // This error will set the button text
    throw new Error(`Button: The operation failed!`)
  }}>
    Do the thing!
  </Button>
)
```

### Tooltip

Shows a text popup on mouseover.

```jsx
import Tooltip from 'nanoether/Tooltip'

return (
  <Tooltip text="Something you need to know" />
)
```

### Checkbox

A checkbox for indicating binary state.

Props:
  - `onChange`: A function called when the checkbox value changes. Receives one argument `enabled`, a boolean indicating whether the box is checked.
  - `checked`: Allows the state of the checkbox to be programatically manipulated

```jsx
import Checkbox from 'nanother/Checkbox'

return (
  <Checkbox
    onChange={setPulseDriveEnabled}
    checked={pulseDriveEnabled}
  />
  <span>Enable pulse drive{pulseDriveEnabled ? ' 🚀' : ''}</span>
)
```

### Textfield

A single line text input field.

Props:
  - `onChange`: A function called when the text input changes. Called with a single argument, the current text contents of the field.
  - `onEnter`: A function called when the enter key is presed. Called with a single argument, the current text contents of the field.
  - `value`: A text prop used to programatically control the text field.

```jsx

import Textfield from 'nanother/Textfield'

return (
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
  <div>{enteredText}</div>
)
```

## Contexts

### Interface

A React context backed by a mobx store. Used for controlling dark/light mode settings and mobile screen detection.

Example intitialization logic:
```jsx
import UIContext from `nanoether/interface`

const RootApp = () => {
  const ui = React.useContext(UIContext)
  React.useEffect(() => {
    // when the page loads the following should be executed
    if (typeof window !== 'undefined') {
      ui.load()
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


```

## Styles

### Colors

CSS color definitions used in components.

```js
import 'nanother/colors.css'
```
