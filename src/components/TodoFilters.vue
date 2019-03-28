<template>
  <div class="TodoFilters">
    <Button
      v-for="filter in filters"
      :color="filter.color"
      :id="filter.id"
      :key="filter.id"
      :label="filter.label"
      :active="activeFilter === filter.id"
      @onClick="handleClick(filter.id)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Button from './Button';

export default {
  name: 'TodoFilters',
  components: {
    Button,
  },
  computed: {
    ...mapState({
      activeFilter: state => state.todos.filter,
      filters: state => state.todos.filters,
    }),
  },
  methods: {
    ...mapActions('todos', [
      'updateFilter',
    ]),
    handleClick(id) {
      this.updateFilter({ newFilter: id });
    },
  },
};
</script>

