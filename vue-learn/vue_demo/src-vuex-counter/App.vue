<template>
  <div>
    <p>click {{ count }} times ,count is{{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      evenOrOdd: 'evenOrOdd2',   //回调函数名和action名不一致时，需用对象做映射
    }),
    ...mapState(['count'])  //名称一样，等于$store.state.count
  },

  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']) // 等于 function(){$store.actions.method}
  }
}
</script>

<style>
</style>
