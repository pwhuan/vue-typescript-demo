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
        new MenuItem('导航1', '', 'home', '/home'),
        new MenuItem('导航2', 'Pages.Tenants', 'business', '/about'),
        new MenuItem('导航3', 'Pages.Users', 'people', '/app/users'),
        new MenuItem('导航4', 'Pages.Roles', 'local_offer', '/app/roles'),
        new MenuItem('导航5', '', 'info', '/app/about'),
        new MenuItem('导航6', '', 'menu', '导航6', [
            new MenuItem('子导航1', '', '', ''),
            new MenuItem('子导航2', '', '', ''),
            new MenuItem('子导航3', '', '', ''),
            new MenuItem('子导航4', '', '', ''),
            new MenuItem('子导航5', '', '', '', [
                new MenuItem('子子导航1', '', '', 'https://aspnetboilerplate.com/?ref=abptmpl'),
                new MenuItem('子子导航2', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('子子导航3', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('子子导航4', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem('子导航6', '', '', '')
        ])
    ];

    static routers = {
        导航1: '/home'
    }
}
