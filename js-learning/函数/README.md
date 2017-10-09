# 函数

>在javascript中，函数就是其中的一段代码，定义一次，可以被多次调用、执行。javascript中的函数也是对象，与其他对象一样，都可以进行操作（设置/访问属性、方法）和传递。

## 函数的组成

* 函数名+参数列表+函数体。

```
function add(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b
    }else{
        return 0
    }
}
add(1, 2); //3
```

* 对于一般的函数，其返回值依赖于`return`语句，如果函数中没有`return`语句，则调用函数并执行完后将返回`undefined`。 `demo1.html`

```
//有return
function add1(a,b){
    return a+b;
}
add1(1,2); //3

//没有return
function add2(a,b){
    a+b;
}
add2(1,2); //undefined
```

* 对于构造函数，一般不需要`return`语句，默认是将`this`作为返回值。如果构造函数中有`return`语句且`return`之后为基本类型，也是将`this`作为返回值。如果构造函数中有`return`语句且`return`之后为对象，则将该对象作为返回值。 `demo9.html`

```
//构造函数中没有return
function F1(){
    this.a = 1;
    console.log(this);//F1
}
var f1 = new F1();
console.log(f1.a);//1

//构造函数中return对象
function F2(){
    this.a = 1;
    return {a:2}
}
var f2 = new F2();
console.log(f2.a); //2

//构造函数中return基本数据类型
function F3(){
    this.a = 1;
    console.log(this);//F1
    return 2;
}
var f3 = new F3();
console.log(f3.a);//1
```

## 函数创建方式

* 函数声明

```
function add(a, b){
    a = +a;
    b = +b;
    if(isNaN(a)||isNaN(b)){
        return
    }
    return a+b
}
```

* 函数表达式

```
//第一种：函数变量
var add = function(a, b){
    ......
};

//第二种：立即自执行函数
(fucntion(){
    ......
    })()

//第三种：将函数作为返回值
return function(){
    ......
}

//第四种：命名函数表达式（很少用）
var add = function f1(a, b){
    ......
}
```

* 函数构造器（Function）（不常见）

```
var func1 = new Function('a', 'b', 'console.log(a+b)');
func1(1,2); //3

var func2 = Function('a', 'b', 'console.log(a+b)');
func2(1,2); //3
```

>函数声明和变量声明会被前置（会被提前），而函数表达式不会被提前。`demo2.html`

>在Function构造的函数中，其内部的变量属于局部变量，外部不可以访问到。`demo3.html`

>一般的函数是可以读取到其外部的局部变量，但是利用Function构造的函数可以读取到全局变量，但是读取不到其外部的局部变量。 `demo3.html`

|    |函数声明|函数表达式|函数构造器|
|------|------|------|------|
|前置|yes|    |    |
|允许匿名|    |yes|yes|
|立即自执行调用|    |yes|yes|
|在定义函数的作用域通过函数名访问|yes|    |   |
|没有函数名|    |    |yes|

## this

* 在浏览器中，全局下的this就等于window；在node.js中，全局的this就等于global；

`demo4.html`

* 一般函数下的this，指向的是window；但是在严格模式下，this指向的是undefined；

`demo5.html`

* 对象方法函数中的this指向该对象；

`demo6.html`

* 对象原型链上的this指向调用它的实例；

`demo7.html`

* get/set方法中的this指向get/set方法所在的对象；

* 构造函数中的this，this指向的是构造函数。如果构造函数中没有`return`或者`return`之后为基本数据类型，则实例化的对象指向构造函数；如果构造函数中`return`对象，那么实例化的对象就是返回的对象。

`demo8.html`

* call/apply方法中的this指向call/apply方法中的第一个参数；

`demo9.html`

* bind方法中的this指向bind中的对象参数（第一个参数）；

`demo10.html`

## arguments

* arguments是函数内部管理实参的对象，类似于数组，但不是数组，因为arguments（arguments.prototype）原型链上没有Array.prototype。

* 函数定义的实参，可以通过arguments[index]（index为实参的顺序指数，从0开始）来改变实参的值（严格模式下是不能够改变的）；函数未定义的实参，利用arguments[index]改变实参的值是无效的。

`demo11.html`

## apply/call方法

* apply/call方法中，this指向的是第一个参数；当第一个参数为数值时，会转换为Number；当第一个参数为布尔值时，会转换为Boolean；当第一参数为null和undefined时，在费严格模式下，会转换为Window，在严格模式下，将会转换为null和undefined。

`demo12.html`

## bind方法

* bind方法的一个作用（绑定this）是将this指向bind中的对象参数（第一个参数）

`demo13.html`

* bind方法的另一个作用是柯里化（currying）。当函数中有多个形参且实际操作过程中有些形参值是不变的，此时，我们可以利用bind的柯里化将不变的形参值绑定，每次调用函数时，只需输入变化的形参。

`dmeo14.html`

* bind与new

`demo15.html`



