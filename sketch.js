var starImg, fairyImg, bgImg;
var fairy ;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	//fairy.debug = "true";
	fairy.setCollider("rectangle",0,0,1000,1100);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

if(star.position.y>480){
star.velocityY=0;
star.collide(fairy);
Matter.Body.setStatic(starBody,true)

}
keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	}

	if(keyDown("right")){
		fairy.x = fairy.x + 5;
	}

	if(keyDown("down")){
	Matter.Body.setStatic(starBody,false);
	star.velocityY = 5;
	}

}