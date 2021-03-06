const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, ground, hero, fly;
function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(1500,750,3000,10)
  hero = new Hero(200, 200, 400, 250)
  fly = new SlingShot(hero.body, {x:200, y:50})
}

function draw() {
  background(109, 182, 255 );
  Engine.update(engine);
  ground.display();
  hero.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x:mouseX, y:mouseY})
}