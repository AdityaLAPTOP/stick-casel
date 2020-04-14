const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
   box1=new Box (600,390,1400,20);
   box2=new Box (455,360,240,100);
   box3=new Box (765,360,240,100);
   box4=new Box (614,260,550,100);
   box5=new Box (330,300,20,200);
   box6=new Box (895,300,20,200);
  // box7=new Box (600,390,1400,100);
  // box8=new Box (600,390,1400,100);
   engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(130,420,127); 
  fill("megenta");
  triangle(400,210,600,10,800,210); 
  //console.log(mouseX,mouseY);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
 // box7.display();
 // box8.display();
 
  drawSprites();
}