# 多个相邻按钮切换效果出现边框重叠问题的解决方法

下图所示的是一种常见的切换效果，在实现这种切换效果时，经常会遇到相邻按钮边框重叠的问题（[查看demo]()），有没有好的解决方法呢？

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191130100217838.gif)

所出现的边框重叠问题：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019113010092952.png)
目前，很多优秀的UI组件库都有这种切换效果的组件，通过对他们实现方式的学习，现对边框重叠问题的解决方法做如下总结：

1、`border-left` + `box-shadow`

使用vue或react的伙伴，肯定都非常熟悉`element`或`ant-design`组件库，对于这种边框重叠问题，他们的解决方法相同，都是通过`border-left` + `box-shadow`来解决；具体展开就是：对于正常状态下的按钮，让所有按钮的`border-left`设置为0，并为第一个按钮单独设置`border-left`；对于处于激活状态的按钮，改变其`border-color`，此时激活状态的按钮由于左边框为0，产生颜色缺失，通过设置`box-shadow`来解决激活状态按钮左边框颜色缺失，`box-shadow`在盒模型中不占据空间，因此该解决方法非常巧妙。

核心代码如下：

```html
<div class="btn-group">
  <div class="btn-item active">北京</div>
  <div class="btn-item">上海</div>
  <div class="btn-item">广州</div>
  <div class="btn-item">深圳</div>
  <div class="btn-item">杭州</div>
</div>
```

```css
.btn-item{
  ...
  border: 1px solid rgba(0, 0, 0, .4);
  border-left: 0;
  ...
}
.btn-item:first-child{
  border-left: 1px solid rgba(0, 0, 0, .4);
}
.btn-item.active{
  ...
  border-color: #4A81FF;
  box-shadow: -1px 0 0 0 #4A81FF;
  ...
}
.btn-item.active:first-child{
  box-shadow: none;
}
```

最终效果如下（[查看demo]()）：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191130104318303.gif)

2、`margin` + `z-index`

使用`margin` + `z-index`来解决边框重叠问题，具体如下：按钮的每个边框都保留，对于正常状态的按钮，通过设置`margin-left: -1px;`将每个按钮向左移动一个像素，这样后一个按钮的左边框会遮盖前一个按钮的右边框；一次来解决正常状态下边框重叠问题；对于处于激活状态按钮，通过改变其`z-index`值来将被后一个按钮覆盖的右边框显示出来；

核心代码如下：

```html
<div class="btn-group">
  <div class="btn-item active">北京</div>
  <div class="btn-item">上海</div>
  <div class="btn-item">广州</div>
  <div class="btn-item">深圳</div>
  <div class="btn-item">杭州</div>
</div>
```

```css
.btn-item{
  ...
  margin-left: -1px;
  border: 1px solid rgba(0, 0, 0, .4);
}
.btn-item.active{
  ...
  z-index: 1;
  border-color: #4A81FF;
  ...
}
```

最终效果如下（[查看demo]()）：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191130110204906.gif)

以上就是目前我觉的解决边框重叠问题比较好的解决方案，仅供参考。