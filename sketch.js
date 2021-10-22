
var box
function setup() {
  createCanvas(400, 400);
  box = createSprite(200,200,30,30)

}

function draw() {
  background(220);
  box.velocityX = 2
  drawSprites()
}