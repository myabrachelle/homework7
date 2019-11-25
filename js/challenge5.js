var img = $("img");
var message = "Hover over an image below";

img.each(function(){
	img.mouseover(function(){
		console.log('selected photo becomes background when clicked')
		$('#image').css("background-image", "url('"+this.src+"')");
		$('#image').html(this.alt);
	})

	img.focus(function(){
		$('#image').css("background-image", "url('"+this.src+"')");
		$('#image').html(this.alt);
	})

	img.mouseleave(function(){
		$('#image').css("background-image", "url('')");
		$('#image').html(message);
	})

	img.blur(function(){
		$('#image').css("background-image", "url('')");
		$('#image').html(message);
	})
});

