var car1,car2;
var car1image,car1Rimage,car1Limage,car1Dimage,car2image,car2Rimage,car2Limage;
var backgroundImage,ground,bullet;
var text1;

function preload(){
  backgroundImage = loadImage("images/images.jpg");
  car1image= loadImage("images/download.png");
  car1Rimage= loadImage("images/downloadright.png");
  car1Limage = loadImage("images/downloadleft.png");
  car2image = loadImage("images/car4.png");
  car2Rimage = loadImage("images/download1right.png");
  car2Limage = loadImage("images/download1left.png");
}

function setup() {
  createCanvas(1000,630);
  car1 = createSprite(840,360);
  car2 = createSprite(940,360);
  car1.scale = 0.7;
  car2.scale = 0.7;
}
function draw() {
  background(backgroundImage);
 

  if(keyDown("enter")){
   bullet  = createSprite(car1.x,car1.y,4,5);
   bullet.shapeColor = "red";
   bullet.velocityX = 3;
   bullet.velocityY = -3;
   bullet1 = createSprite(car2.x,car2.y,4,5);
   bullet1.shapeColor = "red";
  }
  
 if(keyIsDown(DOWN_ARROW)){
    car1.velocityY = 3; 
  }
  else{
    car1.velocityY = 0;
    car2.velocityY = 0;  
  }
  if(keyDown("shift")){
    car2.velocityY = 3;
  }
  if(keyIsDown(UP_ARROW)){
    car1.velocityY = -3;  
}
if(keyDown("w")){
  car2.velocityY = -3;  
}
if(keyDown("space")){
  car2.velocityX = 3;  
  car2.addImage(car2Rimage);
}
else{
  car2.addImage(car2image);
  car2.velocityX = 0;
}
if(keyIsDown(RIGHT_ARROW)){
  car1.velocityX = 3;  
  car1.addImage(car1Rimage); 
}
else {
  car1.addImage(car1image);
  car1.velocityX = 0;
 

  }

if(keyIsDown(LEFT_ARROW)){
  car1.velocityX=-3; 
  car1.addImage(car1Limage);
 }

 if(keyDown("a")){
  car2.velocityX =-3; 
  car2.addImage(car2Limage);
 }
 drawSprites();
  }
  
  
 
  