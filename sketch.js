const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
//const Events = Matter.Events;

var ground;

var divisions = [];

var divBalls1 = [];
var divBalls2 = [];
var divBalls3 = [];
var divBalls4 = [];
var divBalls5 = [];

var balls;

var i;

var a, b, c, d, e, f, g;

var gameState = "start";

var score = 0;

var count = 0;

function setup() {
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250, 470, 500, 20);
   
    //we are asking the computer to create divisions as long as i is less than width
    for(i = 0; i<= width; i = i + 120) {
        divisions.push(new Division(i, 380, 10, 150));
    }
    
    for(i = 0; i<= width; i = i + 45) {
        divBalls1.push(new divBall(i, 50, 10))
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls2.push(new divBall(i, 100, 10));
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls3.push(new divBall(i, 150, 10));
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls4.push(new divBall(i, 200, 10));
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls5.push(new divBall(i, 250, 10));
    }

    Engine.run(engine);
}

function draw() {
    background("black");

    ground.display();
    
    noStroke();
    text("Score : " + score, 20, 20);

    if (gameState=="end") {
        text("GameOver", 150, 250);
    }

    //there should be some ball on the ball array then only score should increase
    if(balls!=null) {
        balls.display();

        if(balls.body.position.y > 500) {
            //if the balls x position is less than 300
            //then score should become increased by 500
            //the balls should become null
            //if the count is greater than or equal to 5 then the gamestate should become end
            if(balls.body.position.x < 50) {
                score+= 500;
                balls = null;
                if(count>= 5) {
                    gameState = "end";
                }
            }
        
            //if ball x position is less than 600 and greater than 300
            //then score should increase by 200
            //the balls should become null
            //if the count is greater than or equal to 5 then the gamestate should become end          
            if(balls.body.position.x > 50 && balls.body.position.x < 150) {
                score+= 300;
                balls = null;
                if(count>= 5) {
                    gameState = "end";
                }
            }
        
            //if ball x position is less than 900 and greater than 601
            //then score should increase by 100
            //the balls should become null
            //if the count is greater than or equal to 5 then the gamestate should become end
            if(balls.body.position.x > 150 && balls.body.position.x < 250) {
                score+= 200;
                balls = null;
                if(count>= 5) {
                    gameState = "end";
                }
            }

            //if ball x position is less than 900 and greater than 601
            //then score should increase by 100
            //the balls should become null
            //if the count is greater than or equal to 5 then the gamestate should become end
            if(balls.body.position.x > 150 && balls.body.position.x < 250) {
                score+= 200;
                balls = null;
                if(count>= 5) {
                    gameState = "end";
                }
            } 
        }
    }

    //divisions.length is the length of the array divisions
    for(a = 0; a < divisions.length; a++) {
        divisions[a].display();
    }

    for(b = 0; b < divBalls1.length; b++) {
        divBalls1[b].display();
    }

    for(c = 0; c < divBalls2.length; c++) {
        divBalls2[c].display();
    }

    for(d = 0; d < divBalls3.length; d++) {
        divBalls3[d].display();
    }

    for(e = 0; e < divBalls4.length; e++) {
        divBalls4[e].display();
    }

    for(f = 0; f < divBalls5.length; f++) {
        divBalls5[f].display();
    }
      
    //if(frameCount%60 === 0) {
    //   balls.push(new Ball(random(100, 400), 20, 10));
    //}
}

function mousePressed() {
    if(gameState!=="end") {
        count++;
        score++;
        balls = new Ball(mouseX, 10, 10);
    }
}
