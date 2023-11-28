// Include
function parts(rootDir,File){
    var date = new Date();
    var result = date.toISOString().substring(0,15).replace(/[:|\-]/g,"");

   $.ajax({
       url: rootDir + "library/" + File + '?_=${result}',
       cache: true,
       async: false,
       dataType: 'html',
       success: function(html){
           html = html.replace(/\{\$root\}/g, rootDir);
           document.write(html);
       }
   });
}

// Menu Active
$(function(){
    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
    
    if ($('body').hasClass("homepage")){
        $('a.menuTop').addClass('is-active');
    }else{
        $('.menu > ul > li > a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('is-active');
            }
        });
		
		$('.footer-link > li > a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('is-active');
            }
        });
    }
});

// Menu
$(function(){
    var $open=false;
    
	function menuMb() {
		$(".menu").slideToggle();
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
    
	$('.btn-menu').on('click',function() {
		menuMb();
	});
});
