const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;                      
var world;                                             
var paper1; 
var dustbin1; 

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
    
	paper1=new paper(100,600,20,20); 

    dustbin1=new dustbin(100,200,5,5); 
                             
	Engine.run(engine); 
  
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbin1.display(); 
  paper1.display(); 
  
} 