// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Entry from './Entry'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
document.addEventListener('deviceready', function() {
    new Vue({
        el: '#app',
        router,
        store,
        template: '<Entry/>',
        components: { Entry }
    })
    window.navigator.splashscreen.hide()
}, false)