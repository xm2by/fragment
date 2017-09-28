# :nth-child与:nth-of-type

>:nth-child(n)与:nth-of-type(n)都是css3中的伪类选择器，作用相似但又不同。相似之处是都可以用来选择第n个子元素，不同之处在于:nth-of-type(n)对于选择的子元素还有类型的要求。

例子1：

html结构

```
<section>
    <p>我是p标签</p>
    <p>我是p标签</p> <!--希望这个变蓝-->
    <p>我是p标签</p>
</section>
```

css样式

```
p:nth-child(2){
    color:blue;
}
```

[p:nth-child(2)]()

```
p:nth-of-type(2){
    color:blue;
}
```

[p:nth-of-type(2)]()

结果：

两种样式设置结果相同。


例子2：

html结构

```
<section>
    <div>我是div标签</div>
    <p>我是p标签</p>
    <p>我是p标签</p> <!--希望这个变蓝-->
    <p>我是p标签</p>
</section>
```

css样式

```
p:nth-child(2){
    color:blue;
}
```

[p:nth-child(2)]()

```
p:nth-of-type(2){
    color:blue;
}
```

[p:nth-of-type(2)]()

结果：

两种样式设置结果不相同，p:nth-child(2)结果是将第一个p标签字体变蓝，p:nth-of-type(2)结果是将第二个标签字体变蓝。

## 结论：

1、`p:nth-child(n)`是选择第n个子标签，不管子标签是什么类型的标签，就直接从父元素的第一个子标签开始计数；

2、`p:nth-child(n)`等效于`section :nth-child(n)`，注意`section`与`:`之间的空格不能省； [section :nth-child(2)]()

3、`p:nth-child(n)`前面的`p`省略后，将会选择所有子标签；[:nth-child(2)]()

3、`p:nth-of-type(n)`是选择类型为`p`的第n个子标签，从第一个`p`标签开始计数；

>注意：上面例子以`p`标签、`div`标签为子元素，`section`标签为父元素，实际应用中`p`、`div`、`section`标签可以更换为任何html标签。

2017.09.28