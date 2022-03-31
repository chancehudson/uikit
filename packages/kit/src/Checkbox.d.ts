import React from 'react'

export = React.FunctionComponent<{
  onChange?: (checked: boolean) => Promise<any> | void
  checked?: boolean
}>
