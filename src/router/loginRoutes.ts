import Login from '@/views/Login.vue'
import Register from '@/views/Login/Register.vue'

const loginRoutes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    // children: [
    //     {
    //         name:'register',
    //         path: 'register',      //query参数路径 强调：子集不要写‘/’
    //         component: Register,
    //     }
    // ]
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  }
]

export default loginRoutes