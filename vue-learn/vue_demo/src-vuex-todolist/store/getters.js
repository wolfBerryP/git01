/**
 * 获取数据的对象
 */
export default {
  //总数
  totalSize(state){
    return state.todos.length
  },

  //完成的数量
  completedSize(state){
    return state.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
  },

  //全选、全不选
  selectAll(state, getters){
    return getters.completedSize === getters.totalSize && getters.totalSize > 0
  }
}
