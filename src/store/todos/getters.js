const filterMappingConditions = {
  ACTIVE: todo => !todo.completed,
  COMPLETED: todo => todo.completed,
  ALL: todo => todo,
};

export default {
  remaining: state => state.todos.filter(todo => !todo.completed).length,
  anyRemaining: (state, getters) => getters.remaining !== 0,
  filteredTodos: state => state.todos.filter(filterMappingConditions[state.filter]),
  showClearButton: state => state.todos.some(todo => todo.completed),
};
