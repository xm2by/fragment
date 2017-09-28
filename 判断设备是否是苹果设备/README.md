# 判断设备是否是苹果设备

>有时候，同一个页面在苹果设备或安卓设备上的展示会稍有不同。此时，就需要我们提前判断我们的页面将要在苹果设备上还是安卓设备上展示。

## isIOS

我们将使用`isIOS`进行判断，如果isIOS返回`true`，我们将认为该设备是苹果设备，否则为安卓设备。

1、判断设备是苹果还是安卓时，我们获取设备浏览器用于HTTP请求的用户代理头的值，即

```
var u = navigator.userAgent;
```

2、获取到的`u`为字符串，此时我们需要写一个正则表达式来对u进行匹配。

iPhone6对应`u`的值：

`Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1`

ipad对应`u`的值：

`Mozilla/5.0 (iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10`

从中可以看出我们只需要匹配`(iPhone; CPU iPhone OS 9_1 like Mac OS X)`和`(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us)`即可

因此，正则表达式`reg`为

```
var reg = /\(i[^;]+;( U;)? CPU.+Mac OS X/;
```

3、得到`u`和`reg`后，我们有3种方法来进行匹配：

（1）`u.match(reg)` 返回布尔类型值

（2）`reg.test(u)` 返回布尔类型值

（3）`reg.exec(u)` 返回匹配结果

（1）为字符串的方法，（2）和（3）为正则表达式的匹配方法。

`代码见isIOS。html文件`

2017.09.28