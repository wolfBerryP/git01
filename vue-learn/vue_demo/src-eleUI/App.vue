<template>
  <div>
    <!--3.使用组件-->
    <Checkbox />
  </div>
</template>

<script>
// 1.引入组件
import Checkbox from "./components/Checkbox.vue";

export default {
  // 2.映射标签
  components: {
    Checkbox,
  },
};
</script>

<style>
.logo {
  width: 400px;
  height: 500px;
}
</style>
