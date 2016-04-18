angular.module('citrusService', []).factory('Citrus', function(){

	var sanitizer = {

		error: function(data){

			var data = data.data;

			angular.element('.t-error').delay('100')

				.css('display', 'block')

				.animate({
				'margin-bottom':'0px',
				'opacity':'1',
			}, 600);

			//sanitizer.hideError(5000);

			return data.error;

		},

		hideError: function(t){

			angular.element('.t-error').delay(t).fadeOut('fast', function(){
				
				angular.element('.t-error')

					.css('margin-bottom', '-200px')
					.css('opacity', '.1');
			});

		},

		success: function(){
			
			angular.element('.t-success').delay('100')

				.css('display', 'block')

				.animate({
				'margin-bottom':'0px',
				'opacity':'1',
			}, 700);

			angular.element('.t-success').delay('8000').fadeOut('fast', function(){
				
				angular.element('.t-success')

					.css('margin-bottom', '-200px')
					.css('opacity', '.1');
			});

		},

		decide: function(data){

			if(!sanitizer.parse(data)){
				message = sanitizer.error(data);

				proceed = false;

			} else {

				proceed = true;

			}

			return proceed;

		},

		parse: function(data){

			var data = data.data;
			
			if(data.success == 'error')
			{
				data = 0;
			};

			if (data.success == 'data') 
			{
				data = 1;
			};

			return data;
		},
	}

	return sanitizer;
})