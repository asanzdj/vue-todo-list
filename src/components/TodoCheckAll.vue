<template>
  <label class=".CheckAll">
    <input type="checkbox" :checked="checked" @change="handleChange"/>
    <span>Check all</span>
  </label>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoCheckAll',
  methods: {
    handleChange() {
      this.$emit('checkAllTodos');
    },
  },
  computed: {
    ...mapGetters('todo', {
      anyRemaining: 'anyRemaining',
    }),
    checked: () => !this.anyRemaining,
  },
};
</script>

<style lang="scss">
  .CheckAll {
    vertical-align: center;
  }
</style>
