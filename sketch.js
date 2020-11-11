const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var ground,ball;
function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world
  
 ground=Bodies.rectangle(400,380,800,20,{isStatic:true})
World.add(world,ground)
ball=Bodies.circle(100,100,20,{restitution:1})
World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}