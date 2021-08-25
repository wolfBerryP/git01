<template>
  <div class="todo-footer">
    <label>
      <!-- checkbox,选中则传值true  -->
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{ computeSize }}</span> / 全部{{ todos.length }}
        </span>
    <button class="btn btn-danger" v-show="computeSize" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    deleteCompleteTodos: Function,
    selectAllTodos: Function
  },
  computed: {
    computeSize() {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    },

    isAllCheck: {
      get() {
        return this.computeSize === this.todos.length && this.computeSize > 0
      },
      set(value) {
        console.log('selectAllTodos val is ==》' + value)
        this.selectAllTodos(value)
      }
    }
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
