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
        path: '/settings',
        name: 'Settings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "usersettings" */ '../views/usersettings/UserSettings.vue'),
        meta: {
            breadCrumb: 'Einstellungen'
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
                    },
                    {
                        path: 'random/:type',
                        component: () => import(/* webpackChunkName: "randomcard" */ '../views/randomcard/RandomCard.vue'),
                        meta: {
                            breadCrumb: 'Zufall'
                        }
                    },
                    {
                        path: 'learn',
                        component: () => import(/* webpackChunkName: "startsession" */ '../views/session/sessionstart/SessionStart.vue'),
                        meta: {
                            breadCrumb: 'Lernen'
                        }
                    },
                    {
                        path: 'learn-view',
                        component: () => import(/* webpackChunkName: "sessionview" */ '../views/session/sessionview/SessionView.vue'),
                        meta: {
                            breadCrumb: 'Lernen'
                        }
                    },
                    {
                        path: 'learn-rate',
                        component: () => import(/* webpackChunkName: "sessionview" */ '../views/session/sessionrate/SessionRate.vue'),
                        meta: {
                            breadCrumb: 'Lernen'
                        }
                    },
                    {
                        path: 'learn-summary',
                        component: () => import(/* webpackChunkName: "sessionsummary" */ '../views/session/sessionsummary/SessionSummary.vue'),
                        meta: {
                            breadCrumb: 'Lernen'
                        }
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
