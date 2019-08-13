import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Lista from '@/components/Lista'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/lista',
            name: 'Lista',
            component: Lista
        },
        {
            path: '/details/:data',
            name: 'Details',
            component: Details
        }
    ]

})