import About from "@/views/About.vue";
export default [
    {
        path: '',
        component: () => import('@/views/Home.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: '首页'
        }
    },
    {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            icon: '',
            isDisable: true,
            keepAlive: true,
            title: '关于我们'
        },
        children: [
            {
                path: 'abouta',
                component: () => import('@/views/Abouta.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '关于我们列表'
                }
            },
            {
                path: 'abouta/aboutaa',
                component: () => import('@/views/Aboutaa.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '关于我们详情'
                }
            }
        ]
    }
]

