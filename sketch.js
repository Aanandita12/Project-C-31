const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function prelode()
background="black";






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  box8 = new box(330,235,30,40);
  box9 = new box(360,235,30,40);
  box10= new box(390,235,30,40);
  box11= new box(420,235,30,40);
  box12= new box(450,235,30,40);
  //level three
  box13= new box(360,195,30,40);
  box14= new box(390,195,30,40);
  box15= new box(420,195,30,40);
  //top
  box16= new box(390,155,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  Slingshot = new Slingshot(this.ball,{x:100,y:200}); 


}

function draw() {
  background(255,255,255); 
  box8.drawSprites();
  box9.drawSprites();
  box10.drawSprites();
  box11.drawSprites();
  box12.drawSprites();
  box13.drawSprites();
  box14.drawSprites();
  box15.drawSprites();
  box16.drawSprites();
  drawSprites();
}









