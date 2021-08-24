<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {  //配置对象与Vue写法一致
  data(){   //data必须写函数
    return {
      msg: 'Hello Vue Components'
    }
  }
}
</script>

<style>
  .msg{
    color: darkred;
    font-size: 50px;
  }
</style>
