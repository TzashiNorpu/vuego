import App from './app.vue';
import Vue from 'vue'
import router from './src/router/index.js'
import './src/styles/reset.css'
import './src/styles/border.css'
import fastClick from 'fastclick'

fastClick.attach(document.body)

new Vue({
    el: '#root',
    router:router,
    // components:{App},
    // template:'</App>'
    render: h => h(App)
  })