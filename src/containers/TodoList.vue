<template>
  <div class="Wrapper">
    <input
      class="AddItem"
      @keyup.enter="handleAddTodo"
      id="new-todo"
      name="new-todo"
      placeholder="What needs to be done?"
      type="text"
      v-model="newTodo"
    >
    <TodosList />
    <TodoFilters />
    <div class="Todo-Footer">
      <TodoCheckAll @checkAllTodos="checkAllTodos" />
      <TodoRemaining />
      <TodoClearCompleted />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { TodosList, TodoFilters, TodoRemaining, TodoClearCompleted, TodoCheckAll } from '@/components';

export default {
  name: 'TodoList',
  components: {
    TodosList,
    TodoFilters,
    TodoRemaining,
    TodoClearCompleted,
    TodoCheckAll,
  },
  data() {
    return {
      newTodo: '',
    };
  },
  computed: {
    ...mapGetters('todos', {
      filteredTodos: 'filteredTodos',
    }),
  },
  methods: {
    ...mapActions('todos', [
      'addTodo',
    ]),
    handleAddTodo() {
      this.addTodo({ newTodo: this.newTodo });
      this.newTodo = '';
    },
    checkAllTodos: () => {},
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

  .Todo-Footer {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
  }
</style>
