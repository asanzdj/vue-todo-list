<template>
  <div class="TodosList">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @editTodo="editTodo"
      @doneEdit="doneEdit"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import TodoItem from './TodoItem';

export default {
  name: 'TodosList',
  components: {
    TodoItem,
  },
  data() {
    return {
      beforeEditCache: '',
    };
  },
  computed: {
    ...mapGetters('todos', {
      todos: 'filteredTodos',
    }),
  },
  methods: {
    editTodo(todo) {
      this.beforeEditCache = todo.text;
      const newTodos = this.todos.map(item => (item.id === todo.id ? { ...item, editing: true } : item));
      this.$emit('setTodos', newTodos);
    },
    removeTodo(id) {
      const newTodos = this.todos.filter(todo => todo.id !== id);
      this.$emit('setTodos', newTodos);
    },
    doneEdit(todo) {
      const newTodos = this.todos.map(item => (item.id === todo.id ? { ...item, editing: false, text: todo.text } : item));
      this.$emit('setTodos', newTodos);
    },
    cancelEdit(todo) {
      const newTodos = this.todos.map(item => (item.id === todo.id ? { ...item, editing: false, text: this.beforeEditCache } : item));
      this.$emit('setTodos', newTodos);
    },
  },
};
</script>

<style lang="scss">
.TodosList {
  min-height: 10rem;
  margin-top: 2rem;
}
</style>
