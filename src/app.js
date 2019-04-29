import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: ["Finish Homework", "Clean Car", "Go Shopping"],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.items.push(this.newTodo);
        this.newTodo = "";
      }
    }
  });
});
