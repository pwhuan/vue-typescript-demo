import About from "@/views/About.vue";
export default [

    {
        path: '/login',
        name: "login",
        component: () => import('@/views/account/login.vue'),
        meta: {
            icon: '',
            hideMenu: true,
            title: '登录'
        }
    },
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
        name: "home",
        component: () => import('@/views/Home.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: '首页'
        }
    },
    {
        path: '/about',
        name: "about",
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
                name: "abouta",
                component: () => import('@/views/Abouta.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '关于我们列表',
                }
            },
            {
                path: 'abouta/aboutaa',
                name: "aboutaa",
                component: () => import('@/views/Aboutaa.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '舔狗爱吃屎',
                }
            }
        ]
    },
    {
        path: '/permissions',
        name: "permissions",
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
                name: "edit-permissions",
                component: () => import('@/views/permissions/edit-permissions.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '编辑权限'
                }
            }
        ]
    },
    {
        path: '/vueLazyload',
        name: "vueLazyload",
        component: () => import('@/views/VueLazyload/VueLazyload.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: '图片懒加载'
        }
    },

]

