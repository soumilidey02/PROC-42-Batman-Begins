const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var engine, world;
var umbrella;
var maxDrops = 100;
var drops = [];
var lightning, lImg, lImg1, lImg2;

function preload(){
    lImg = loadImage("lightning.png");
    lImg1 = loadImage("lightning1.png");
    lImg2 = loadImage("lightning2.png");
}

function setup(){
   canvas = createCanvas(480, 800);
   engine = Engine.create();
   world = engine.world;

   for(var i = 0; i < maxDrops; i++) {
    drops.push(new Drop(random(0, 480), random(0, 480)));
}

   umbrella = new Umbrella(240, 565);
}

function draw(){
    background("black");
    Engine.update(engine);

    for(var i = 0; i < drops.length; i++){
        drops[i].display();
    }

    umbrella.display();

    for(var i = 0; i < drops.length; i++){
        drops[i].update();
      }

      if (frameCount % 60 === 0) {

        lightning = createSprite(random(0, 480), 90, 50, 50);
    
        var rand = Math.round(random(1, 3));
        switch (rand) {
          case 1:
            lightning.addImage("lightning", lImg);
            break;
          case 2:
            lightning.addImage("lightning1", lImg1);
            break;
          case 3:
            lightning.addImage("lightning2", lImg2);
            break;  
          default:
            break;
      }

      lightning.life = 12;
    }

    drawSprites();
}   