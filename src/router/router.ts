import About from "@/views/About.vue";
export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      icon: '',
      keepAlive: true,
      title: 'about'
    },
    children: [
      {
        path: 'aboutaa',
        name: 'aboutaa',
        component: () => import('@/views/Aboutaa.vue'),
        meta: {
          icon: '',
          keepAlive: true,
          title: 'aboutaa'
        }
      }
    ]
  }
]

