import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/bootstrap-vue';

const MOBILE_SCREEN = 767;

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      isMobile: (window.innerWidth <= MOBILE_SCREEN),
    };
  },
  created() {
    window.onresize = () => {
      this.isMobile = (window.innerWidth <= MOBILE_SCREEN);
    };
  },
});

new Vue({
  router,
  store,
  // mixins: [mixins],
  render: (h) => h(App),
}).$mount('#app');
