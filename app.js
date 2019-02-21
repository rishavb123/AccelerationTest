const c = document.getElementById("can");
const ctx = c.getContext("2d");

c.width = innerWidth; //document.width is obsolete
c.height = innerHeight; //document.height is obsolete

function cir(x,y,radius){
  ctx.beginPath();
  ctx.arc(x-radius, y-radius, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function colOfCircles(numOfCircles,x){
  for(var i =0; i!=numOfCircles; i++){
    cir(x,(i+1)*c.height/(numOfCircles+1),50);
  }
}

colOfCircles(3,100);

//x,y,radius,start angle, end angle
//ctx.arc(95, 50, 40, 0, 2 * Math.PI);
