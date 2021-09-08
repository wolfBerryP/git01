<template>
  <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="item in dataList" :label="item" :key="item">{{item}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  //配置对象与Vue写法一致
  data() {
    //data必须写函数
    return {
      checkList: ["cccc"],
      dataList:['人员管理', '订单管理', 'cccc']
    };
  },
};
</script>

<style>
</style>
