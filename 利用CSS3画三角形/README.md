# 利用CSS3画三角形

## 利用border-color为transparent来绘制三角形

HTML:
```
<div class="triangle"></div>
```

CSS:
```
.triangle{
    width:0;
    height:0;
    border-width:20px;
    border-style:solid;
    border-color:transparent transparent transparent red;
}
```

> 代码见`demo2.html`