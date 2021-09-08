<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark"></div>
    </el-col>
  </el-row>
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
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
