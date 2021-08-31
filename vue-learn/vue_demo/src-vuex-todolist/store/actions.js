/**
 * 组件调用，调用mutation的对象
 */
import {ADD_TODO, DELETE_COMPLETED, DELETE_TODO, UPDATE_ALL, READ_TODOS} from "./mutation-types";
import storageUtil from "../utils/storageUtil";
export default {

  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})  //参数需以对象形式传入
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  updateAll({commit}, check) {
    commit(UPDATE_ALL, {check})
  },

  deleteCompleted({commit}) {
    commit(DELETE_COMPLETED)
  },

  readTodos({commit}) {
    setTimeout(() => {
      const todos = storageUtil.readTodos();
      commit(READ_TODOS, {todos})
    }, 1000)
  }
}
