(function(){

	function setCenter(){
		var $con = $(".content");
		var contWidth = $con.width();
		var contHeight = $con.height();
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();					
		$con.css("left",(windowWidth-contWidth)/2);
		$con.css("top",(windowHeight-contHeight)/2-15);					
	}
	setCenter();
	
	$(window).resize(
		function(){
			setCenter();					
		}
	)


//init slimScroll 

	function setScroll(){
		//var topH = $('.sec-h1').outerHeight();
		var wH = $(window).height();	
		console.log(wH);
		$('.main-con1').slimScroll({
			height:wH-260
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
	//字数截断
	function textEll(ele,setH,parentHeight){
		var $ele = $(ele);
		$(ele).each(function(i){
			
			if($(this).outerHeight()>setH){
				$(this).css('height',setH+'px');
				$(this).addClass('text-ep');
			} else {
				$(this).css('height',setH+'px');
			}				
		})


	}
	textEll('.txt-des',80);	
	/*textEll('.p-ep',80);	*/
	
	
})();


function placeholderSupport() {
     return 'placeholder' in document.createElement('input');
}
$(function(){
	if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
	    $(document).ready(function(){
	         //默认遍历循环添加placeholder
	        $('[placeholder]').each(function(){
	            $(this).parent().append("<span class='placeholder'>"+$(this).attr('placeholder')+"</span>");
	        })
	        $('[placeholder]').blur(function(){
	            if($(this).val()!=""){  //如果当前值不为空，隐藏placeholder
	                $(this).parent().find('span.placeholder').hide();
	            }
	            else{
	                $(this).parent().find('span.placeholder').show();
	            }
	        })
	    });
	    }
	}); 



	

