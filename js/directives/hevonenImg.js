


app.directive("hevonenimg", function () {
	
return{
    restrict: "EA",
    scope: true,
    template: "<a href='media/horses/{{ hevonen.name}}-lg.jpg' data-lightbox='{{ hevonen.name }}' data-title='{{ hevonen.name }}'><img class='hevonen-img' src='media/horses/{{ hevonen.name }}-sm.jpg' alt='Kuvaa ei löytynyt'  onerror='imgNotFound(this)';' ></a>",
	link: function (scope, elem, attrs, ctrl) {
		elem.click(function(e){
			e.preventDefault();


		});
	}
}
});

