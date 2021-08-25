<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)"
       :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deletePlan">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  props : {
    index: Number,
    todo: Object,
  },
  data(){
    return {
      isShow: false,
      bgColor: 'white'
    }
  },
  methods: {
    handleEnter(val){
      console.log(val)
      if(val){
        this.isShow= true
        this.bgColor= 'gray'
      }else{
        this.isShow= false
        this.bgColor= 'white'
      }
    },
    deletePlan(){
      const index = this.index
      const todo = this.todo
      if(window.confirm('是否删除 '+todo.title +' 这项计划？')){
       // this.deleteTodo(index)
        //使用pubsub发布消息
        PubSub.publish('deleteTodo', index)
      }
    }
  }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
