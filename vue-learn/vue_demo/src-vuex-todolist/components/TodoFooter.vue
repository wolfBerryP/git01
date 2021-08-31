<template>
  <div class="todo-footer">
    <label>
      <!-- checkbox,选中则传值true  -->
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{ completedSize }}</span> / 全部{{ totalSize }}
    </span>
    <button class="btn btn-danger" v-show="completedSize" @click="deleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['totalSize', 'completedSize']),

    isAllCheck: {
      get() {
        return this.$store.getters.selectAll
      },
      set(check) {
        this.$store.dispatch('updateAll', check)
      }
    }
  },
  methods: mapActions(['deleteCompleted'])
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
