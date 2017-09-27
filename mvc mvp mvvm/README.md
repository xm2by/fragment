# MVC、MVP、MVVM学习笔记

>MVC、MVP、MVVM都是常见的软件架构，什么是软件架构呢？我的理解就是盖房子时的设计图，不同功能的房子设计图是不一样的。

## 1、MVC
M（Model）：模型，用于数据保存；
V（View）：视图，用于展示用户界面；
C（Controller）:控制器，用于控制业务逻辑；

它们之间的通信方式：

V :arrow_right: C :arrow_right: M :arrow_right: V

View传送指令到Controller；Controller完成业务逻辑，要求Model改变状态；Model将新的数据发送到View，用户得到反馈。所有通信都是`单向的`。

## 2、MVP
M（Model）：模型，用于数据保存；
V（View）：视图，用于展示用户界面；
P（Presenter）:显示器，它通过View控制用户输入从而起到了Controller的作用，同时它又获取、格式化数据，并用于View的显示；

它们之间的通信方式：

V :arrow_right: P :arrow_right: M :arrow_right: P :arrow_right: V

View传送指令到Presenter；Presenter要求Model改变状态并获取其数据；Presenter对获取的数据进行格式化然后返回到View来显示。Model与View之间不通信，都是通过Presenter来进行的。所有通信都是`双向的`。

## 3、MVVM
M（Model）：模型，用于数据保存；
V（View）：视图，用于展示用户界面；
VM（ViewModel）:视图模型，；

它们之间的通信方式：

V :left_right_arrow: VM :arrow_right: M :arrow_right: VM :left_right_arrow: V

MVVM与MVP的通信基本相似，不同之处在于View与VM之间是双向绑定，View的变动会自动反应在ViewModel上，反之亦然，Angular采用这种模式。

## 参考文献
* [MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
* [Javascript MVC框架简介](https://segmentfault.com/a/1190000000607382)

2017.09.27