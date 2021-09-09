<template>
<div>
  <i class="el-icon-edit"></i>
  <br>
  <br>
  <i class="el-icon-share"></i>
  <br>
  <br>
  <i class="el-icon-delete"></i>
  <br>
  <br>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
</div>
</template>

<script>
export default {  //配置对象与Vue写法一致
  data() {   //data必须写函数
    return {
      msg: 'Hello Vue Components'
    }
  }
}
</script>

<style>
i {
  font-size: 50px
}
</style>
