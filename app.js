var c = document.getElementById("can");
var ctx = c.getContext("2d");

c.width = document.body.clientWidth; //document.width is obsolete
c.height = document.body.clientHeight; //document.height is obsolete

function cir(x,y,radius){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function colOfCircles(numOfCircles,x){
  for(var i =0; i!=numOfCircles; i++){
    cir(c.height/numOfCircles,x,50);
  }
}

colOfCircles(3,100)

//x,y,radius,start angle, end angle
//ctx.arc(95, 50, 40, 0, 2 * Math.PI);
