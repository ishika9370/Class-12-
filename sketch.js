
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 ground=createSprite(200,190,400,20)
 ground.addImage(groundimage)
 ground2=createSprite(200,200,400,20)
 ground2.visible=false

 
}  

function draw(){
  background("white")
  ground.velocityX=-3
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")&& trex.y>=165){
    trex.velocityY=-10
  }
    trex.velocityY=trex.velocityY+1
    trex.collide(ground2)  
    console.log("hello")

drawSprites();
}
