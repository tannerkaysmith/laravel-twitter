// app.js

require('./bootstrap');

window.Vue = require('vue');

Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('timeline-component', require('./components/TimelineComponent.vue').default);
// Vue.component('users-to-follow-component', require('./components/UsersToFollow.vue').default);

const app = new Vue({
    el: '#app'
});