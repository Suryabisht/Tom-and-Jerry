var jerry, jerryImage, tom, tomImage, garden, gardenImage ;
function preload() {
    //load the images here

   jerryImage = loadImage("jerryOne.png") ;
   tomImage = loadImage("tomOne.png") ;
   gardenImage = loadImage("garden.png") ;
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(800,600) ;
    tom.addImage("tom",tomImage) ;
    tom.scale = 0.8 ;

    jerry = createSprite(200,600) ;
    jerry.addImage("mouse",jerryImage) ;
    jerry.scale = 0.4 ;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (cat.width - jerry.width )/2) {
        cat.velocityX = 0;
        jerry.visible = false ;
        cat.visible = false ;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5 ;

    text(jerryX + ',' + jerryY,10,45) ;
  }

}
