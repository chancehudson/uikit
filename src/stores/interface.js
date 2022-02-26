import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class Interface {
  // dark/light mode
  // interface viewport size
  darkmode = false
  modeCssClass = ''

  constructor() {
    makeAutoObservable(this)
  }

  setDarkmode(enabled) {
    this.darkmode = enabled
    if (enabled) {
      this.modeCssClass = 'dark'
    } else {
      this.modeCssClass = ''
    }
  }

}

export default createContext(new Interface())
