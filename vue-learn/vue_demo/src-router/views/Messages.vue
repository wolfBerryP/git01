<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/messages/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
        <button @click="$router.back()">回退</button>
        <button @click="$router.go(-2)">回退2</button>
        <button @click="$router.go(1)">前进</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data(){
    return {
      messages: ''
    }
  },

  mounted() {
    setTimeout(()=>{
      const messages = [
        {
          id: 1,
          title: 'message01'
        },
        {
          id: 3,
          title: 'message03'
        },
        {
          id: 5,
          title: 'message05'
        }
      ]
      this.messages = messages
    },1000)
  },

  methods: {
    pushShow(id){
      //在栈中新增一个路由
      this.$router.push(`/home/messages/detail/${id}`)
    },
    replaceShow(id){
      //在栈中替换当前路由
      this.$router.replace(`/home/messages/detail/${id}`)
    }
  }
}
</script>

<style>

</style>
