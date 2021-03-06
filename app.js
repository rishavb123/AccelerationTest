const c = document.getElementById("can");
const ctx = c.getContext("2d");

c.width = innerWidth; //document.width is obsolete
c.height = innerHeight; //document.height is obsolete

ctx.font = "25px Arial"

function cir(x, y, radius, num){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle="black";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  //ctx.fillText(num, x-8, y+8);
  ctx.stroke();
  ctx.closePath();
}

function drawPartical(x,y){
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.strokeStyle="red";
  ctx.stroke();
  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
}



function clear(){
  ctx.clearRect(0, 0, c.width, c.height);
}

var lines = [];
var circles = [];
var dots = [];
var numberOfSteps = 400;
function movePartical(startX,startY,endX,endY){

  var x = startX;
  var y = startY
  var i = 0;
  let index = dots.length;
  let lineIndex = lines.length;
  dots.push({x:startX,y:startY})
  dots.push({x:startX,y:startY});
  lines.push({startX:startX
    ,startY:startY
    ,endX:startX
    ,endY:startY
  });

  var particalMover = setInterval(function(){

    x+=(endX-startX)/numberOfSteps;
    y+=(endY-startY)/numberOfSteps;
    //drawLine(startX,startY,x,y);
    dots[index] = {x:x,y:y};
    //drawPartical(x,y)
    lines[lineIndex] = {
      startX:startX
      ,startY:startY
      ,endX:x
      ,endY:y
    }
    i++;
      if(i>=numberOfSteps){

        clearInterval(particalMover);

      }
  },1)

}

function drawLine(startX,startY,endX,endY){
  ctx.strokeStyle="black";
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

function colOfCircles(numOfCircles,x,radius){
  for(var i =0; i!=numOfCircles; i++){
    var xcord = x
    var ycord = (i+1)*c.height/(numOfCircles+1)
    circles.push({x:xcord,y:ycord})
    cir(xcord,ycord,radius, 0);
  }
}

function renderCircles(numOfCircles,radius){
  circles = [];
  for(var i =0; i!=numOfCircles.length; i++){
    colOfCircles(numOfCircles[i],(i+1)*c.width/(numOfCircles.length+1),radius);
  }
}

var radius = 50;
var cirArr = [3,4,4,2];
function render (){
  clear();
  renderCircles(cirArr,radius);
  for(var lineObj of lines){
    drawLine(lineObj.startX,lineObj.startY,lineObj.endX,lineObj.endY)
  }
  for(var dotObj of dots){
    drawPartical(dotObj.x,dotObj.y)
  }
}

function lineBetween(start,end){
  movePartical(circles[start].x,circles[start].y,circles[end].x,circles[end].y);
}

render();



let animationIndex = 0;
c.onclick = () => {
    if(animationIndex==animations.length)
      alert("FINISHED");
    animations[animationIndex]();
    animationIndex++;

};

let intervalz = setInterval(render, 25);

document.onkeypress = function (e) {
    e = e || window.event;
    console.log(e.keyCode)
    if(e.keyCode==98){
      lines = [];
      dots = [];
      radius=10;
      cirArr = [20,8,20,10];
      let delay = 0;
      renderCircles(cirArr);

      clearInterval(intervalz);
      interval = setInterval(render, 200);
      numberOfSteps = 800;

      for(let i = 0; i < cirArr[0]; i++)
        for(let j = cirArr[0]; j < cirArr[0] + cirArr[1]; j++){
          delay = 5*(i+1)*(j+1);
          setTimeout(() => lineBetween(i ,j), delay);
        }
        numberOfSteps = 6;
          for(let i = cirArr[0]; i < cirArr[0] + cirArr[1]; i++)
            for(let j = cirArr[0] + cirArr[1]; j < cirArr[0] + cirArr[1] + cirArr[2]; j++)
              setTimeout(() => lineBetween(i ,j), 5*(i+1)*(j+1));
              for(let i = cirArr[0]; i < cirArr[0] + cirArr[1] + cirArr[2]; i++)
                for(let j = cirArr[0] + cirArr[1]; j < cirArr[0] + cirArr[1] + cirArr[2] + cirArr[3]; j++)
                  setTimeout(() => lineBetween(i ,j), 5*(i+1)*(j+1));


    }else{
      console.log("hi");
      if(animationIndex>=0){
        lines = [];
        dots = [];
        animationIndex--;
        animationIndex--;
        for(let i = 0; i <= animationIndex; i++){
          animations[i]();
        }
        animationIndex++;
      }else{
        alert("STUPID")
      }
    }
};





let animations = [
    () => {
        lineBetween(0, 3);
    },
    () => {
        lineBetween(1, 3);

    },
    () => {
        lineBetween(2, 3);
    },
    () => {
        for(let i = 0; i< 3; i++)
            lineBetween(i, 4);
    },
    () => {
        for(let i = 0; i < 3; i++)
            for(let j = 5; j < 7; j++)
                lineBetween(i, j);
    },
    () => {
      numberOfSteps = 350;
        for(let i = 3; i < 7; i++)
            for(let j = 7; j < 11; j++)
                lineBetween(i, j);
    },
    () => {
      numberOfSteps = 125;
        for(let i = 7; i < 11; i++)
            for(let j = 11; j < 13; j++)
                lineBetween(i, j);
    },
];

//x,y,radius,start angle, end angle
//ctx.arc(95, 50, 40, 0, 2 * Math.PI);
