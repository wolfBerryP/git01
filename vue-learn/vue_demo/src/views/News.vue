<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArray" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newsArray: ['news01', 'news02', 'news03', 'news04', 'news05']
    }
  }
}
</script>

<style>
</style>
