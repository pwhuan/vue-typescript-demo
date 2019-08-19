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
                    title: '关于我们详情',
                    select: '关于我们列表'
                }
            }
        ]
    },
    {
        path: '/permissions',
        component: () => import('@/views/permissions/permissions.vue'),
        meta: {
            icon: '',
            isDisable: true,
            keepAlive: true,
            title: '权限管理'
        },
        children: [
            {
                path: 'edit-permissions',
                component: () => import('@/views/permissions/edit-permissions.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '编辑权限'
                }
            }
        ]
    }

]

