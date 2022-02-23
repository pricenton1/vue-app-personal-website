import Vue from "vue"
import VueRouter from 'vue-router'

// import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Gallery from '../pages/Gallery.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contact from '../pages/Contact.vue'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name:'Home',
        component: () => import("../pages/Home"),
    },
    { 
        path: '/about',
        name:'About',
        component: About 
    },
    { 
        path: '/hello',
        name:'HelloWorld',
        component: HelloWorld 
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path:'/contact',
        name:'Contact',
        component: Contact
    }
  ]

export default new VueRouter({
    mode: 'history',
    routes : routes
})