<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!--3.使用组件-->
    <HelloWorld/>
  </div>
</template>

<script>
// 1.引入组件
import HelloWorld from './components/HelloWorld'

export default {
  // 2.映射标签
  components: {
    HelloWorld
  }
}
</script>

<style>
.logo {
  width: 400px;
  height: 500px;
}
</style>
