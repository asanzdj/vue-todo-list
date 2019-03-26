<template>
  <div class="TodosList">
    <TodoItem
      :key="todo.id"
      :todo="todo"
      @removeTodo="removeTodo"
      @editTodo="editTodo"
      @doneEdit="doneEdit"
      v-for="todo in todos"
    />
  </div>
</template>
<script>
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
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.TodosList {
  height: 20rem;
  overflow-y: scroll;
}
</style>
