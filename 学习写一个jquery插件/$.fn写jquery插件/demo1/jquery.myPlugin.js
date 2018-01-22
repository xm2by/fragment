$.fn.myPlugin = function(){
	// 在这里，this指向的是用jQuery选中的元素，即为jQuery对象
	// example: $('a'), 则this = $('a');
	console.log(this);
	this.css('color', 'red');
}