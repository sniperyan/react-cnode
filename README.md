# react-cnode-v2
cnode社区版第二版本
基于webpack + react + react-router + redux 的React版cnode社区
### 下载
```
  git clone https://github.com/sniperyan/react-cnode-v2.git
  react-cnode-v2
  npm install (安装依赖模块)
  npm install webpack -g (没有安装webpack的需要安装)
```
### 运行
```
  npm run dev (开发版本访问：http://localhost:8080/)
  npm run prod （发布生产版本）

```
### 功能
```
  1.登录登出
  2.列表页滑动加载
  3.查看帖子
  4.回复帖子
  5.个人中心
  6.我的消息
```
### react-router按需加载配置方法
```
这个版本做了按需加载，另外稍微变化了点目录结构，结构更加清晰
1.不做按需加载的route 后面是component，做按需加载，后面是getComponent，
然后是webpack底层的require函数，该函数不能封装，必须这么写
2.不做按需加载的container层最后是es6导出语法，export default...，做了按需加载之后，
container最后的导出变为类似于 module.exports = connect(mapStateToProps, mapDispatchToProps)(ListApp)，
如果还写es6那种导出方法，页面不会报错，加载完成后将不会渲染！！
```
### 总结
```
1.通过按需加载，webpack的UglifyJsPlugin插件对代码进行压缩做了首屏优化
2.使用flex布局，非常爽
3.es6箭头函数，解构赋值开发起来速度飞快
4.我的ajax用的是axios控件，每次做ajax都会触发加载状态的变化，我对axios又做了一层封装，这样我可以专注于业务开发，
代码更优雅
```
### 未完成部分
```
1.components/common/confirmBox里封装了一个确认取消提示框，添加了css3动画，后面继续封装一些常用的UI组件
2.浏览器端性能看不出来，后面打包到坑爹的安卓上去试试，做下性能调优
```
