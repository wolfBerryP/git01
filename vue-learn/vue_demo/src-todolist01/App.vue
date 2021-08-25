<template>
    <div class="todo-container">
      <h2>todolist:</h2>
      <div class="todo-wrap">
        <TodoHeader :addTodos="addTodos"/>
        <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
      </div>
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data(){
    return {
      todos: JSON.parse( window.localStorage.getItem("todos_key") || '[]')
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value){
        window.localStorage.setItem("todos_key", JSON.stringify(value))
      }
    }
  },
  methods: {
    addTodos(val){
      this.todos.unshift(val)
    },
    deleteTodo(index){
      this.todos.splice(index, 1)
    },
    //删除所有选中的计划,即用过滤器留下complete为false的
    deleteCompleteTodos(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选/ 全不选
    selectAllTodos(check){
      this.todos.forEach(todo => todo.complete= check)
    }
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
