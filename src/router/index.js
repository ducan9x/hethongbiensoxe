import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/login',
        name:'Login',
        component: () =>
            import('../views/Login.vue'),
    },
    {
        path: '/data',
        name: 'Data',
        component: () =>
            import('../views/Statistical.vue'),
    },
    {
        path: '/customer',
        name: 'Customer',
        component: () =>
            import('../views/Customer.vue'),
    },
    {
        path: '/personnel',
        name: 'Personnel',
        component: () =>
            import('../views/Personnel.vue'),
    },
    {
        path: '/registercustom',
        name: 'RegisterCustom',
        component: () =>
            import(
                '../views/RegisterCustomer.vue'
            ),
    },
    {
        path: '/registerpersonel',
        name: 'RegisterPerson',
        component: () =>
            import(
                '../views/RegisterPersonel.vue'
            ),
    },
    {
        path: '/editpersonel',
        name: 'EditPerson',
        component: () =>
            import('../views/EditPerson.vue'),
    },
    {
        path: '/editcustomer',
        name: 'EditCustomer',
        component: () =>
            import('../views/EditCustomer.vue'),
    },
    {
        path: '/overduelist',
        name: 'OverdueList',
        component: () =>
            import('../views/OverdueList.vue'),
    },
    {
        path: '/blacklist',
        name: 'BlackList',
        component: () =>
            import('../views/BlackList.vue'),
    },
    {
        path: '/decentralization/editor',
        name: 'Decentralization',
        component: () =>
            import('../views/Decentralization.vue'),
    },
    {
        path: '/decentralization',
        name: 'ListDecentralization',
        component: () =>
            import('../views/ListDecentralization.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    // chuyển đến trang login nếu chưa được login
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = sessionStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
})
export default router;
