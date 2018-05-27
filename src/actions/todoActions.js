import { GET_TODOS, ADD_TODO, TOGGLE_TODO } from './actionTypes';
import axios from 'axios';

export const getTodos = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(data => dispatch({
    type: GET_TODOS,
    payload: data.data
  }))
}

export const addTodo = (newTodo) => dispatch => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: newTodo.item,
    completed: newTodo.completed
  })
  .then(data => dispatch({
    type: ADD_TODO,
    payload: data.data
  }))
}

export const toggleTodo = (id) => dispatch => ({
  type: TOGGLE_TODO,
  payload: id
})