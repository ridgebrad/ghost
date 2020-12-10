var tower,towerImage;
var door,doorImage,doorGroup;
var  climber, climberGroup;
var ghost,ghostImage
var invisibleblock,invisibleblockGroup;
var PLAY=1;
var END=0;
var gameState="PLAY";
var sound;

function preload(){
 towerImage=loadImage("tower.png") ;
 doorImage=loadImage("door.png"); 
 climberImage=loadImage("climber.png") ;
  ghostImage=loadImage("ghost-standing.png");
  sound=loadSound("spooky.wav");
  
}

function setup(){
 createCanvas (600,600);
sound.loop();
tower=createSprite(300,300);
tower.addImage(towerImage) ; 
 
  
doorGroup=new Group();
climberGroup=new Group();
 invisibleblockGroup=new Group();
  
 ghost=createSprite(200,200,50,50) ;
 ghost.addImage(ghostImage); 
  ghost.scale=0.3;
  
  
}

function draw(){
 background(0) ;

if(gameState==="PLAY") {
  tower.velocityY=4 ;
  
  if (tower.y>400){
  tower.y=300;
}  
  
if(keyDown("space")) {
 ghost.velocityY=-5; 
  } 
 ghost.velocityY=ghost.velocityY+0.8; 

if(keyDown("left")){
 ghost.velocityX=-5; 
}  
  
  if(keyDown("right")){
 ghost.velocityX=5; 
}  
  
if(climberGroup.isTouching(ghost)) {
  ghost.velocityY=0;
}
spawndoors() ;


if(invisibleblockGroup.isTouching(ghost)||ghost.y>600){
  gameState="END";
  ghost.destroy();
}

 drawSprites() ;
}
   if(gameState==="END"){
tower.velocityY=0;    
  textSize(30);
    text("game Over",230,250);   
 
  }
  
  

  
 
  
  }

function spawndoors(){
 if (frameCount%80===0){
door=createSprite(Math.round(random(120,400)),-50) ;
door.addImage(doorImage);
door.velocityY=6;   
 door.lifeTime=600;
 doorGroup.add(door);
   
   climber=createSprite(200,10)
climber.addImage(climberImage);
   climber.x=door.x;
 climber.velocityY=6;
climber.lifetime=600; 
 climberGroup.add(climber);
 
 invisibleblock=createSprite(200,15);
  invisibleblock.x=door.x;
 invisibleblock.width=climber.width;
  invisibleblock.height=climber.height; 
 invisibleblock.velocityY=6; 
  invisibleblock.debug=true;  
   invisibleblockGroup.add(invisibleblock) ;
 invisibleblock.visible=false;  
   
   ghost.depth=door.depth;
 ghost.depth=ghost.depth+1;
 
 }
  
  
  
}

