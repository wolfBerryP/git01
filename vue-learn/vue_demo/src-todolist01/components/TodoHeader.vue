<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="planName" @keyup.enter="add"/>
  </div>
</template>

<script>
export default {
  props: {
    addTodos: Function
  },
  data(){
    return {
      planName: ''
    }
  },
  methods : {
    add(){
      //1.非空校验
      const title = this.planName.trim()
      if(!title){
        alert('输入不能为空！')
        return
      }
      //2.生成todo对象
      const todo = {
        title,
        complete: false
      }
      //3.将对象添加到todos数组
      this.addTodos(todo)
      //4.清除输入
      this.planName = ''
    }
  }
}
</script>

<style>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
