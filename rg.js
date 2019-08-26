
	
/** code by webdevtrick ( https://webdevtrick.com ) **/
  $("#newGradient").on("click",function(){
  var a = randomColor();
  var b = randomColor();
  var c = randomColor();
 $("#gradient").css("background-image","    linear-gradient(to right,"+ a +", " + b +")");
 $("#colorA").html(a).css("color",a);
 $("#colorB").html(b).css("color",b);
 $("#newGradient").css("background-color",c); 
  
});