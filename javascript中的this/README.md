# javascript中的this学习笔记

>javascript中this的指向（取值）取决于调用模式，调用模式这个词听起来可能比较玄乎，下面将从javascript常见的四种调用模式来讲一下this的指向（取值）。

## 1、函数调用模式
这种模式是我们在写js中最常见的一种调用方式，以函数a()为例，先定义，然后再调用它，此时this指向window。
```
function a(){
    console.log(this);
}
a(); // window
```

`代码见demo1`

## 2、对象方法调用模式
js中一切皆对象，我们可以为对象定义（设置）属性和方法，然后调用对象的方法，此时this指向该方法的对象。
```
var a = {};  //定义一个对象a
a.name = 'hello'; //定义a的name属性
a.getName = function(){
    console.log(this.name);
} //定义a的getName方法
a.getName();  // hello
```

`代码见demo2`

## 3、构造函数调用模式
在写js时，有时会需要重复多次的创建一个相类似的对象，为了减少相似代码重复以及避免出错，我们会通过一个构造函数来将相类似的代码放入到一个函数中，然后具体到某个对象时，可以通过new操作符实例化（就是将构造函数稍作修改，为我所用）一个对象。使用构造函数调用时，this指向实例化的对象
```
function A(name){
    this.name = name;  //定义构造函数的name属性
    this.getName = function(){
        console.log(this.name);
    }  //定义构造函数的getName方法
}
var example1 = new A('Hello');
example1.getName(); //Hello
var example2 = new A('John');
example2.getName(); //John
```

`代码见demo3`

## 4、apply/call方法调用模式
js中apply()和call()方法的一个作用就是改变this的指向，它们将this指向到其方法中的第一个参数。
```
var example1 = {name: 'Hello'};
var example2 = {name: 'John'};
function a(){
    console.log(this.name);
}
a.call(example1); //Hello
a.call(example2); //John
a.apply(example1); //Hello
a.apply(example2); //John
```

`代码见demo4`

## 参考文献：
[JavaScript中的this](https://segmentfault.com/a/1190000000638443)


2017.09.27