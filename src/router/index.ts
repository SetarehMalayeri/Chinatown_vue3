//创建一个路由器，并暴露出去
import { createRouter, createWebHistory } from 'vue-router'
//引入组件
import homeRoutes from '@/router/homeRoutes'
import partyRoutes from '@/router/partyRoutes'
import shareRoutes from '@/router/shareRoutes'
import messageRoutes from '@/router/messageRoutes'
import loginRoutes from '@/router/loginRoutes'

const routes = [
    ...homeRoutes,
    ...partyRoutes,
    ...shareRoutes,
    ...messageRoutes,
    ...loginRoutes,
    {
        //路由重定向
        path:'/',
        redirect:'/home'
    }
]

//创建路由器
const router = createRouter({
    //路由器工作模式
    history: createWebHistory(),

    routes: routes
})

export default router