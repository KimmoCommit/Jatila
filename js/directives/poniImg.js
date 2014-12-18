


app.directive("poniimg", function () {
	
return{
    restrict: "EA",
    scope: true,
    template: "<a href='media/horses/{{ poni.name}}-lg.jpg' data-lightbox='{{ poni.name }}' data-title='{{ poni.name }}'><img src='media/horses/{{ poni.name }}-sm.jpg' alt='Kuvaa ei löytynyt' onError='this.onerror=null;this.src='media/horses/notfound.jpg';'></a>",
	link: function (scope, elem, attrs, ctrl) {
		elem.click(function(e){
			e.preventDefault();


		});
	}
}
});

