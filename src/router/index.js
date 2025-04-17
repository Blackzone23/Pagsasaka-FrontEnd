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
        children: [

            {
                path: '/about',
                name: 'About',
                component: () => import('../views/HomePage/About.vue'),  
                meta: { requiresAuth: false },
            }, 

            {
                path: '/test',
                name: 'Test',
                component: () => import('../views/HomePage/Test.vue'),  
                meta: { requiresAuth: false },
            }, 

            {
                path: '/market',
                name: 'Market',
                component: () => import('../views/HomePage/Market.vue'),
                meta: { requiresAuth: true },
            },

            {
                path: '/landing',
                name: 'Landing',
                component: () => import('../views/HomePage/Landing_Product.vue'),
                meta: { requiresAuth: true },
            },
            
            {
                path: '/services',
                name: 'Services',
                component: () => import('../views/HomePage/Services.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/contact',
                name: 'Contacts',
                component: () => import('../views/HomePage/Contacts.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/policy',
                name: 'Privacy_Policy',
                component: () => import('../views/HomePage/Privacy_Policy.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/meet',
                name: 'Meet_Farmers',
                component: () => import('../views/HomePage/Meet_Farmers.vue'),
                meta: { requiresAuth: false },
            },
            {
                path: '/shop',
                name: 'Viewshop',
                component: () => import('../views/HomePage/Viewshop.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/cart',
                name: 'Add_Cart',
                component: () => import('../views/HomePage/Add_Cart.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/message',
                name: 'Message',
                component: () => import('../views/HomePage/Message.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/checkout',
                name: 'Checkout',
                component: () => import('../views/Market_Page/Checkout.vue'),
                meta: { requiresAuth: false }, 
            },

            {
                path: '/signup',
                name: 'Sign-up',
                component: () => import('../views/HomePage/Sign-up/Sign-Up.vue'),
                meta: { requiresAuth: false },
            },
            {
                path: '/rider',
                name: 'Rider-Form',
                component: () => import('../views/HomePage/Rider-Form/Rider_Form.vue'),
                meta: { requiresAuth: false },
            },
            {
                path: '/page2',
                name: 'Page_2',
                component: () => import('../views/HomePage/Sign-up/Page_2.vue'),
                meta: { requiresAuth: false },
            },
            
            
            {
                path: '/page4',
                name: 'Page_4',
                component: () => import('../views/HomePage/Sign-up/Page_4.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/page5',
                name: 'Page_5',
                component: () => import('../views/HomePage/Sign-up/Page_5.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/page6',
                name: 'Page_6',
                component: () => import('../views/HomePage/Sign-up/Page_6.vue'),
                meta: { requiresAuth: false }, 
            },
            {
                path: '/page7',
                name: 'Page_7',
                component: () => import('../views/HomePage/Sign-up/Page_7.vue'),
                meta: { requiresAuth: false },
            },

            {
                path: '/page8',
                name: 'Page_8',
                component: () => import('../views/HomePage/Sign-up/Page_8.vue'),
                meta: { requiresAuth: false },
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
                name: 'Admin_Dashboard',
                component: () => import('../views/Account/Administrator/Administrator_Dashboard.vue'),
            },

            {
                path: '/admin-list',
                name: 'Administrator_List',
                component: () => import('../views/Account/Administrator/Administrator_List.vue'),
            },

            {
                path: '/admin_profile',
                name: 'Administrator_Profile',
                component: () => import('../views/Account/Administrator/Administrator_Profile.vue'),
            },


           
        ]
    },


    /*********************************************************************
    FARMER ROUTES
    *********************************************************************/
    {
        path: '/',
        name: 'Farmer',
        component: BaseLayout,
        meta: { requiresAuth: true, roles: 'Farmer' },
        children: [
        
            // Dashboard route
            {
                path: '/dashboard',
                name: 'Farmer_Dashboard',
                component: () => import('../views/Account/User/Farmer_Dashboard.vue')
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

            {
                path: '/seller-profile',
                name: 'Seller_Profile',
                component: () => import('../views/Account/User/Seller_Profile.vue')
            },

            {
                path: '/fmessage',
                name: 'FMessage',
                component: () => import('../views/Account/User/FMessage.vue')
            },

        ]

    },

    /*********************************************************************
    CONSUMER ROUTES
    *********************************************************************/
    {
        
            path: '/',
            name: 'Consumer',
            meta: { requiresAuth: true, roles: 'Consumer' },
            children: [
                {
                    path: '/',
                    redirect: '/market',
                },

                {
                    path: '/dashboard',
                    name: 'Consumer_Dashboard',
                    component: () => import('../views/Account/Consumer/Consumer_Dashboard.vue'),
                },
                
                {
                    path: '/profile',
                    name: 'MyProfile',
                    component: () => import('../views/HomePage/MyProfile.vue'),
                },
            ]
        },

        /*********************************************************************
        Rider ROUTES
        *********************************************************************/
        {
            path: '/',
            name: 'Rider',
            component: BaseLayout,
            meta: { requiresAuth: true, roles: 'Rider' },
            children: [
            
                // Dashboard route
                {
                    path: '/dashboard',
                    name: 'Rider_Dashboard',
                    component: () => import('../views/Account/Rider/Rider_Dashboard.vue')
                },

                {
                    path: '/rider_productlist',
                    name: 'Rider_ProductList',
                    component: () => import('../views/Account/Rider/Rider_ProductList.vue')
                },
                
                {
                    path: '/rider_profile',
                    name: 'Rider_Profile',
                    component: () => import('../views/Account/Rider/Rider_Profile.vue')
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
    const role_name = store.state.userData.data.role_name;

    if (to.meta.requiresAuth && !token) {
        // Redirect to login if not authenticated
        next({ name: 'Login' });
    } else if (token && to.name === 'Login') {
        // Redirect to the dashboard if already logged in and trying to access login page
        const redirectName = role_name ? `${role_name}_Dashboard` : '/';
        next({ name: redirectName });
    } else if (token && to.meta.roles && !to.meta.roles.includes(role_name)) {
        // Redirect if user role is not in the allowed roles for the route
        const redirectName = role_name ? `${role_name}_Dashboard` : '/';
        next({ name: redirectName });
    } else {
        // Proceed to the requested route
        next();
    }
});


export default router


