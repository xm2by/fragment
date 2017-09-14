# reflow（回流）与repaint（重绘）
>今天接触到两个新的知识点——reflow（回流）与repaint（重绘）

- 1、它们出现在什么地方？

- 2、reflow与repaint的关系

- 3、哪些改变会引起reflow？

- 4、哪些改变会引起repaint？

- 5、怎样避免（减少）reflow？

- 6、参考文献

## 1. 它们出现在什么地方？
我们写出的页面代码（包括html、css、javascript文件）在被浏览器解析时，主要经过了4个阶段：
(1) `生成DOM树` ——解析HTML文档，转换树中的html标签或js生成的标签到DOM节点。

(2) `构建render（渲染）树`——解析CSS（包括外部CSS文件和样式元素以及js生成的样式），根据CSS选择器计算出节点的样式，创建渲染树。

(3) `布局渲染树`——从根节点递归调用，计算每一个元素的大小、位置等，给每个节点所应该出现在屏幕上的精确坐标。

(4) `绘制渲染树`——遍历渲染树，每个节点将使用UI后端层来绘制。

    reflow和repaint就出现在第(3)和(4)阶段

```
reflow（回流）：当我们页面元素所进行的操作涉及到页面布局的时候，浏览器就会对页面进行重建，此时浏览器的这个重建就叫做reflow（回流）。
```

```
repaint（重绘）：当我们页面元素所进行的操作仅涉及到元素的外观、风格而不涉及到页面布局的时候，浏览器仅会对页面进行重新渲染，此时浏览器的这个重新渲染过程就叫做repaint（重绘）。
```

## 2. reflow与repaint的关系
>把页面比作一栋楼，reflow（回流）就相当于推到重建，repaint（重绘）则相当于对楼房重新装饰一下。因此，页面的reflow（回流）代价就大于repaint（重绘），页面的reflow（回流）很容易触发。

reflow（回流）一定伴随着repaint（重绘），而repaint（重绘）可以单独存在。

## 3. 哪些改变会引起reflow？
(1) 页面DOM结构变化，比如移动、增加、删除、修改DOM结点；

(2) 获取页面结点属性，比如offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight、width、height、getComputedStyle()、IE的currentStyle；

(3) 修改页面中的内容，比如在`<input>`中输入内容；

(4) 修改结点的css样式（设计到布局的样式），比如修改padding、margin、border、dislay:none、font-size、background值；

(5) 改变结点的className属性；

(6) 增加或删除样式表文件；

(7) 修改网页的默认字体；

(8) 页面中的动画效果；

(9) 滚动条滚动，比如scroll；

(10) window的resize；

## 4. 哪些改变会引起repaint？
修改结点的颜色，修改元素的visibility:hidden;。

## 5. 怎样避免（减少）reflow？
(1) 避免在document上直接进行频繁的DOM操作；

(2) 避免频繁的获取节点尺寸，可以使用标量缓存节点尺寸；

(3) 集中修改样式，避免逐项更改样式；

(4) 将元素的position为absolute或fixed（设置动画效果时可选用）；

(5) 避免使用table布局，table布局会触发更多的reflow；

## 6.参考文献
(1) [如何减少浏览器repaint和reflow](http://www.cnblogs.com/fullhouse/archive/2012/02/20/2360301.html)

(2) [回流(reflow)与重绘(repaint)](http://www.cnblogs.com/dll-ft/p/5810639.html)

(3) [Repaint 、Reflow 的基本认识和优化 (2)](https://segmentfault.com/a/1190000002629708)

(4) [repaint和reflow（高效的操作DOM）](http://blog.csdn.net/notejs/article/details/11379795)

(6) [javascript性能优化-repaint和reflow](http://www.cnblogs.com/jiajiaobj/archive/2012/06/11/2545291.html)
