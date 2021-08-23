//自定义插件，匿名函数
(function (){
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            console.log('自定义插件全局方法-myGlobalMethod()')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el, binding){
                el.innerHTML = binding.value.toUpperCase()
        })

        // 3. 添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('自定义组件实例方法-$myMethod()')
        }
    }
    window.MyPlugin = MyPlugin
})()