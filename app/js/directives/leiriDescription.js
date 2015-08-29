app.directive("leiridescription", function () {
	
return{

	scope: true,
	link: function (scope, elem, attrs, ctrl) {
		elem.click(function(){

			var it = $(this);
			var button = $(this).children('i');


			if(button.hasClass("fa-plus-square-o") === true){
				button.removeClass("fa-plus-square-o");
				button.addClass("fa-minus-square-o")
			} else {
				button.removeClass("fa-minus-square-o");
				button.addClass("fa-plus-square-o");
			}


			var s = it.closest(".leiri-list-container").children("p");
			s.slideToggle(function(){

			})
		});
	}
}
});








/*return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      console.log("we are in!");
    });
};*/


