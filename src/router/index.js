import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            breadCrumb: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            breadCrumb: 'About'
        }
    },
    {
        path: '/sets',
        name: 'Sets',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "setlist" */ '../views/setcontainer/SetContainer.vue'),
        meta: {
            breadCrumb: 'Karteien'
        },
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "setlist" */ '../views/setlist/SetList.vue'),
                meta: {
                    breadCrumb: 'Kartei Liste'
                },
            },
            {
                path: ':setId',
                name: 'Karei',
                component: () => import(/* webpackChunkName: "setview" */ '../views/setview/SetView.vue'), 
                meta: {
                    breadCrumb: 'Kartei'
                },
                children: [
                    {
                        path: '',
                        component: () => import(/* webpackChunkName: "setdashboard" */ '../views/setdashboard/SetDashboard.vue'),
                        meta: {
                            breadCrumb: 'Kartei Dashboard'
                        },
                    },
                    {
                        path: 'card',
                        component: () => import(/* webpackChunkName: "cardview" */ '../views/cardview/CardView.vue'),
                        meta: {
                            breadCrumb: 'Karte'
                        },
                    }
                ]
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
