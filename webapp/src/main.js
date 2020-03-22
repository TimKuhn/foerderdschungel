import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import { store } from './store/store.js' // This must be imported
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store: store,
  
}).$mount('#app')


// new Vue({
//   el: '#app',
//   store: store,  // store must be referenced here
//   components: { App },
//   template: '<App/>'
// })