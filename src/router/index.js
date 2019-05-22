import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../pages/welcome/Welcome.vue'
import Home from '../pages/home/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[{
        path:'/',
        name:'welcome',
        component:Welcome
    },{
        path:'/home',
        name:'home',
        component:Home
    },]
})