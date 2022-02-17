import { defineStore } from "pinia";


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    username: '',
    avatar: '',
    info: {}
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getUserInfo(): object {
      return this.info
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(info: object) {
      this.info = info
    }
  }
})