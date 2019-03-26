<template>
  <button
    :class="{ 'Button--active': active }"
    :id="id"
    @click="handleClick"
    class="Button"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      this.$emit('onClick', this.id);
    },
  },
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: 'grey',
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>


<style lang="scss">
  .Button {
    background: white;
    border-radius: 0.2rem;
    border: 1px solid darkgray;
    cursor: pointer;
    margin: 0 1rem;
    padding: 0.5rem 1rem;

    &:focus {
      outline: none;
    }

    &--active, &:hover {
      background: darkgrey;
      color: white;
    }
  }
</style>
