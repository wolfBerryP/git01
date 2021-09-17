# 笔记

## 1.集成Mybatis遇到的问题
### MybatisConfig中的classpath

classpath是什么：

加载资源的路径，src/main/java, 以及/src/main/resources 下的文件都会编译到 target/classes中，这个classes即为classpath。

classpath*与classpath的区别：

*的意思就是可以匹配多个文件，而且可以匹配lib包中的文件。


### MybatisConfig
即mybatis集成所需配置，可以直接写在yml文件中。