
## Vue: vuex todolist notes

### 1.creatElement用法
```javascript
render: h => h(App)

render(createElement)
{
  return createElement(App)
}
```
h是creatElement的缩写，该方法为vue内部方法，
生成HTML DOM节点，等同于原先的components+template
```javascript
new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
```

### 2.bug记录

#### 2.1 completedSize is not a function
```javascript
  //全选、全不选--错误加了小括号
selectAll(state, getters)
{
  return getters.completedSize() === getters.totalSize && getters.totalSize > 0
}

  //全选、全不选--正确
selectAll(state, getters)
{
  return getters.completedSize === getters.totalSize && getters.totalSize > 0
}
```
