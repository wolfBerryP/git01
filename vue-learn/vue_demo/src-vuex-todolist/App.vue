<template>
    <div class="todo-container">
      <h2>todolist:</h2>
      <div class="todo-wrap">
        <TodoHeader/>
        <TodoMain/>
        <TodoFooter/>
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

  mounted() {
    this.$store.dispatch('readTodos')
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
