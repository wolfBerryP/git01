<template>
  <mt-button @click="handleClick" type="danger" size="normal">Test</mt-button>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  methods: {
    handleClick(){
      Toast({
        message: '操作成功',
        iconClass: 'icon icon-success'
      });
    }
  }
}
</script>

<style>
</style>
