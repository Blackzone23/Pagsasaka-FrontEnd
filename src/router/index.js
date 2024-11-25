import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from '@/components/BaseLayout.vue';
import store from '@/store';

const routes = [

    {
        path: '/',
        name: 'Home',
        meta: { requiresAuth: false },
        component: () => import('../views/Home.vue')
    },
     /*********************************************************************
    BASE LAYOUT ROUTES
    *********************************************************************/
    {
        path: '/',
        component: BaseLayout,
        children: [

            {
                path: '/about',
                name: 'About',
                component: () => import('../views/HomePage/About.vue'),  
                meta: { requiresAuth: false, roles: ['Home','About','Market','Services','Privacy_Policy','Meet_Farmers','Sign-Up'] }, 
            }, 

            {
                path: '/market',
                name: 'Market',
                component: () => import('../views/HomePage/Market.vue'),
                meta: { requiresAuth: false, roles: ['Home','About','Market','Services','Privacy_Policy','Meet_Farmers','Sign-Up'] }, 
            },
            
            {
                path: '/services',
                name: 'Services',
                component: () => import('../views/HomePage/Services.vue'),
                meta: { requiresAuth: false, roles: ['Home','About','Market','Services','Privacy_Policy','Meet_Farmers','Sign-Up'] }, 
            },

            {
                path: '/contact',
                name: 'Contacts',
                component: () => import('../views/HomePage/Contacts.vue'),
                meta: { requiresAuth: false, roles: ['Home','About','Market,','Services','Contacts','Privacy_Policy','Meet_Farmers','Sign-Up'] }, 
            },

            {
                path: '/policy',
                name: 'Privacy_Policy',
                component: () => import('../views/HomePage/Privacy_Policy.vue'),
                meta: { requiresAuth: false, roles: ['Home','About','Market,','Services','Privacy_Policy','Meet_Farmers','Sign-Up'] }, 
            },

            {
                path: '/meet',
                name: 'Meet_Farmers',
                component: () => import('../views/HomePage/Meet_Farmers.vue'),
                meta: { requiresAuth: false, roles: ['Home','About','Market,','Services','Meet_Farmers','Sign-Up'] }, 
            },

            {
                path: '/signup',
                name: 'Sign-up',
                component: () => import('../views/HomePage/Sign-up/Sign-Up.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },
            {
                path: '/page2',
                name: 'Page_2',
                component: () => import('../views/HomePage/Sign-up/Page_2.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },
            
            {
                path: '/page3',
                name: 'Page_3',
                component: () => import('../views/HomePage/Sign-up/Page_3.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },

            {
                path: '/page4',
                name: 'Page_4',
                component: () => import('../views/HomePage/Sign-up/Page_4.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },

            {
                path: '/page5',
                name: 'Page_5',
                component: () => import('../views/HomePage/Sign-up/Page_5.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },

            {
                path: '/page6',
                name: 'Page_6',
                component: () => import('../views/HomePage/Sign-up/Page_6.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },
            {
                path: '/page7',
                name: 'Page_7',
                component: () => import('../views/HomePage/Sign-up/Page_7.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },

            {
                path: '/page8',
                name: 'Page_8',
                component: () => import('../views/HomePage/Sign-up/Page_8.vue'),
                meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
            },
  
        ]
    },


    /*********************************************************************
    LOGIN PAGE ROUTES
    *********************************************************************/
    {
        path: '/login',
        name: 'Login',
        meta: { requiresAuth: false },
        component: () => import('../views/Log-in/Login.vue')

        
    },
    // {
    //     path: '/page8',
    //     name: 'Page_8',
    //     component: () => import('../views/HomePage/Sign-up/Page_8.vue'),
    //     meta: { requiresAuth: false, roles: ['Sign-Up'] }, 
    // },


    /*********************************************************************
    MARKET PAGE ROUTES
    *********************************************************************/
    {
        path: '/marketpage1',
        name: 'Market_Page1',
        meta: { requiresAuth: false },
        component: () => import('../views/Market_Page/Market_Page1.vue')

        
    },
    
    /*********************************************************************
    ADMINISTRATOR ROUTES
    *********************************************************************/
    {
        path: '/',
        name: 'Administrator',
        component: BaseLayout,
        meta: { requiresAuth: true, roles: 'Administrator' },
        children: [
        
            // Dashboard route
            {
                path: '/dashboard',
                name: 'Administrator_Dashboard',
                component: () => import('../views/Account/Administrator/Administrator_Dashboard.vue'),
            },

           
        ]
    },


    /*********************************************************************
    USER ROUTES
    *********************************************************************/
    {
        path: '/',
        name: 'User',
        component: BaseLayout,
        meta: { requiresAuth: false, roles: 'User', },
        children: [
        
            // Dashboard route
            {
                path: '/userdashboard',
                name: 'User_Dashboard',
                component: () => import('../views/Account/User/User_Dashboard.vue')
            },

            {
                path: '/product',
                name: 'Product',
                component: () => import('../views/Account/User/Product.vue')
            },

            {
                path: '/ship',
                name: 'Shipment',
                component: () => import('../views/Account/User/Shipment.vue')
            },

            {
                path: '/pay',
                name: 'Payments',
                component: () => import('../views/Account/User/Payments.vue')
            },

            {
                path: '/order',
                name: 'Order',
                component: () => import('../views/Account/User/Order.vue')
            },

            {
                path: '/archive',
                name: 'Archive',
                component: () => import('../views/Account/User/Archive.vue')
            },


        ]
    },


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    const token = store.state.userData.data.token;
    const user_type = store.state.userData.data.user_type;

    if (to.meta.requiresAuth && !token) {
        // Redirect to login if not authenticated
        next({ name: 'Login' });
    } else if (token && to.name === 'Login') {
        // Redirect to the dashboard if already logged in and trying to access login page
        const redirectName = user_type ? `${user_type}_Dashboard` : '/';
        next({ name: redirectName });
    } else if (token && to.meta.roles && !to.meta.roles.includes(user_type)) {
        // Redirect if user role is not in the allowed roles for the route
        const redirectName = user_type ? `${user_type}_Dashboard` : '/';
        next({ name: redirectName });
    } else {
        // Proceed to the requested route
        next();
    }
});



export default router
