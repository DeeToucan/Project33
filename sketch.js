var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = 1;
var divisionHeight=300;
var score=0;
var lives=5;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
  fill(255);
  noStroke();
  text("Score : " + score, 20, 30);
  Engine.update(engine);
 
  if (gameState == 0){
    for (var i=0; i<particles.length; i++){

      if ((particles[i].pos.x < 565 && particles[i].pos.x > 326) && particles[i].pos.y > 511){

        score = score + 100;
        particles = [];
        gameState = 1;
        lives--;

      } else if (particles[i].pos.x < 300 && particles[i].pos.y > 511){

        score = score + 500;
        particles = [];
        gameState = 1;
        lives--;

      } else if ((particles[i].pos.x > 601 && particles[i].pos.x < 1000) && particles[i].pos.y > 511){

        score = score + 200;
        particles = [];
        gameState = 1;
        lives--;
      }
    }
  }


  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (lives <= 0){
    stroke(200,0,0);
    strokeWeight(4);
    gameState = 3;
    fill(0);
    textSize(40);
    text("GAME OVER", 300, 300);
  }
}

function mousePressed(){
  if (gameState == 1){
    particles.push(new Particle(mouseX, 10,10));
    gameState = 0;
  }
}

// function keyPressed(){
//   if (key === ' '){
//     console.log(lives);
//   }
  
//   if (key === 'd'){
//     lives = 0;
//   }
// }