$.fn.myPlugin = function(){
	this.css('color', 'red');
	// 通过return让myPlugin插件在调用时也支持链式调用
	return this.each(function(){
		console.log(this); // this指向DOM对象
		console.log($(this)); // $(this）指向jQuery对象
		this.append( ' ' + $(this).attr('href'));
	})
}