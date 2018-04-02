var counter = 0;
var popcounter = 10;
export function addTodo(text) {
  if (window.opener == null) {
    return {
      __proto__: null,
      type: 'ADD_TODO',
      id: popcounter++,
      text
    }
  }
  else
  {
    return {
      __proto__: null,
      type: 'ADD_TODO',
      id: counter++,
      text
    }
  }

}

export const setVisibilityFilter = (filter) => ({
  __proto__: null,
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  __proto__: null,
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
