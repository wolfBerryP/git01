<template>

<div>
  <h2>1.通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</h2>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <br>
  <h2>2.Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</h2>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
  <br>
  <h2>3.预设了五个响应尺寸：xs、sm、md、lg 和 xl。</h2>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" hidden-lg-and-down><div class="grid-content bg-purple"></div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  
</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

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
