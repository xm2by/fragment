# 清除“display:inline-block”产生的间隙

HTML:
```
<div class="container">
    <div class="item item1"></div>
    <div class="item item2"></div>
</div>
```

## 1、子元素之间的换行去掉，连接在一起书写

HTML:
```
<div class="container">
    <div class="item item1"></div><div class="item item2"></div>
</div>
或者
<div class="container">
    <div class="item item1"></div><!-- 
     --><div class="item item2"></div>
</div>
```

CSS:
```
.item{
    display:inline-block;
    width:50%;
    height:50px;
}
.item1{
    background:pink;
}
.item2{
    background:gray;
}
```

### 关键代码

> 将子元素之间的换行去掉，连接在一起书写；

> 代码见`demo1.html`；

## 2、设置父元素的font-size为0

CSS:
```
.container{
    font-size:0;
}
.item{
    display:inline-block;
    width:50%;
    height:50px;
}
.item1{
    background:pink;
}
.item2{
    background:gray;
}
```

### 关键代码

> `.container{font-size:0;}`；

> 代码见`demo2.html`；

## 3、设置父元素的letter-spacing为-5px（在Chrome浏览器下设置为-5px）

CSS:
```
.container{
    letter-spacing:-5px; /*chrome浏览器下设置为-5px*/
}
.item{
    letter-spacing:0; /*为了让子元素中的内容letter-spacing不受父元素的影响*/
    display:inline-block;
    width:50%;
    height:50px;
}
.item1{
    background:pink;
}
.item2{
    background:gray;
}
```

### 关键代码

> `.container{letter-spacing:-5px;}` 和 `.item{letter-spacing:0;}`；

> 代码见`demo3.html`；

## 4、设置父元素的word-spacing为-5px（在Chrome浏览器下设置为-5px）

CSS:
```
.container{
    word-spacing:-5px; /*chrome浏览器下设置为-5px*/
}
.item{
    word-spacing:0; /*为了让子元素中的内容letter-spacing不受父元素的影响*/
    display:inline-block;
    width:50%;
    height:50px;
}
.item1{
    background:pink;
}
.item2{
    background:gray;
}
```

### 关键代码

> `.container{word-spacing:-5px;}` 和 `.item{word-spacing:0;}`；

> 代码见`demo4.html`；

## 4、设置子元素的margin-left为-5px（在Chrome浏览器下设置为-5px）

CSS:
```
.item{
    display:inline-block;
    width:50%;
    height:50px;
}
.item1{
    background:pink;
}
.item2{
    margin-left:-5px; /*chrome浏览器下设置为-5px*/
    background:gray;
}
```

### 关键代码

> `.item2{margin-left:-5px;}`；

> 代码见`demo5.html`；