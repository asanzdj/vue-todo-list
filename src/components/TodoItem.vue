<template>
  <div class="TodoItem">
    <div class="TodoItem--left">
      <input type="checkbox" v-model="todo.completed">
      <div
        v-if="!todo.editing"
        @dblclick="editTodo"
        class="TodoItem-label"
        :class="{'TodoItem-label--completed': todo.completed}"
      >
        {{text}}
      </div>
      <input
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        class="TodoItem-edit"
        type="text"
        v-else
        v-model="text"
      >
    </div>
    <div class="TodoItem-remove" @click="removeTodo">
      &times;
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/utils/eventBus';

export default {
  name: 'TodoItem',
  data() {
    return {
      editing: this.todo.editing,
      id: this.todo.id,
      text: this.todo.text,
    };
  },
  methods: {
    removeTodo() {
      EventBus.$emit('removeTodo', this.id);
    },
    editTodo() {
      this.$emit('editTodo', this.todo);
    },
    doneEdit() {
      this.$emit('doneEdit', this.todo);
    },
    cancelEdit() {
      this.$emit('cancelEdit', this.todo);
    },
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .TodoItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 1rem 0;

    &--left {
      align-items: center;
      display: flex;
      flex-grow: 1;
      padding-right: 1.5rem;
    }

    &-edit {
      border: none;
      border-bottom: 1px solid darkcyan;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    &-remove {
      font-size: 2.5rem;
      color: crimson;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }

    &-label {
      &--completed {
        text-decoration: line-through;
      }
    }
  }
</style>
