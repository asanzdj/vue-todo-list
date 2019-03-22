<template>
  <label>
    <span v-if="label">{{ label }}</span>
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      @keyup.enter="onEnter"
      class="input"
      v-model="inputValue"
    />
  </label>
</template>

<script>
export default {
  name: 'Input',
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('onChange', value);
      },
    },
  },
  props: {
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    onEnter: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
  .input {
    width: 100%;
    padding: 1rem 1rem;
    font-size: 1.2rem;
    margin-bottom: 1.6rem;

    &:focus {
      outline: none;
    }
  }
</style>
