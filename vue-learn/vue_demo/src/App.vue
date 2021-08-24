<template>
  <div>
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue';
import List from './components/List.vue'

export default {
  data(){
    return {
      comments: [
        {
          name: '张三',
          content: '法外狂徒'
        },
        {
          name: '汤姆',
          content: '...'
        },
        {
          name: '喜羊羊',
          content: '我走中路'
        }
      ]
    }
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment);
    },
    deleteComment(index){
      this.comments.splice(index,1);
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style>

</style>
