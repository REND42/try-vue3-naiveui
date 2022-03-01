import { defineStore } from "pinia";
import { basicRoutes } from "../router/routes"
import { RouteRecordRaw } from "vue-router";
import { AppRouteRouteRecordRaw } from "../router/routes";

function hasPermission(route: AppRouteRouteRecordRaw, role: string[]) {
  const routeRole = route.meta?.role ? route.meta?.role: []
  if(!role.length) {
    return false
  }
  return role.some(item => routeRole.includes(item))
}


export const usePermissionStore = defineStore('premission', {
  state() {
    return {
      accessRoutes: []
    }
  },
  getters: {
    routes(): RouteRecordRaw[] {
      return basicRoutes.concat(this.accessRoutes)
    }
  },

  actions: {
    generateRoutes() {

    }
  }
})