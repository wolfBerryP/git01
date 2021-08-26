<template>
  <div>
    <h2 v-if="initView">请输入用户进行搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="error">{{ error }}</h2>
    <div class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import axios from "axios";

export default {
  data() {
    return {
      initView: true,
      loading: false,
      users: null,
      error: ''
    }
  },

  mounted() {
    pubsub.subscribe('search', (msg, searchName) => {
      const url = 'https://api.github.com/search/users?q=' + searchName
      //加载中，更新状态
      this.initView = false
      this.loading = true
      this.users= null
      this.error= ''
      //发送请求
      axios.get(url).then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          name: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url
        }))
        //成功，更新状态
        this.loading = false
        this.users = users
      }).catch(error => {
        //失败，更新状态
        this.loading= false
        this.error= '请求失败'
      })

    })
  }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
