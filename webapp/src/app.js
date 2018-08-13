// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Entry from './Entry'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var that = this
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(that), false)
    },
    onDeviceReady: function() {
        try {
            new Vue({
                el: '#app',
                router,
                template: '<Entry/>',
                components: { Entry }
            })
        } catch (e) {
            alert(e.message)
        }
        // window.navigator.splashscreen.hide()
    }
}
app.initialize()