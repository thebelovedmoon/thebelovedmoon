function redirect(URL){
   window.open(URL);
   return false;
}


$(document).ready(function() { 
function resizing () {
if ($("#sponsored_footer").is(':visible')){
    $("#footer").css({"margin-bottom": $("#sponsored_footer").outerHeight(true) });
  } else {
    $("#footer").css({"margin-bottom":0});
  }

  }
  window.changesOnFooter = resizing;
  resizing();
  $(window).resize(resizing);

    $("#header ul.dropdown-menu").hide()
    $("#header li.root>a").click(function(e){
        e.preventDefault()
        $(this).next().toggle();
        var subMenu = $(this).siblings("ul");
          if(subMenu.is(':visible')) {
              $(this).click(function(e){
              window.open(this.href, '_self');
            })
          }
     });

   $("#header .nav>li").mouseenter(function(){
   		$(this).prev().addClass("remove-after")
   })
   $("#header .nav>li").mouseleave(function(){
   		$(".nav>li").prev().removeClass("remove-after")
   })

   $("#response_msg").fadeOut(5000);

	window.scrollToPositionFix = function() { return 0; }

	jQuery('body > #content').on('touchend click', function() { if ( jQuery('.navbar-collapse.collapse.in').length > 0 ) {jQuery('.navbar-toggle').click();} })

  if (!(BM.Editor && BM.Editor.Core)) {
    $("nav.navbar-collapse li:not(.root) > a").on("click touchend", function(e) {
      var el = $(this);
      var link = el.attr("href");
      var blank = el.attr("target");
      if (blank) {
        window.open(link, blank);
      } else {
        window.location = link;
      }
    });
  }


});