function setup () {
  createCanvas(900, 900);
  ball=createSprite(50, 50, 50 ,50) ;
  ball.shapeColor=("blue"); 
  
  ball2= createSprite(100,150,30,30);
  ball2.shapeColor=("orange");



}

function draw () {

  background("pink");
ball2.x=World.mouseX; 
ball2.y=World.mouseY; 

if (ball2.x-ball.x<ball.width/2+ball2.width/2
&& ball.x-ball2.x < ball2. width/2+ball2.width/2
&&ball2.y-ball.y<ball.height/2+ball2.height/2
&&ball.y-ball2.y<ball2.height/2+ball2.height/2)
{
 ball.shapeColor=("red");
 ball2.shapeColor=("yellow"); 

} 

else {
  ball.shapeColor=("blue"); 
  ball2.shapeColor=("orange");

}
  drawSprites(); 

  



}