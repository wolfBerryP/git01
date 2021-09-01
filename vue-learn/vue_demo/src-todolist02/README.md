## demo-todolist02

1.使用PubSub进行属性的发布订阅

2.使用$on将方法绑定到组件,$emit在组件中调用

```javascript
//App.vue
mounted()
{
  //1.初始化时,绑定监听 2.$refs获取标签对象
  this.$refs.header.$on('addTodos', this.addTodos)

  //使用pubsub订阅消息
  PubSub.subscribe('deleteTodo', (msg, index) => {
    this.deleteTodo(index)
  })
}

//TodoHeader.vue
//3.将对象添加到todos数组
this.$emit('addTodos', todo)

//TodoItem.vue
//引入外部组件
import PubSub from 'pubsub-js'

deletePlan()
{
  const index = this.index
  const todo = this.todo
  if (window.confirm('是否删除 ' + todo.title + ' 这项计划？')) {
    //使用pubsub发布消息
    PubSub.publish('deleteTodo', index)
  }
}

```

3.slot插槽
使用slot标签定义的插槽，是一个可以复用的组件，可以重复定义为input,span,button...根据name进行对应。
```javascript
//TodoFooter.vue
<slot name="checkAll"></slot>

//App.vue
<TodoFooter>
  <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
</TodoFooter>
```
