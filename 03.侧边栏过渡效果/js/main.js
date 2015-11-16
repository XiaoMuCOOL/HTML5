$(function(){
  $(".btns button").each(function(index){
  	$(this).click(function(){
  		$("body").removeClass();
  		$("body").addClass("now");
  		$("body").addClass("effect-"+index);
  	});
  });
  $(".mask").click(function(){
  	$("body").removeClass("now");
  });
});