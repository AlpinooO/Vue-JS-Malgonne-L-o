import { createWebHashHistory } from "vue-router";
import  HomePage  from "./pages/HomePage.vue";
import { createRouter } from "vue-router";
import NotFoundPage from "./pages/NotFoundPage.vue";
import LoginPage from "./pages/LoginPage.vue";
const routes= [
    {
        path: '/',
        component: HomePage
    },{
        path : "/:catchAll(.*)",
        component : NotFoundPage
    },{
        path: '/login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router 