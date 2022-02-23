import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import './../node_modules/bulma/css/bulma.css';
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas, faHouseUser, faPhotoVideo, faBookmark,faPhoneAlt,faUser} from '@fortawesome/free-solid-svg-icons'
import { fab, faWhatsapp,faTelegramPlane,faInstagram,faGithub, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueSkeletonLoader from 'skeleton-loader-vue';

require('@/assets/scss/main.scss')

library.add(fas,fab,faHouseUser,faPhotoVideo,faBookmark,
  faPhoneAlt,faUser,faWhatsapp,faTelegramPlane,faInstagram,faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('vue-skeleton-loader', VueSkeletonLoader);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
