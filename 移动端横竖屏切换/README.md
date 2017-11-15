# 移动端横竖屏切换

### 利用window.orientation属性和orientationchange事件来切换横竖屏：

**切换原理：**
window.orientation = 0 表示竖屏；
window.orientation = 90或-90 表示横屏；
orientationchange事件可以监听到window.orientation属性值的变化；

关键代码：

```
//横竖屏处理函数
function handleOrientationchange(){
    if(window.orientation == 90 || window.orientation == -90){
        //横屏状态下的样式或处理
    }else{
        //竖屏状态下的样式或处理
    }
}

//orientationchange事件监听
window.addEventListener('orientationchange', handleOrientationchange, false);
```

> 在PC端浏览器中（即使在浏览器上模拟手机模式），window.orientation的值为undefined。

### 利用客户端宽高的比较来切换横竖屏：

**切换原理：**
竖屏状态下，客户端的宽小于高；
横屏状态下，客户端的宽大于高；

关键代码：

```
//横竖屏处理函数
function handleOrientationchange(){
    if(clientWidth < clientHeight){
        //竖屏状态下的样式或处理
    }else{
        //横屏状态下的样式或处理
    }
}

//resize事件监听
window.addEventListener('resize', handleOrientationchange, false);
```

### 总结：

在实际开发过程中一些低版本的浏览器或者PC端会不支持window.orientation属性和orientationchange事件，此时就需要利用客户端宽高的比较来进行兼容。具体例子见一下demo，该demo在横屏时显示一个颜色为蓝色的div，在竖屏时显示一个颜色为红色的div。

`Demo`:point_right:[演示地址](https://mxxumin.github.io/fragment/%E8%8E%B7%E5%8F%96%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E5%AE%BD%E9%AB%98/demo1/index.html):point_left:`别忘了这是移动端的页面哦！！！`

### 参考文献：

[使用JavaScript判断手机的横竖屏](http://blog.csdn.net/mapbar_front/article/details/78046445)
[Mobile Web开发基础之四————处理设备的横竖屏](http://blessdyb.iteye.com/blog/1537076)
