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
        new MenuItem('HomePage', '', 'home', '/app/home'),

        new MenuItem('Tenants', 'Pages.Tenants', 'business', '/app/tenants'),
        new MenuItem('Users', 'Pages.Users', 'people', '/app/users'),
        new MenuItem('Roles', 'Pages.Roles', 'local_offer', '/app/roles'),
        new MenuItem('About', '', 'info', '/app/about'),

        new MenuItem('MultiLevelMenu', '', 'menu', '', [
            new MenuItem('ASP.NET Boilerplate', '', '', '', [
                new MenuItem('Home', '', '', 'https://aspnetboilerplate.com/?ref=abptmpl'),
                new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem('ASP.NET Zero', '', '', '', [
                new MenuItem('Home', '', '', 'https://aspnetzero.com?ref=abptmpl'),
                new MenuItem('Description', '', '', 'https://aspnetzero.com/?ref=abptmpl#description'),
                new MenuItem('Features', '', '', 'https://aspnetzero.com/?ref=abptmpl#features'),
                new MenuItem('Pricing', '', '', 'https://aspnetzero.com/?ref=abptmpl#pricing'),
                new MenuItem('Faq', '', '', 'https://aspnetzero.com/Faq?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetzero.com/Documents?ref=abptmpl')
            ])
        ])
    ];
}
