$.fn.myPlugin = function(options){
	// 默认参数
	var defaults = {
		'color': 'red',
		'fontSize': '12px'
	};

	// 接受传入的参数，并且通过一个空数组{}来防止默认参数被修改
	var settings = $.extend({}, defaults, options);

	return this.css({
		'color': settings.color,
		'fontSize': settings.fontSize
	})
}