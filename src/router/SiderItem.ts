export class MenuItem {
    name = '';
    permissionName = '';
    icon = '';
    route = '';
    items: MenuItem[];

    constructor(name: string, permissionName: string, icon: string, route: string, childItems?: MenuItem[]) {
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.route = route;
        if (childItems) {
            this.items = childItems;
        } else {
            this.items = [];
        }
    }
}

export class MenuItems {
    static menuItems = [
        new MenuItem('首页', 'home', 'home', '/home'),
        new MenuItem('关于我们', 'about', 'about', '', [
            new MenuItem('关于我们列表', 'abouta', 'abouta', '/about/abouta'),
            new MenuItem('舔狗爱吃屎', 'bbbbbbb', 'bbbbbbb', '/about/abouta/aboutaa'),
        ]),
        new MenuItem('权限管理', 'permissions', 'permissions', '', [
            new MenuItem('编辑权限', 'edit-permissions', 'edit-permissions', '/permissions/edit-permissions'),
        ]),
        new MenuItem('系统管理', 'sys-management', 'sys-management', '', [
            new MenuItem('角色管理', 'roles', 'roles', '/sys-management/roles'),
        ]),
        new MenuItem('懒加载', 'vueLazyload', 'vueLazyload', '/vueLazyload'),

        // new MenuItem('导航4', 'Pages.Roles', 'local_offer', '/app/roles'),
        // new MenuItem('导航5', '', 'info', '/app/about'),
        // new MenuItem('导航6', '', 'menu', '导航6', [
        //     new MenuItem('子导航1', '', '', ''),
        //     new MenuItem('子导航2', '', '', ''),
        //     new MenuItem('子导航3', '', '', ''),
        //     new MenuItem('子导航4', '', '', ''),
        //     new MenuItem('子导航5', '', '', '', [
        //         new MenuItem('子子导航1', '', '', 'https://aspnetboilerplate.com/?ref=abptmpl'),
        //         new MenuItem('子子导航2', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
        //         new MenuItem('子子导航3', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
        //         new MenuItem('子子导航4', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
        //     ]),
        //     new MenuItem('子导航6', '', '', '')
        // ])
    ];

}
