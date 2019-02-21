var c = document.getElementById("can");
var ctx = c.getContext("2d");

c.width = document.body.clientWidth; //document.width is obsolete
c.height = document.body.clientHeight; //document.height is obsolete

function Cir(x,y,radius){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}


Cir(50,50,5);

Cir(50,50,10);

//x,y,radius,start angle, end angle
//ctx.arc(95, 50, 40, 0, 2 * Math.PI);
