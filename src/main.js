import Vue from 'vue';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faTimes, faCheck } from '@fortawesome/fontawesome-free-solid'
import App from './App.vue';
import 'bulma/css/bulma.min.css';
import './main.css';

Vue.config.productionTip = false;

fontawesome.library.add(faTimes, faCheck);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App)
}).$mount('#app');
