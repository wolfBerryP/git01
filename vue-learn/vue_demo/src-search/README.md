## demo-search(ajax)

1. vue-resource 或 axios方式发送ajax

```javascript
  mounted()
{
  const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
  // this.$http.get(url).then(
  //   response => {
  //     const result = response.data
  //     const mostRepo = result.items[0]
  //     this.repoName = mostRepo.name
  //     this.repoUrl = mostRepo.html_url
  //   },
  //
  //   response => {
  //     alert('请求失败')
  //   }
  // )

  axios.get(url).then(
    response => {
      const result = response.data
      const mostRepo = result.items[0]
      this.repoName = mostRepo.name
      this.repoUrl = mostRepo.html_url
    }).catch(error => {
    alert('请求失败2')
  })

}
```
