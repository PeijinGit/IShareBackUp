export default[
    {
        title: 'Main Page',
        key: 'home',
        icon: 'home',
        path: '/admin/home'
    },
    {
        title: 'prod_about',
        key: 'prod_about',
        icon: 'appstore',
        children:[
            {
                title:'Category',
                key:'category',
                icon:'',
                path:'/admin/prod_about/category'
            },
            {
                title:'Product',
                key:'product',
                icon:'',
                path:'/admin/prod_about/product'
            },
        ]
    },
    {
        title: 'User Mana',
        key: 'user',
        icon: '',
        path: '/admin/user'
    },
    {
        title: 'Role Mana',
        key: 'role',
        icon: '',
        path: '/admin/role'
    },
    {
        title: 'charts',
        key: 'charts',
        icon: '',
        children:[
            {
                title:'Bar',
                key:'bar',
                icon:'',
                path:'/admin/prod_about/Category'
            },
            {
                title:'Pie',
                key:'pie',
                icon:'',
                path:'/admin/prod_about/product'
            },
        ]
    },
]