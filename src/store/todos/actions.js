import generateTodo from '@/utils/generateTodo';

import { SET_FILTER, SET_TODOS } from './mutationTypes';

export default {
  addTodo: ({ commit, state }, { newTodo }) => {
    const newTodos = [...state.todos, generateTodo(newTodo)];

    commit(SET_TODOS, { todos: newTodos });
  },
  clearCompleted: ({ commit, state }) => {
    const newTodos = state.filter(todo => !todo.completed);
    commit(SET_TODOS, { todos: newTodos });
  },
  updateFilter: ({ commit }, payload) => {
    commit(SET_FILTER, payload);
  },
};
