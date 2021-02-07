var rect1
var rect2
var rect3
var rect4





function setup() {
  createCanvas(800,400);
rect1 = createSprite(200,200,50,100)  
rect2 = createSprite(100,100,50,100)  
rect1.shapeColor = 'red'
rect2.shapeColor = 'yellow'

rect2.debug = true;
rect1.debug = true;

rect3 = createSprite(600,0,50,100)  
rect4 = createSprite(600,400,50,100)

rect4.shapeColor = 'cyan'
rect3.shapeColor = 'pink'

rect3.debug = true;
rect4.debug = true;

rect3.velocityY = 3;
rect4.velocityY = -3;

}

function draw() {
 rect2.y = mouseY;
 rect2.x = mouseX;
 if (rect2.x- rect1.x<  rect1.width/2+rect2.width/2&& rect1.x - rect2.x <rect1.width/2 +rect2.width/2&& rect1.y - rect2.y < rect2.height/2 + rect1.height/2&&rect2.y - rect1.y < rect2.height/2 + rect1.height/2  ){
rect2.shapeColor = 'green';
rect1.shapeColor = 'blue';
} 
else {
rect1.shapeColor = 'red'
rect2.shapeColor = 'yellow';
}
if(rect3.y- rect4.y < rect3.height/2+rect4.height/2&&rect4.y- rect3.y < rect3.height/2+rect4.height/2 ){
rect3.velocityY = rect3.velocityY*(-1)
rect4.velocityY = rect4.velocityY*(-1)
}

if (rect3.x - rect4.x < rect3.width/2 + rect4.width/2&& rect4.x - rect3.x < rect4.width/2 + rect3.width/2 ){

rect4.velocityX = rect4.velocityX*(-1)
rect3.velocityX = rect3.velocityX*(-1)


}


background(0);  
  drawSprites();
}