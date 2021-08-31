<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem';
import {mapState} from 'vuex'
import storageUtil from "../utils/storageUtil";

export default {
  components: {
    TodoItem
  },

  computed: {
    ...mapState(['todos'])
  },

  watch: {
    todos: {
      deep: true,  //深度监视一旦状态发生改变就存
      handler: storageUtil.saveTodos
    }
  }
}
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

