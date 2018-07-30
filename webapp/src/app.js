// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Entry from './Entry'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    },
    onDeviceReady: function() {
        new Vue({
                el: '#app',
                router,
                store,
                template: '<Entry/>',
                components: { Entry }
            })
            // window.navigator.splashscreen.hide()
    }
}
app.initialize()