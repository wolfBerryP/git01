/**
 * actions调用，直接更新state的对象
 */
import {ADD_TODO, DELETE_COMPLETED, DELETE_TODO, UPDATE_ALL,READ_TODOS} from "./mutation-types";

export default {

  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_TODO](state, {index}){
    state.todos.splice(index, 1)
  },

  [UPDATE_ALL] (state, {check}){
    state.todos.forEach(todo => todo.complete = check )
  },

  [DELETE_COMPLETED] (state){
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  [READ_TODOS] (state, {todos}){
    state.todos = todos
  }

}
