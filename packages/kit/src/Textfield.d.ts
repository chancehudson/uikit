import React from 'react'

export = React.FunctionComponent<{
  onChange?: (text: string) => void
  onEnter?: (text: string) => void
  value?: string
}>
