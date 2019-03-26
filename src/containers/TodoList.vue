<template>
  <div class="Wrapper">
    <input
      class="AddItem"
      @keyup.enter="addTodo"
      id="new-todo"
      name="new-todo"
      placeholder="What needs to be done?"
      type="text"
      v-model="newTodo"
    >
    <TodosList :todos="filteredTodos" @setTodos="setTodos" />
    <TodoFilters :active="activeFilter" @setFilter="setActiveFilter"/>
    <TodoFooter
      @checkAllTodos="checkAllTodos"
      :checked="!anyRemaining"
      @clearCompleted="clearCompleted"
      :showClearButton="showClearButton"
      :remainingTodos="remaining"
    />
  </div>
</template>

<script>
import { TodosList, TodoFilters, TodoFooter } from '@/components';
import generateId from '@/utils/generateId';

export default {
  name: 'TodoList',
  components: {
    TodosList,
    TodoFilters,
    TodoFooter,
  },
  data() {
    return {
      activeFilter: 'ALL',
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
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    },
    filteredTodos() {
      if (this.activeFilter === 'ACTIVE') {
        return this.todos.filter(todo => !todo.completed);
      }

      if (this.activeFilter === 'COMPLETED') {
        return this.todos.filter(todo => todo.completed);
      }

      return this.todos;
    },
    showClearButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    },
  },
  methods: {
    setTodos(todos) {
      this.todos = todos;
    },
    addTodo() {
      this.setTodos([...this.todos, {
        id: generateId(),
        text: this.newTodo,
        completed: false,
        editing: false,
      }]);

      this.clearInput();
    },
    clearInput() {
      this.newTodo = '';
    },
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    checkAllTodos() {
      this.setTodos(this.todos.map(todo => ({ ...todo, completed: event.target.checked })));
    },
    clearCompleted() {
      this.setTodos(this.todos.filter(todo => !todo.completed));
    },
  },
};
</script>

<style lang="scss">
  .Wrapper {
    max-width: 60rem;
    margin: 0 auto;
  }

  .AddItem {
    border: none;
    border-bottom: 1px solid darkgray;
    text-align: center;
    width: 70%;

    &:focus {
      outline: none;
    }
  }
</style>
