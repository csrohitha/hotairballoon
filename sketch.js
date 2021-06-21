var balloon,balloonImage1,balloonImage2,bg,database,height;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  
 var balloonPosition = database.ref('balloon/position');
 

}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updatePosition(-10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    balloon.x=balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    updatePosition(+10,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    balloon.x=balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    updatePosition(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01;
  
    //write code to move air balloon in up direction
    balloon.y=balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    updatePosition(0,+10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale +0.01;
    //write code to move air balloon in down direction
    balloon.y =balloon.y +10;
  }
  function updatePosition(x,y){
    database.ref('balloon/position').set({
      'x': balloon.x + x,
      'y': balloon.y + y
    })
    
    }
    
    function readPosition(data){
      position=data.val();
      balloon.x=position.x;
      balloon.y=position.y;
    }
    
    function showError(){
    console.log("Error in writing to the database");
    } 
  


  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
