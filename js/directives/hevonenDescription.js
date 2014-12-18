app.directive("hevonendescription", function () {
	
return{
    restrict: "EA",
    scope: true,
    template: "<i class='fa fa-3x fa-caret-down'></i>",
	link: function (scope, elem, attrs, ctrl) {
		elem.click(function(){

			var it = $(this);


			if(it.children("i").hasClass("openCaret") === true) {
				it.children("i").removeClass("openCaret");
			}

			else if (it.children("i").hasClass("openCaret") === false){
				it.children("i").addClass("openCaret");
			}

		

			var s = it.closest(".hevoset-list-container").children(".hevonen-accordion");
			s.slideToggle(function(){

			});
		});
	}
}
});

