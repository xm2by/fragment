# 水平垂直居中

HTML:
```
<div class="container">
    <div class="item"></div>
</div>
```

## 1、利用父元素相对定位、子元素绝对定位实以及top、right、bottom、left、margin来实现子元素水平垂直居中

CSS:
```
.container{
    position:relative;
    width:500px;
    height:500px;
    background:gray;
}
.item{
    position:absolute;
    width:150px;
    height:200px;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    background:pink;
}
```

### 关键代码：
> 对于父元素：`position:relative;`；

> 对于子元素：`position:absolute;`、`top:0; right:0; bottom:0; left:0;`、 `margin:auto;`；

> 代码见'demo1.html'；

## 2、利用父元素相对定位、子元素绝对定位实以及top、left、margin来实现子元素水平垂直居中

CSS:
```
.container{
    position:relative;
    width:500px;
    height:500px;
    background:gray;
}
.item{
    position:absolute;
    width:150px;
    height:200px;
    top:50%;
    left:50%;
    margin:-100px 0 0 -75px;
    background:pink;
}
```

### 关键代码：
> 对于父元素：`position:relative;`；

> 对于子元素：`position:absolute;`、`top:50%; left:50%;`、 `margin:-100px 0 0 -75px;`；（`margin-left`为负的子元素宽度的一半；`margin-top`为负的子元素高度的一半）；

> 代码见'demo2.html'；

## 3、利用flex布局来实现子元素水平垂直居中

CSS:
```
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    width:500px;
    height:500px;
    background:gray;
}
.item{
    width:150px;
    height:200px;
    background:pink;
}
```

### 关键代码：
> 对于父元素：`display:flex;`、`justify-content:center;`、`align-items:center;`；

> 代码见'demo3.html'；

