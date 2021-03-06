const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, ground, hero, tether;

function preload() {
//preload the images here
bg  = loadImage("images/GamingBackground.png")
}

function setup() {
  var canvas = createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(455,500,900,10);
  hero = new Hero(300,200,250,100);
  tether = new Fly(hero.body, 200,50);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.show();
  hero.show();
  tether.show();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}
