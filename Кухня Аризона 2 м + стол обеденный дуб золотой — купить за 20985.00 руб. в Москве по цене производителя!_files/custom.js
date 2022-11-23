/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/
$(document).ready(function() {
  $("a.scrolltotab").click(function () {
	elementClick = $(this).attr("data-href")  
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
	elementClick2 = $(this).attr("data-toggle");
	$(".tabs_section .tabs-head li").removeClass("current");
	$(".tabs_section .tabs-head "+elementClick+"").addClass("current");
	$(".tabs_section ul.tabs_content li").removeClass("current");
	$(elementClick2).show();
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
	return false;
  });
    $('.bx_scu ul li.active').each(function(){
        var clonetitle = $(this).children('i').attr('title');
        var treevalue = $(this).attr('data-treevalue').split('_');
        $('.clonetitle.id'+treevalue[0]).html('<i class="fa fa-check"></i> '+clonetitle);
    });
    $('.bx_scu ul li').click(function(){
        var clonetitle = $(this).children('i').attr('title');
        var treevalue = $(this).attr('data-treevalue').split('_');
        $('.clonetitle.id'+treevalue[0]).html('<i class="fa fa-check"></i> '+clonetitle);
    });
});