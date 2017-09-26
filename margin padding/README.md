# margin & padding 

1、父元素为body时，子元素的margin、padding使用百分比作为单位时，对应的margin、padding值计算是相对于body元素的宽度width。
`例子见demo1`

2、子元素的margin、padding使用百分比作为单位时，对应的margin、padding值计算是相对于其父元素的宽度width。
`例子见demo2`

3、父元素为body时，含有绝对定位的子元素的top、bottom、left、right使用百分比作为单位时，top、bottom的计算是相对于body元素的height值；left、right的计算是相对于body元素的width值。
`例子见demo3`

4、含有绝对定位的子元素的top、bottom、left、right使用百分比作为单位时，top、bottom的计算是相对于其具有定位属性父元素的height+padding值；left、right的计算是相对于其具有定位属性父元素的width+padding值。
`例子见demo4`

5、border的粗细不能使用百分比单位。
`例子见demo3`

6、子元素的width、height设置为100%，其宽度、高度分别继承父元素的width+padding、height+padding。
`例子见demo5`

2017.09.26
