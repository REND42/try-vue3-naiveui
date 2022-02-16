import { createRouter, createWebHistory } from "vue-router";
import routes from "./routers";


const history = createWebHistory()

const router = createRouter({ history, routes })

export default router