import React from 'react'

declare module 'nanoether/build/Button' {
  type Button = React.FunctionComponent<{
    type?: 'outline' | 'borderless' | 'solid'
    size?: 'normal' | 'xsmall' | 'small' | 'large' | 'xlarge'
    onClick?: (update: (text: string) => void) => Promise<string | void> | void | string
    loadingText?: string
  }>
  export default Button
}

declare module 'nanoether/Checkbox' {
  type Checkbox = React.FunctionComponent<{
    onChange?: (checked: boolean) => Promise<any> | void
    checked?: boolean
  }>
  export default Checkbox
}

declare module 'nanoether/Stepper' {
  type Stepper = React.FunctionComponent<{
    maxStep?: number
    currentStep?: number
    size?: 'normal' | 'large' | 'xlarge'
  }>
  export default Stepper
}


declare module 'nanoether/Textfield' {
  type Textfield = React.FunctionComponent<{
    onChange?: (text: string) => void
    onEnter?: (text: string) => void
    value?: string
  }>
  export default Textfield
}

declare module 'nanoether/Tooltip' {
  type Tooltip = React.FunctionComponent<{
    text: string
    maxWidth?: number
  }>
  export default Tooltip

}
