/**
 * 存储数据工具类
 * @type {string}
 */

const key = 'todos_key'
export default {
  saveTodos(todos){
    window.localStorage.setItem(key, JSON.stringify(todos))
  },

  readTodos(){
    console.log('key==>'+ key)
    return JSON.parse( window.localStorage.getItem(key) || '[]')
  }

}

