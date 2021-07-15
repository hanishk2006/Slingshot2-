const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    getBackground (); 
    polygon_image = loadImage("sprites/polygon.png");  
}
var score = 0; 
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon = Bodies.circle(50,200,80); 
    World.add(world,polygon); 

    slingshot1 = new SlingShot(this.polygon,{x:100,y:200}); 
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,340,70,70);
    box4 = new Box(920,340,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,350,70,70);
    box6 = new Box(700,260, 70, 70); 
    box7 = new Box(920,210,70,70); 
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
   
}

function draw(){
    background("Red");
    fill("white") 
    textSize(30)  
    text ("Score"+score,800,50)
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    //ground.display();
    //pig1.display();
    //log1.display();
    //pig1.score(); 
    //pig3.score(); 
    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();
    box5.display();
    box6.display(); 
    box7.display(); 
    //log4.display();
    //log5.display();
    //bird.display();
    //platform.display();
    //log6.display();
    slingshot1.display(); 
    imageMode(CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,40,40); 

}

function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot1.attach(this.polygon);
    }
}
 async function getBackground(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJ = await response.json()
    console.log(responseJ); 
    var date = responseJ. datetime; 
    console.log(date)
    var hr = date.slice(11,13); 
    console.log(hr)
    if(hr>=06 && hr<=19){

        bg = "sprites/bg.png"

    }
    else {
        bg = "sprites/bg2.jpg"

    }
    backgroundImg = loadImage(bg)
}