var bullet,wall;
var thickness ,speed, weight; 


function setup() {
  createCanvas(1600, 400);

    thickness=random(22,83)
    speed=random(223,321)
    weight=random(30,52)

    bullet=createSprite(50, 200, 30,10);   
    bullet.velocityX = speed;
    bullet.shapeColor=color("white");

  	wall=createSprite(1200,200, thickness , height/2)
  	wall.shapeColor=("grey")
}


function draw() {
  background("black");
  
  if(hasCollided(bullet,wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage > 10)
	{
		bullet.shapeColor=("red");
	} 

if(damage < 10)
	{
		bullet.shapeColor=("green");
	}
  }  
  
  drawSprites();
 
}

function hasCollided (bullet,wall){
  bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
     return true
  }
  else {
	  return false;
  }

}