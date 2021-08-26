<template>
  <div class="todo-footer">
    <label>
      <!-- checkbox,选中则传值true  -->
      <!--      <input type="checkbox" v-model="isAllCheck"/>-->
      <slot name="checkAll"></slot>
    </label>
    <!--          <span>已完成{{ computeSize }}/ 全部{{ todos.length }}</span>-->
    <slot name="computeNum"></slot>
    <!--    <button class="btn btn-danger" v-show="computeSize" @click="deleteCompleteTodos">清除已完成任务</button>-->
    <slot name="deleteMission"></slot>
  </div>
</template>

<script>
export default {}
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
