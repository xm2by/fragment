# 6种数据类型

## 原始数据类型（5种）

* number（数值）

* string（字符串）

* boolean（布尔值）

* null

* undefined

## 对象类型——object（对象）

* 包含function（函数）、array（数组）、Date（时间）等等。

## 隐式类型转换

* +

* -

>可以巧用+、-运算符改变变量的数据类型

* ==

等号两边类型相同，就相当于===；
等号两边类型不同，==会尝试类型转换和比较

```
null == undefined //ture
number == string //==会将string转为number然后比较
boolean == ？ 将布尔值转换为数字然后比较
object == number|string 将对象转换为基本类型
```

## 类型检测

* typeof 
 
适合基本类型和函数判断，遇到null失效
结果返回字符串，有number、string、undefined、boolean、object、function、

`demo3.html`

* instanceof 
 
适合判断对象（可以是自定义对象，也可以是原生对象），它是基于原型链来判断。

在不同的iframe和window间检测时失效。

使用方法：`obj instanceof Object` 左边的参数是对象类型；如果左边参数为基本数据类型，则会报错；右边参数为函数对象、函数构造器。

判断的基本原理：利用左边对象的原型链上是否有右边构造函数或构造对象的原型

`demo4.html`

* Object.prototype.toString 

适合内置对象和基元类型。

使用方法：`Object.prototype.toString.apply(要检测的对象)` `Object.prototype.toString.call(要检测的对象)`。

`demo5.html`

* constructor

* duck type 
