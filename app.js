new Vue({
    el: '#app',
    data: {
      message: 'FENERBAHÇE 1907!'
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('');
      }
    }
  });
  