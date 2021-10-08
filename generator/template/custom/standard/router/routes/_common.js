import Home from '@/views/home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    <%_ if (options.authenMode !== 'no') { _%>
    meta: {isAuthen: true}
    <%_ } _%>
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '@/views/login.vue'),
  },
]
