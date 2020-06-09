(function(){
	//init slimScroll
	
		function setScroll(){
			//var topH = $('.sec-h1').outerHeight();
			var wH = $(window).height();	
			console.log(wH);
			$('.main-con1').slimScroll({
				height:wH-400
			});				
		}
		setScroll();
		$(window).resize(
			function(){
				setScroll();				
			}
		)
		$(".top").click(function(event) {
		    	 
		    $('.main-con1').slimScroll({ scrollTo: '0' });
		});
})();