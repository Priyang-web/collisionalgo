var fixedRect, movingRect;
var ob1, ob2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  ob1 = createSprite(200,600,80,50);
  ob1.shapeColor = "green";

  ob2 = createSprite(800,650,80,50);
  ob2.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "black";
  }
else if(isTouching(movingRect,ob1)){
  movingRect.shapeColor = "red";
  ob1.shapeColor = "black";
}
else if(isTouching(movingRect,ob2)){
  movingRect.shapeColor = "red";
  ob2.shapeColor = "black";
}
else{
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}
