function imgNotFound(image){
 	image.onerror = "";
    image.src = "media/horses/imagenotfound.jpg";
    image.onclick = function(e){
    	e.preventDefault();
    	e.stopPropagation();
    };
    image.onmouseover = function(){
    	$(this).css({"cursor":"default"});
    };
    return true;
}

