import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

const MAX_MOBILE_WIDTH = 780

export class Interface {
  // dark/light mode
  // interface viewport size
  darkmode = false
  modeCssClass = ''
  screenWidth = -1
  screenHeight = -1
  isMobile = false

  constructor() {
    makeAutoObservable(this)
  }

  // must be called in browser, not in SSR
  load() {
    this.setDarkmode(!!localStorage.getItem('darkmode'))
    document.cookie = `darkmode=${this.darkmode.toString()}`
    window.addEventListener('resize', this.updateWindowSize.bind(this))
    this.updateWindowSize()
  }

  updateWindowSize() {
    // possibly throttle on heavy sites
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.isMobile = this.screenWidth <= MAX_MOBILE_WIDTH
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
