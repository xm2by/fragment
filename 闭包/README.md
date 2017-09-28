# 闭包

>

## 1、什么是闭包

1、闭包就是能够读取其他函数内部变量的函数。
2、在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包也可以理解为“定义在函数内部的函数”。

闭包例子：
```
function f1(){
    var a = 100;
    function f2(){
        alert(a);
    }
    return f2;
}
var res = f1();
res();  //100
```

## 2、闭包的原理

## 3、闭包的实现

## 4、闭包的作用
1、读取函数内部的变量。
2、将函数内部的变量值始终保存在内存中。
3、

例子：
```

```

## 5、参考文献
[学习Javascript闭包（Closure）](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

2017.09.28