# js单线程

```
var a = 6;
setTimeout(function(){
    var a = 666;
    alert(a); //666
}, 1000)
a = 66;
```

```
var a = 6;
setTimeout(function(){
    alert(a); //undefined
    var a = 666;
}, 1000)
a = 66;
```

```
var a = 6;
setTimeout(function(){
    alert(a); //66
    a = 666;
}, 1000)
a = 66;
```

> setTimeout将要执行的函数添加到队列的后面；

> 用var声明的变量在js执行时会进行变量提升

> 作用域（未用var声明的变量为全局变量）