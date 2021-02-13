var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground
var side1;
var side2;
var bottomSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1 = createSprite(350,610,20,100);
	side2 = createSprite(450,610,20,100);
	bottomSide = createSprite(400,650,100,20);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0});
	side1 = Bodies.rectangle({isStatic:true});
	side2 = Bodies.rectangle({isStatic:true});
	bottomSide = Bodies.rectangle({isStatic:true});
	World.add(world, side1);
	World.add(world, side2);
	World.add(world, bottomSide);

	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x; 
  packageSprite.y = packageBody.position.y; 
  drawSprites();
  keyPressed();
}

function keyPressed()
{if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }}




