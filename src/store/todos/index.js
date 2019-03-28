import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const initialState = {
  todos: [],
  filter: 'ALL',
  filters: [
    {
      id: 'ALL',
      label: 'All',
    },
    {
      id: 'ACTIVE',
      label: 'Active',
    },
    {
      id: 'COMPLETED',
      label: 'Completed',
    },
  ],
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
