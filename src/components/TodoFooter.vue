<template>
  <div class="Footer">
    <label>
      <span>Check all</span>
      <input type="checkbox" :checked="checked" @change="handleChange"/>
    </label>
    <p>{{remainingTodos}} items left</p>
    <Button
      @onClick="clearCompleted"
      id="clear-completed"
      label="Clear completed"
      v-if="showClearButton"
    />
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Footer',
  components: {
    Button,
  },
  methods: {
    handleChange() {
      this.$emit('checkAllTodos');
    },
    clearCompleted() {
      this.$emit('clearCompleted');
    },
  },
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    showClearButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    remainingTodos: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
  .Footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
  }
</style>
