<template>
  <div class="TodoFilters">
    <Button
      :color="filter.color"
      :id="filter.id"
      :key="filter.id"
      :label="filter.label"
      :value="filter.id"
      v-for="filter in filters"
      :active="active === filter.value"
      @onClick="setFilter"
    />
  </div>
</template>

<script>
import { validateFilter } from '@/utils/validators';

import Button from './Button';

export default {
  name: 'TodoFilters',
  components: {
    Button,
  },
  data() {
    return {
      filters: [
        {
          id: 'ALL',
          label: 'All',
          value: 'ALL',
          color: 'grey',
        },
        {
          id: 'ACTIVE',
          label: 'Active',
          value: 'ACTIVE',
          color: 'grey',
        },
        {
          id: 'COMPLETED',
          label: 'Completed',
          value: 'COMPLETED',
          color: 'grey',
        },
      ],
    };
  },
  methods: {
    setFilter(value) {
      this.$emit('setFilter', value);
    },
  },
  props: {
    active: {
      default: 'ALL',
      required: false,
      type: String,
      validator: item => validateFilter(item),
    },
  },
};
</script>

<style lang="scss">
.TodoFilters {}
</style>
