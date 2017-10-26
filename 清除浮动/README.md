# 清除浮动的方法

HTML:
```
<div class="parent">
    <div class="child"></div>
</div>
```

## 1、添加一个空的div标签来清除浮动

HTML:
```
<div class="parent">
    <div class="child"></div>
    <div class="clear"></div>
</div>
```

CSS:
```
.parent{
    background:gray;
}
.child{
    float:left;
    width:200px;
    height:100px;
    background:pink;
}
.clear{
    clear:both;
}
```

### 关键代码

> `<div class="clear"></div>` 和 `.clear{clear:both;}`；

> 代码见`demo1.html`；

## 2、利用BFC（块级格式化上下文）原理来清除浮动

CSS:
```
.parent{
    overflow:hidden;
    background:gray;
}
.child{
    float:left;
    width:200px;
    height:100px;
    background:pink;
}
```

### 关键代码

> `.parent{overflow:hidden;}`；

> 代码见`demo2.html`；

## 3、利用伪类来清除浮动

CSS:
```
.parent{
    background:gray;
}
.parent::after{
    content:"";
    display:block;
    clear:both;
}
.child{
    float:left;
    width:200px;
    height:100px;
    background:pink;
}
```

### 关键代码

> `.parent::after{content:""; display:block; clear:both;}`；

> 代码见`demo3.html`；

## 3、利用将父元素浮动来清除浮动

CSS:
```
.parent{
    float:left;
    background:gray;
}
.child{
    float:left;
    width:200px;
    height:100px;
    background:pink;
}
```

### 关键代码

> `.parent{float:left;}`；

> 代码见`demo4.html`；