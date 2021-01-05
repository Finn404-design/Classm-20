var car;
var Wall;
var speed,wieght;



function setup() {
  createCanvas(800,400);
  speed=random(45,46);
  wieght=random(400,1500);



 car=createSprite (50,200,50,50);
 car.velocityX = speed;
 car.shpaecolor=color=(225);

 wall=createSprite(1500,200,60,hieght/2);
 wall.shpaecolor=color=(50,50,80);

if(wall.x-car.x< (car.width+wall.width)/2)
{
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}






}
function draw(){
 background(0);
 drawSprites();
}