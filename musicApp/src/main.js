import Vue from 'vue'
import App from './App.vue'
import Navbar from './component/Navbar.vue'

Vue.component('app-nav',Navbar);

new Vue({
  el: '#app',
  render: h => h(App)
})
