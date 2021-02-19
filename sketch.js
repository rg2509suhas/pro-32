const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;


function setup() {
  createCanvas(800,800);
 
	stone = new Stone(160,200,50);
  tree = new Tree(300,500);
  chain = new Chain(stone.body,{x:160, y:500});
  boy = new Boy(250,300);
  ground = new Ground(0,680,4000,20);
  bird1=new Bird(300,600);
  bird2=new Bird2(300,500);
  bird3=new Bird(270,450);
  bird4=new Bird(170,550);
  bird5=new Bird(360,650);
  bird6=new Bird(300,550);
  bird7=new Bird(370,350);
  bird8=new Bird(200,450);
  bird9=new Bird(390,590);
  bird10=new Bird(270,447);
}

function draw() {
  background(255,255,255);  
  tree.display();
  stone.display();
  bird1.display();
  bird2.display();
  bird3.display();
  bird4.display();
  bird5.display();
  bird6.display();
  bird7.display();
  bird8.display();
  bird9.display();
  bird10.display();

  detectCollision(stone,bird1);
  detectCollision(stone,bird2);
  detectCollision(stone,bird3);
  detectCollision(stone,bird4);
  detectCollision(stone,bird5);
  detectCollision(stone,bird6);
  detectCollision(stone,bird7);
  detectCollision(stone,bird8);
  detectCollision(stone,bird9);
  detectCollision(stone,bird10);
               
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:160, y:500});
  chain.attach(stone.body);
}
}
function detectCollision(lstone,lmango){
stoneBodyPosition = lstone.body.position;
birdBodyPosition = lbird.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lbird.r + lstone.r){
  Matter.Body.setStatic(lmango.body, false);
}

}