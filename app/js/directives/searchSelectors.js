app.directive("searchselectors", function () {
	
return{
    restrict: "EA",
    scope: true,
    template: "<span class='search-selector search-selector-selected' rel='ponit-container'>Pienet ponit</span><span class='search-selector' rel='hevoset-container'>Hevoset ja isot ponit</span>",
	link: function (scope, elem, attrs, ctrl) {
		elem.children("span").click(function(){

			var it = $(this);
			var rel = it.attr('rel');
			$('.search-container').hide();
			$('.search-selector').removeClass("search-selector-selected");

			if(it.hasClass("search-selector-selected") === true) {
				it.removeClass("search-selector-selected");
				$('#'+rel).fadeIn();
			}

			else if (it.hasClass("search-selector-selected") === false){
				it.addClass("search-selector-selected");
				$('#'+rel).fadeIn();
			}

		

			var s = it.closest(".hevoset-list-container").children(".hevonen-accordion");
			s.slideToggle(function(){

			});
		});
	}
}
});

