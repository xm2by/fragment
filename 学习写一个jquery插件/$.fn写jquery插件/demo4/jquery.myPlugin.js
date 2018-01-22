$.fn.myPlugin = function(options){

	// 设置默认参数
	var defaults = {
		'color': 'red',
		'fontSize': '12px'
	};

	// 通过$.extend()将传入的参数与第一个参数合并，同名属性会被后面的覆盖
	var setting = $.extend(defaults, options);

	return this.css({
		'color': setting.color,
		'font-size': setting.fontSize
	})
}