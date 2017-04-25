var data = {
  message: 'Hellow Xiaolu'
}

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    reverseMessage: function () {
    }
  },
  computed: {
  },
  watch: {
  },
  component: {
  }
})

console.log(data.allArticles === app.allArticles)