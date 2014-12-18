function imgNotFound(image){
 	image.onerror = "";
    image.src = "media/horses/imagenotfound.jpg";
    return true;

}