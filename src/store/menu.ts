import { defineStore } from "pinia";


export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      currentMenu: localStorage.getItem('currentMenu') || ''
    }
  },
  getters: {
    getCurMenu(): string {
      return this.currentMenu
    }
  },
  actions: {
    setCurrentMenu(currentMenu: string) {
      localStorage.setItem('currentMenu', currentMenu)
      this.currentMenu = currentMenu
    }
  }
})