
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth*0.66;
canvas.height = window.innerHeight*0.66;
document.body.appendChild(canvas);
canvas.style.border="1px solid black"
canvas.style.backgroundImage='url("graveyard.png")';
canvas.style.backgroundSize='cover';
canvas.style.backgroundCapacity='0.5';



var zombieImage=new Image();
let w=50;
let h=w*1.6;
zombieImage.src="zombie.png";
zombieImage.style.width= w;
zombieImage.style.height=h;
var height=zombieImage.style.height;


var mouse = {
      x: undefined,
      y: undefined
}

var points=0;
var score=document.getElementById("score");
score.innerHTML=points.toString();
var resetScore=document.getElementById("resetScore");
var resetSpeed=document.getElementById("resetSpeed");


resetSpeed.addEventListener("click", function(){
      if (timeId){
            window.clearInterval(timeId);}
      time=2000;
     timeId=window.setInterval(zombie.drawzombie, time);
     console.log("time="+time);
})

resetScore.addEventListener("click", function(){
       points=0;
       score.innerHTML=points.toString();
})


canvas.addEventListener("click", function(event){
      mouse.x = event.offsetX;
      mouse.y = event.offsetY;
      var dx= mouse.x-zombie.x;
      var dy= mouse.y-zombie.y;
      console.log(mouse.x, mouse.y, dx, dy)
      if (dx<w && dx>0 && dy<h && dy>0){
            window.clearInterval(timeId);
            time-=200;
            points+=1;
            score.innerHTML=points.toString();
            timeId=window.setInterval(zombie.drawzombie, time);
            console.log(time);}
})

var time=2000;




let zombie={
      x: undefined,
      y: undefined,
      drawzombie: function(){
      ctx.clearRect(0,0,canvas.width, canvas.height)
      w=(Math.random())*100;
      h=w*1.6;
      zx=Math.random()*canvas.width*0.9;
      zy=Math.random()*canvas.height*0.8;
      zombie.x=zx;
      zombie.y=zy;
      ctx.drawImage(zombieImage, zx, zy, w, h);
}
}

let timeId=window.setInterval(zombie.drawzombie, time);

