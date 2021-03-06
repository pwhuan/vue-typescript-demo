export class Breadcrumb {
    static breadcrumb = [
        { path: '/home', name: '首页' },
        { path: '/about', name: '关于我们', isDisable: true },
        { path: '/about/abouta', name: '关于我们列表' },
        { path: '/about/abouta/aboutaa', name: '关于我们详情' },
        { path: '/permissions', name: '权限管理' },
        { path: '/permissions/edit-permissions', name: '编辑权限' },
        { path: "/vueLazyload", name: '图片懒加载' },
        { path: "/sys-management", name: '系统管理', isDisable: true },
        { path: "/sys-management/roles", name: '角色管理' },
        { path: "/sys-management/roles/CreateOrEditRole", name: '添加角色' },

    ]
}
