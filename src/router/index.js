import Vue from 'vue';
import Router from 'vue-router';

import TodoList from '@/containers/TodoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo list',
      component: TodoList,
    },
  ],
});
