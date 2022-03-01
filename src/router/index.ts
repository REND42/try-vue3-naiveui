import { createRouter, createWebHistory } from "vue-router";
import { basicRoutes } from "./routes";


const history = createWebHistory()

const router = createRouter({ 
  history: history,
  routes: basicRoutes
 })

export default router