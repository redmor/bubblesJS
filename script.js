
$(document).ready(function(){

setInterval(addBubble,100);

}); //end.ready

function addBubble(){
  $('.box').prepend('<div style="width:'+RanColor()+'px;height:'+RanColor()+'px;background-color:rgb('+RanColor()+','+RanColor()+','+RanColor()+');border-radius:100px;position:absolute;top:'+Pos()+'px;left:'+Pos()+'px;"></div>');
  $('.box div').fadeOut(2000);
}

function Pos(){
  return Math.floor(Math.random()*400);
}

function RanColor(){
  return Math.floor(Math.random()*255)+1;
}
