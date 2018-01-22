$.fn.myPlugin = function(){
	this.css('color', 'red');
	this.each(function(){
		this.append(' ' + $(this).attr('href'));
	})
}