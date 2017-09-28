# 构造函数

>在js中经常会碰到构造函数，到底什么是构造函数呢？为什么要使用构造函数呢？它与普通函数有什么区别呢？那么构造函数的prototype属性又是什么呢？

## 1、什么是构造函数？ 构造函数与普通函数的区别？
构造函数其实就是一个普通函数，但它与普通函数又有所不同，不同之处在于：（1）构造函数内部可以使用`this`变量；（2）构造函数还可以通过`new`运算符生成实例；（3）构造函数不需要用return显式返回值，它的默认返回值是`this`，也就是新的实例对象。

## 2、为什么要使用构造函数？

在js中我们经常会遇到需要创建很多个相类似的对象，并为对象添加属性。如果一个个创建并为每个对象添加属性将是一件很麻烦的事。为了解决这种相似代码重复书写的问题，我们可以将相似的部分提取出来放入到一个函数中，这个函数就是构造函数。所以构造函数的使用可以很好的解决相似代码重复书写的问题。

例子：（不使用构造函数）

```
//对象person1
var person1 = {
    name:'Hello',
    country:'China'
}

console.log(person1.name); //Hello
console.log(person1.country); //China

//对象person2
var person2 = {
    name:'John',
    country:'China'
}

console.log(person2.name); //John
console.log(person2.country); //China
```

`代码见demo1.html`

例子：（使用构造函数）

```
//Person对象的构造函数
function Person(name){
    this.name = name;
    this.country = 'China'
}

// 实例化对象person1
var person1 = new Person('Hello');

console.log(person1.name); //Hello
console.log(person1.country); //China

// 实例化对象person2
var person2 = new Person('John');

console.log(person2.name); //John
console.log(person2.country); //China
```

`代码见demo2.html`

## 3、构造函数的prototype属性

>为什么要为构造函数引入prototype属性？

构造函数通过`new`运算符生成不同的实例对象时，实例对象之间是彼此独立的，无法共享属性和方法。

例子：

```
//Person对象的构造函数
function Person(name){
    this.name = name;
    this.country = 'China';
}

//实例化两个对象
var person1 = new Person('Hello');
var perdon2 = new Person('John');

//这两个实例化对象的country属性是独立的，彼此互不影响
person1.country = 'England';
console.log(person2.country); //China
```

`代码见demo3.html`

为了让不同实例之间能够共享属性和方法，所以引入了prototype属性。prototype属性包含一个对象（以下简称prototype对象），所有实例对象需要共享的属性和方法都可以放在这个对象里面；那些不需要共享的属性和方法就放在构造函数中。

实例对象一旦创建，将自动引用prototype对象的属性和方法。这样每个实例对象的属性和方法就可以分为两类：一类是属于每个实例本身的，一类就是所有实例共享的。

当改动prototype对象中的属性和方法时，所有的实例对应的该属性和方法都会发生改变。

例子：

```
//Person对象的构造函数
function Person(name){
    this.name = name;
}
Person.prototype.country = 'China';

//实例化对象person1和person2
var person1 = new Person('Hello');
console.log(person1.country); //China
var person2 = new Person('John');
console.log(person2.country); //China

//改动构造函数Person的prototype对象的country属性
Person.prototype.country = 'England';
console.log(person1.country); //England
console.log(person2.country); //England
```

`代码见demo4.html`

## 4、参考文献

[Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)

[Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)