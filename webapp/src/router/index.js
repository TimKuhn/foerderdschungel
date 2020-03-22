import Vue from 'vue'
import VueRouter from 'vue-router'
import Formfiller from '../views/formfiller.vue'
import Decisiontree from '../views/decisiontree.vue'
import Landing from '../views/landing.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/formfiller',
    name: 'formfiller',

    component: Formfiller
  },

  {
    path: '/decisiontree',
    name: 'decisiontree',
    component: Decisiontree
  },
  {
    path: '/',
    name: "landing",
    component: Landing
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router