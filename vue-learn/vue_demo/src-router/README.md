## Vue router notes
### 1.route link 传递参数类型
这些参数会保存在$route ‘当前路由中’：
- param
    标签 /id
    path :id

```html
        <router-link :to="`/home/messages/detail/${message.id}`">{{message.title}}</router-link>

        path:'/home/messages/detail/:id'

```

- query
    标签 ?id=xxx
    path  不需写参数

```html
        <router-link :to="`/home/messages/detail?id={message.id}`">{{message.title}}</router-link>

        path:'/home/messages/detail'
```

### 2.route view 传递参数

在route-view标签中添加参数，' : ' 为变量，不加为常量；

子组件使用props接收

### 3.目录结构
router中定义路由器，路由器中定义路由；

views中定义组件；

### 4.标签作用
router-link: 路由到具体的组件；

router-view: 页面显示；

### 5.$route属性
当前路由对象：
```text
**1.$route.path**
      字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
**2.$route.params**
      一个 key/value 对象，包含了 动态片段 和 全匹配片段，
      如果没有路由参数，就是一个空对象。
**3.$route.query**
      一个 key/value 对象，表示 URL 查询参数。
      例如，对于路径 /foo?user=1，则有 $route.query.user == 1，
      如果没有查询参数，则是个空对象。
**4.$route.hash**
      当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。锚点
**5.$route.fullPath**
      完成解析后的 URL，包含查询参数和 hash 的完整路径。
**6.$route.matched**
      数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
**7.$route.name    当前路径名字**
**8.$route.meta  路由元信息
```
可监视路由对象：
```javascript
  watch: {
    $route: function (value) {   //监视路由的值param发生了改变
      const id = this.$route.params.id * 1    //确保id为整数
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }
  }
```

### 6.$router
全局路由实例，有push , replace, go方法。

```javascript
// 字符串
      this.$router.push('home')
// 对象
      this.$router.push({ path: 'home' })
// 命名的路由
      this.$router.push({ name: 'user', params: { userId: 123 }})
// 带查询参数，变成 /register?plan=123
      this.$router.push({ path: 'register', query: { plan: '123' }})
```
push方法其实和<router-link :to="...">是等同的。

```javascript
// 页面路由跳转 前进或者后退
this.$router.go(-1) // 后退
```

```javascript
//push方法会向 history 栈添加一个新的记录，而replace方法是替换当前的页面，
//不会向 history 栈添加一个新的记录
<router-link to="/05" replace>05</router-link>

// 一般使用replace来做404页面
this.$router.replace('/')
```

