const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rocket,meteor,bg_img;
var planet,planet_img;
var meteor_img,rocket_img;
var obstacle_group;
function preload(){
  bg_img=loadImage("pro19 background.jpg");
  obstaceImage=loadImage("meteorites pro19.png");
  rocket_img=loadImage("rocketpro.jpg");
  planet_img=loadImage("planett.png");
}
function setup() {

  engine = Engine.create();
	world = engine.world;

  meteorGroup=new Group();

  createCanvas(1300,600);
  rocket=createSprite(50,500,50,50);
  rocket.addImage("rocket",rocket_img);
  rocket.scale=0.3;

  planet=createSprite(1200,100,50,50);
  planet.addImage("planet",planet_img);
  planet.scale=0.8;
 obstaclesGroup = new Group();



  
}

function draw() {
  background(bg_img);

  if(keyDown(UP_ARROW)){
    rocket.velocityX=0;
    rocket.velocityY=-2;
  }
  else if (keyDown(DOWN_ARROW)){
    rocket.velocityX=0;
    rocket.velocityY=2;
  }
  else if (keyDown(LEFT_ARROW)){
    rocket.velocityX=-2;
    rocket.velocityY=0;
  }
  else if(keyDown(RIGHT_ARROW)){
    rocket.velocityX=2;
    rocket.velocityY=0;
  }

  if(obstaclesGroup.isTouching(rocket))
{  
  rocket.velocityX = 0;
  stroke("Red");
textSize(70);
fill("Red");
  text("Game Over" , 200,200);
obstaclesGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1); 
}
else if(planet.isTouching(rocket)){
  rocket.velocityX = 0;
  stroke("Red");
textSize(70);
fill("Red");
  text("You Win" , 200,200);
obstaclesGroup.setVelocityXEach(0);
obstaclesGroup.setLifetimeEach(-1); 
}

  rocket.display();
  spawnObstacles();
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 150 === 0) {
  var obstacle = createSprite(1300,Math.round(random(20, 370)), 10, 10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX = -3;
  obstacle.scale = 0.3;
  obstaclesGroup.add(obstacle);
}
}
