import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [
        { name: "Finish Homework", priority: "High"},
        { name: "Clean Car", priority: "Low"},
        { name: "Tidy House", priority: "Low"},
        { name: "Catch up on Game of Thrones", priority: "High"}
      ],
      newTodo: "",
      picked: ""
    },
    methods: {
      saveNewTodo: function(){
        this.items.push({
          name: this.newTodo,
          priority: this.picked
        });
        this.newTodo = "";
      }
    }
  });
});
