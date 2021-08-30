## Vue route notes
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
