import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/home/HomePage.vue'
import ListUserPage from './pages/users/ListUserPage.vue'

Vue.use(VueRouter)

const router =  new VueRouter({
    routes: [
        { path: '/', component: HomePage , name: 'home'},
        { path: '/users', component: ListUserPage , name: 'users'},
        { path: '/categories', component: ListUserPage , name: 'categories'},
    ]
})

export default router;