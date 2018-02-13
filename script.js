(function($){

	var list = $("#list");

	$.ajax({
		url: 'http://localhost:8080/world/countries',
		data: { },
		error: function(){
			alert("Error");
		},
		success: option,
		crossDomain: true,
		dataType: 'jsonp',
		jsonpCallback: 'option',
			contentType: 'application/json',
			type: 'GET'
	});

	function option(data){
		for (var i = 0; i < data.name.length; i++) 
			list.append("<option>"+data.name[i]+"</option>");
	}

})(jQuery);