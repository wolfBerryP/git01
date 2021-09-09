<template>
  <el-checkbox-group v-model="checkList" size=30px>
    <el-checkbox
      v-for="item in permList"
      :label="item.permCode"
      :key="item.permCode"
      class="checkbox"
      >{{ item.permName }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script>
export default {
  //配置对象与Vue写法一致
  data() {
    //data必须写函数
    return {
      checkList: [],
      permList: [
        {permCode: "operator:manage", permName: "人员管理"},
        {permCode: "order:manage", permName: "订单管理"}
      ],
    };
  },

  methods: {
    delPerm() {
      alert("1111111");
    },
  },
};
</script>

<style>
  label{
    display: flex;
    align-items: center;
  }
</style>
