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
        path: '/sys-management',
        name: "sys-management",
        component: () => import('@/views/sys-management/sys-management.vue'),
        meta: {
            icon: '',
            isDisable: true,
            keepAlive: true,
            title: '系统管理'
        },
        children: [
            {
                path: 'roles',
                name: "roles",
                component: () => import('@/views/sys-management/roles/roles.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '角色管理'
                }
            },
            {
                path: 'roles/CreateOrEditRole',
                name: "CreateOrEditRole",
                component: () => import('@/views/sys-management/CreateOrEditRole/CreateOrEditRole.vue'),
                meta: {
                    icon: '',
                    keepAlive: true,
                    title: '添加角色',
                    select: "角色管理"
                }
            }

        ]
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

