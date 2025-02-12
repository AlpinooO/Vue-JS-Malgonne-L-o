import { createWebHashHistory } from "vue-router";
import  HomePage  from "./pages/HomePage.vue";
import { createRouter } from "vue-router";
import NotFoundPage from "./pages/NotFoundPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import SessionPage from './pages/SessionPage.vue'
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
    },{
        path: '/session/:id',
        name: 'session',
        component: SessionPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router 