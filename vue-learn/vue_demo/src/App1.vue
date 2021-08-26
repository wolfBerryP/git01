<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>most star repo is <a :href="repoUrl">{{ repoName }}</a></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      repoUrl: '',
      repoName: ''
    }
  },

  mounted() {
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // this.$http.get(url).then(
    //   response => {
    //     const result = response.data
    //     const mostRepo = result.items[0]
    //     this.repoName = mostRepo.name
    //     this.repoUrl = mostRepo.html_url
    //   },
    //
    //   response => {
    //     alert('请求失败')
    //   }
    // )

    axios.get(url).then(
      response => {
        const result = response.data
        const mostRepo = result.items[0]
        this.repoName = mostRepo.name
        this.repoUrl = mostRepo.html_url
      }).catch(error => {
      alert('请求失败2')
    })

  }
}
</script>

<style>
</style>
