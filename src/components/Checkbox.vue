<template>
  <label class="Checkbox">
    <span>{{ label }}</span>
    <input type="checkbox" v-model="model" :value="value" :id="id">
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .Checkbox {}
</style>

<!--id: {-->
<!--type: 'String',-->
<!--required: true,-->
<!--},-->
<!--label: {-->
<!--type: 'String',-->
<!--required: true,-->
<!--},-->
<!--model: {-->
<!--type: 'String',-->
<!--required: true,-->
<!--},-->
<!--value: {-->
<!--type: 'String',-->
<!--required: true,-->
<!--},-->
