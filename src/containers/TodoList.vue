<template>
  <div class="TodoList">
    <Input
      :onEnter="addTodo"
      :value="newTodo"
      @onChange="newTodo = $event"
      id="add-todo-input"
      name="new-todo"
      placeholder="What needs to be done?"
    />
    <InputList :items="todos" :onRemove="removeTodo" :onClick="onItemClick"/>
  </div>
</template>

<script>
import Input from '@/components/Input';
import InputList from '@/components/InputList';
import generateId from '@/utils/generateId';

export default {
  name: 'TodoList',
  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 'first',
          text: 'First item',
          editing: false,
          completed: false,
        },
        {
          id: 'second',
          text: 'Second item',
          editing: false,
          completed: false,
        },
      ],
    };
  },
  components: {
    Input,
    InputList,
  },
  methods: {
    addTodo() {
      this.todos = [...this.todos, {
        id: generateId(),
        text: this.newTodo,
        completed: false,
        editing: false,
      }];

      this.clearInput();
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    clearInput() {
      this.newTodo = '';
    },
    onItemClick(id) {
      console.log('He entrado');
      this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, editing: true } : todo));
    },
  },
};
</script>

<style lang="scss">
.TodoList {
  max-width: 60rem;
  margin: 0 auto;
}
</style>
