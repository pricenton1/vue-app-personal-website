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
        path: '/vue-app-personal-website/', 
        name:'Home',
        component: () => import("../pages/Home"),
    },
    { 
        path: '/vue-app-personal-website/about',
        name:'About',
        component: About 
    },
    { 
        path: '/vue-app-personal-website/hello',
        name:'HelloWorld',
        component: HelloWorld 
    },
    {
        path: '/vue-app-personal-website/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/vue-app-personal-website/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path:'/vue-app-personal-website/contact',
        name:'Contact',
        component: Contact
    },
    { 
        path: '*', 
        name:'Home',
        component: () => import("../pages/Home"),
    },
    
  ]

export default new VueRouter({
    mode: 'history',
    routes : routes
})