<template>
  <p class="Remaining">{{remainingTodos}} items left</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoRemaining',
  computed: {
    ...mapGetters('todos', {
      remainingTodos: 'remaining',
    }),
  },
};
</script>

<style lang="scss">
  .Remaining {
    font-size: 1.3rem;
  }
</style>
