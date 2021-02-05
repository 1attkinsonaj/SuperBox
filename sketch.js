var canvas;
//var music;
var ball;
var surface1, surface2, surface3, surface4, surface5, surface6;


function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     ball = createSprite(random(20, 750), 450,40,40);
     surface1= createSprite(120, 550,150,40);
     surface2= createSprite(300, 550, 150, 40);
     surface3= createSprite(480, 550,150,40);
     surface4= createSprite(660, 550,150,40);

    TopEdge=createSprite(400, 10, 900, 10);
    TopEdge.shapeColor="blue";
    TopEdge.visible=false;
  
    BottomEdge=createSprite(300, 590, 1000, 10);
    BottomEdge.shapeColor="blue";
    BottomEdge.visible=false;
  
    LeftEdge=createSprite(10, 300, 10, 600);
    LeftEdge.shapeColor="blue";
    LeftEdge.visible=false;
  
    RightEdge=createSprite(800, 400, 10, 1000);
    RightEdge.shapeColor="blue";
    RightEdge.visible=false;

    

  
     surface1.shapeColor="red";
    
     surface2.shapeColor="purple" ;

     surface3.shapeColor="yellow" ;

     surface4.shapeColor="green" ;

    ball.shapeColor="white";


    ball.velocityX=(random(-14,14));
    ball.velocityY=(random(-14,14));
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    //background(rgb(169,169,169));
    //create edgeSprite
    background(0);
  
    
    ball.bounceOff(LeftEdge);
    ball.bounceOff(TopEdge);
    ball.bounceOff(BottomEdge);
    ball.bounceOff(RightEdge);





    if(ball.isTouching(surface1)){
      ball.shapeColor= "red"
     
    }
    
    if(ball.isTouching(surface2)){
        ball.shapeColor= "purple"
       
      }
    
    if(ball.isTouching(surface3)){
        ball.shapeColor= "yellow"
        
      }

      if(ball.isTouching(surface4)){
        ball.shapeColor= "green"
        
      }

      ball.bounceOff(surface1);
      ball.bounceOff(surface3);
      ball.bounceOff(surface2);
      ball.bounceOff(surface4);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
