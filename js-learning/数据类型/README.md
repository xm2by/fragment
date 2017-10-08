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

* typeof ——适合基本类型和函数判断，遇到null失效

* instanceof ——适合自定义对象，也可以检测原生对象，再不用的iframe和window间检测时失效。
obj instanceof Object

* Object.prototype.toString ——通过{}.toString拿到，适合内置对象和基元类型，遇到null和undefined失效（IE6/7/8返回[object Object]）

* constructor

* duck type 
