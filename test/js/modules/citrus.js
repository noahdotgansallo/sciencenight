angular.module('citrusService', []).factory('Citrus', function(){
	var sanitizer = {

		error: function(data){
			console.log(data);
		},

		sift: function(data){
			console.log(data);
		},

		parse: function(data){
			if(data.success == 'error')
			{
				sanitizer.error(data.error);
			};

			if (data.success == 'data') 
			{
				sanitizer.sift(data.data);
			};
		},
	}

	return sanitizer;
})