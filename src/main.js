import Vue from 'vue'
import Test from './components/Test'

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
