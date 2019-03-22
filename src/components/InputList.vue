<template>
  <div class="List">
    <div v-for="item in items" :key="item.id" class="ListItem">
      <div class="ListItem-display">
        <p v-if="!item.editing" @click="onClick(item.id)">{{ item.text }}</p>
        <Input
          id="item.text"
          name="input.text"
          type="text"
          v-if="item.editing"
          value="item.text"
        />
      </div>
      <span
        @click="onRemove(item.id)"
        class="ListItem-action ListItem-remove"
        v-if="!item.editing"
      >
        &times;
      </span>
      <span
        @click="onEdit(item.id)"
        class="ListItem-action ListItem-edit"
        v-if="item.editing"
      >
        &#10003;
      </span>
    </div>
  </div>
    <!--<Checkbox id="rere" :model="tt" value="tt" label="Label"></Checkbox>-->
</template>

<script>
import Checkbox from './Checkbox';
import Input from './Input';

export default {
  name: 'InputList',
  data() {
    return {
      tt: 'rere',
    };
  },
  components: {
    Checkbox,
    Input,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    onRemove: {
      type: Function,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
    onEdit: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};

</script>

<style lang="scss">
  .List {}
  .ListItem {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: left;

    &-display {
      flex-grow: 1;
      margin-right: 1rem;

      p {
        cursor: pointer;
        font-size: 1.2rem;
      }
    }

    &-action {
      cursor: pointer;
      font-size: 2.5rem;
    }

    &-remove {
      color: red;

      &:hover {
        color: crimson;
      }
    }

    &-edit {
      color: lightgreen;
      margin-bottom: 1rem;

      &_hover {
        color: darkcyan;
      }
    }
  }
</style>
