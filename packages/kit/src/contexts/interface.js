import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

export class Interface {
  // dark/light mode
  // interface viewport size
  darkmode = false
  modeCssClass = ''

  constructor() {
    makeAutoObservable(this)
  }

  // must be called in browser, not in SSR
  load() {
    this.setDarkmode(!!localStorage.getItem('darkmode'))
    document.cookie = `darkmode=${this.darkmode.toString()}`
  }

  setDarkmode(enabled) {
    this.darkmode = enabled
    if (enabled) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkmode', 'true')
        document.cookie = `darkmode=${this.darkmode.toString()}`
      }
      this.modeCssClass = 'dark'
    } else {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('darkmode')
        document.cookie = `darkmode=${this.darkmode.toString()}`
      }
      this.modeCssClass = ''
    }
  }

}

export default createContext(new Interface())
