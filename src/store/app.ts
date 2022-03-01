import { defineStore } from "pinia";
import type { GlobalTheme } from 'naive-ui'

export const useAppStore = defineStore('app', {
  state() {
    return {
      curTheme: null as GlobalTheme | null
    }
  },
  getters: {
    theme(): GlobalTheme | null {
      return this.curTheme
    }
  },
  actions: {
    setTheme(theme: GlobalTheme | null) {
      this.curTheme = theme
      console.log(2555, this.curTheme)
    }
  }
})