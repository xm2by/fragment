var foo = function(){
	// 别人的代码
} // 注意这里没有分号


// 别人的代码在没有分号的情况下会导致自己的代码无法正常执行，从而会报错，为了防止这种情况，不论别人的代码结尾有没有分号，我们都应该在自己代码的开始前加一个分号。

// 自己的代码
;(function($, window, document, undefined){
	// 定义一个Beautifier的构造函数
	var Beautifier = function(ele, opt){
		console.log(this); // this指向的是Beautifier构造函数
		this.$element = ele;
		this.defaults = {
			'color': 'red',
			'fontSize': '12px',
			'textDecoration': 'none'
		};
		this.options = $.extend({}, this.defaults, opt)
	};

	// 定义Beautifier方法
	Beautifier.prototype = {
		beautify: function(){
			return this.$element.css({
				'color': this.options.color,
				'fontSize': this.options.fontSize,
				'textDecoration': this.options.fontSize
			})
		}
	}

	// 在插件中使用Beautifier对象
	$.fn.myPlugin = function(options){
		// 创建Beautifier实例对象
		var beautifier = new Beautifier(this, options);

		// 调用其方法
		return beautifier.beautify();
	};
})(jQuery, window, document)