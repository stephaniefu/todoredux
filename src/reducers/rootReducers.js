import { GET_TODOS, ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [],
  item: '',
  completed: false
}

const rootReducers = (state=initialState, action) => {
  switch(action.type) {
    case GET_TODOS: 
      return { ...state, todos: action.payload }
    case ADD_TODO:
      return { ...state, item: action.payload }
    case TOGGLE_TODO:
      return state.todos.map(todo => 
        // console.log(todo)
        (todo.id === action.payload) ? {...todo, completed: !todo.completed} : {...todo})
    default: return state;
  }
}

export default rootReducers;