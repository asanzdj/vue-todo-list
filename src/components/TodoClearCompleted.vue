<template>
  <Button
    @onClick="handleClick"
    id="clear-completed"
    label="Clear completed"
    :disabled="disabled"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Button from './Button';

export default {
  name: 'TodoClearCompleted',
  components: {
    Button,
  },
  computed: {
    ...mapGetters('todos', {
      showClearButton: 'showClearButton',
    }),
    disabled: () => !this.showClearButton,
  },
  methods: {
    ...mapActions('todos', [
      'clearCompleted',
    ]),
    handleClick() {
      if (!this.disabled) {
        this.clearCompleted();
      }
    },
  },
};
</script>

<style lang="scss">
</style>
