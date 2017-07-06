import Vue from 'vue'
import Test from './components/Test'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

var app = new Vue({
  el: '#app',
  template: '<Test/>',
  methods: {
    reverseMessage: function () {
    }
  },
  components: {
    Test
  },
  computed: {
  },
  watch: {
  },
  component: {
  }
})
