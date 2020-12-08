




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2;
var ground;
var pig1,pig2,pig3;
function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  box1 = new Box(500,320,70,70);
  box2 = new Box(400,320,70,70);
  pig1  = new Pig(200,200);
  log1 = new Log(100,100,80,PI/2);
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
}