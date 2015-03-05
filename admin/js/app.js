define(['jquery','underscore','backbone','jqueryui','jqueryi18'],function($,_,backbone){

var appView = Backbone.View.extend({


el:$('body'),

events : {
	'blur .info':'hasChanged',
	'click .info':'makeEditable',
	'submit #newLeiri':'createNewLeiri',
	'click .leiri-delete > button':'deleteLeiri'
},

initialize : function(){

	$.datepicker.setDefaults($.extend({'dateFormat':'dd-mm-yy'},$.datepicker.regional['fi']));
	$('input[name=newLeiriStartTime]').datepicker();
	$('input[name=newLeiriEndTime]').datepicker();
	$('.leiri-time').datepicker();




},

render: function(){
	
},

hasChanged: function(event){
	var it = $(event.target),
	newdetail = it.html(),
	id = it.siblings('.leiri-delete').children("button").attr("id"),
	detail = it.attr('data-key');

	it.removeClass("active");



	$.ajax({
		url: 'ajax/editLeiriDetails.php',
		type: 'post',
		data: {id: id, detail: detail, newdetail: newdetail  },
		success: function(data, status) {
			console.log("success");
		},
		error: function(xhr, desc, err) {
		console.log(xhr);
		console.log("Details: " + desc + "\nError:" + err);
		}
		}); 


event.preventDefault();

},

makeEditable: function(event){
	var it = $(event.target);
	it.attr('contenteditable',true).attr('spellcheck',false);
	it.addClass("active").focus();
},

deleteLeiri: function(){


var it = $(event.target);
var id = it.attr("id");
	$.ajax({
		url: 'ajax/removeLeiri.php',
		type: 'post',
		data: {id: id },
		success: function(data, status) {
			console.log(data);
			it.parent().parent("tr").remove();



		},
		error: function(xhr, desc, err) {
		console.log(xhr);
		console.log("Details: " + desc + "\nError:" + err);
		}
		}); 





},

createNewLeiri: function(event){
	var it = $(event.target),
	name = $("input[name=newLeiriName]").val(),
	startTime = $("input[name=newLeiriStartTime]").val(),
	endTime = $("input[name=newLeiriEndTime]").val(),
	price = $("input[name=newLeiriPrice]").val(),
	teacher = $("input[name=newLeiriTeacher]").val();
	


	$.ajax({
		url: 'ajax/createNewLeiri.php',
		type: 'post',
		data: it.serialize(),
		success: function(data, status) {
			var response  = JSON.parse(data);
			var id = JSON.parse(response.id);

			var newLeiri = $('<tr/>',{"class":"leiri"})
			.append(""+
			"<td class='info' data-key='name'>"+name+"</td>"+
			"<td class='info' data-key='startTime'>"+startTime+"</td>"+
			"<td class='info' data-key='endTime'>"+endTime+"</td>"+
			"<td class='info' data-key='price'>"+price+"</td>"+
			"<td class='info' data-key='teacher'>"+teacher+"</td>"+
			"<td><button class='leiri-delete' id="+id+">Poista</button></td>"+
			+"");

			$("#leiri-table").append(newLeiri);


			newLeiri.find("td:last-of-type > button").click(function(){

				var it = $(this);
				var id = it.attr("id");
					$.ajax({
						url: 'ajax/removeLeiri.php',
						type: 'post',
						data: {id: id },
						success: function(data, status) {
							console.log(data);
							it.parent().parent("tr").remove();



						},
						error: function(xhr, desc, err) {
						console.log(xhr);
						console.log("Details: " + desc + "\nError:" + err);
						}
						}); 

					});

			newLeiri.find("td:not(:last-of-type)").click(function(){
				
			});
	


		},
		error: function(xhr, desc, err) {
		console.log(xhr);
		console.log("Details: " + desc + "\nError:" + err);
		}
		}); 


event.preventDefault();
}

});


var newAppView = new appView();


});








