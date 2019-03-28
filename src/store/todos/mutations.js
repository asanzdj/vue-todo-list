import { SET_FILTER, SET_TODOS } from './mutationTypes';

export default {
  [SET_FILTER]: (state, { newFilter }) => {
    state.filter = newFilter;
  },
  [SET_TODOS]: (state, { todos }) => {
    state.todos = todos;
  },
};
