import React from 'react'

export = React.FunctionComponent<{
  type?: 'outline' | 'borderless' | 'solid'
  size?: 'normal' | 'xsmall' | 'small' | 'large' | 'xlarge'
  onClick?: (update: (text: string) => void) => Promise<string | void> | void | string
  loadingText?: string
}>
