<template>
  <ul>
    <li>id:{{ messageDetail.id }}</li>
    <li>title:{{ messageDetail.title }}</li>
    <li>content:{{ messageDetail.content }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      messageDetail: ''
    }
  },

  mounted() {
    setTimeout(() => {
      const allMessageDetails = [
        {
          id: 1,
          title: 'message001',
          content: 'message content 001'
        },
        {
          id: 3,
          title: 'message003',
          content: 'message content 003'
        },
        {
          id: 5,
          title: 'message005',
          content: 'message content 005'
        }
      ]
      this.allMessageDetails = allMessageDetails
      const id = this.$route.params.id * 1    //确保id为整数
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }, 1000)
  },

  watch: {
    $route: function (value) {   //监视路由的值param发生了改变
      const id = this.$route.params.id * 1    //确保id为整数
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }
  }

}
</script>

<style>

</style>
