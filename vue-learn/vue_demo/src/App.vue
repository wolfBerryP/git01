<template>
  <div class="todo-container">
    <h2>todolist:</h2>
    <div class="todo-wrap">
      <!--        <TodoHeader @addTodos="addTodos"/>-->
      <TodoHeader ref="header"/>
      <TodoMain :todos="todos"/>
      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="computeNum">已完成{{ computeSize }}/ 全部{{ todos.length }}</span>
        <button slot="deleteMission" class="btn btn-danger" v-show="computeSize"
                @click="deleteCompleteTodos">清除已完成任务
        </button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";
import PubSub from "pubsub-js";
import storageUtil from "./utils/storageUtil";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },

  data() {
    return {
      // todos: JSON.parse( window.localStorage.getItem("todos_key") || '[]')
      todos: storageUtil.readTodos()
    }
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
  },

  watch: {
    todos: {
      deep: true,
      // handler(value){
      //   window.localStorage.setItem("todos_key", JSON.stringify(value))
      // }
      handler: storageUtil.saveTodos   //handler需要一个函数
    }
  },

  methods: {
    addTodos(val) {
      this.todos.unshift(val)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    //删除所有选中的计划,即用过滤器留下complete为false的
    deleteCompleteTodos() {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选/ 全不选
    selectAllTodos(check) {
      this.todos.forEach(todo => todo.complete = check)
    }
  },

  mounted() {
    // window.localStorage.setItem("todos_key",'[]')
    //1.初始化时,绑定监听 2.$refs获取标签对象
    this.$refs.header.$on('addTodos', this.addTodos)

    //使用pubsub订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
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
