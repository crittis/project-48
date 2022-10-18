var chef;
var eggGroups, batterGroups, chocoGroups, broccoliGroups;
var eggCount = 0;
var batterCount = 0;
var chocoCount = 0;
const END=0;
const PLAY=1;
var gameState = PLAY;
var egg_img, batter_img, chef_img, broccoli_img, choco_img, bg_img, sadchef_img;

function preload(){
    egg_img = loadImage("pics/egg.png");
    batter_img = loadImage("pics/batter.png")
    chef_img = loadImage("pics/chefcollecting-removebg-preview.png")
    broccoli_img = loadImage("pics/broccoli.png")
    choco_img = loadImage("pics/choco.png")
    bg_img = loadImage("pics/kitchen.jpg")
    sadchef_img = loadImage("pics/sadchef.png")
      
}

function setup(){
createCanvas(windowWidth, windowHeight)
chef = createSprite(windowWidth/4, windowHeight-170, 100, 100);
chef.addImage(chef_img)
chef.scale = 2;
eggGroups = new Group()
batterGroups =  new Group()
chocoGroups = new Group()
broccoliGroups = new Group()
}


function draw(){
    background(bg_img)
    if(gameState === PLAY)
    {
    fill("black")
    text("eggCount = "+eggCount,50,100)
    fill("black")
    text("batterCount = "+batterCount,50,50)
    fill("black")
    text("chocoCount = "+chocoCount,50,150)
    if(keyDown("LEFT")){
        chef.x-=5  
    }

    if(keyDown("RIGHT")){
        chef.x += 5
    }    

    if(eggGroups.isTouching(chef)){
        eggCount +=2
    }

    if(batterGroups.isTouching(chef)){
        batterCount +=2
    }

    if(chocoGroups.isTouching(chef)){
        chocoCount +=1
    }
    if(broccoliGroups.isTouching(chef)){
        eggCount -=4
        batterCount -=4
        chocoCount -=4
    }

    if(eggCount === -100 || batterCount === -100 || chocoCount === -100){
        gameState = END
    }
    }
    else if(gameState === END){
        eggGroups.setVelocityYEach(0);
        batterGroups.setVelocityYEach(0);
        chocoGroups.setVelocityYEach(0);
        broccoliGroups.setVelocityYEach(0);
        eggCount = 0;
        batterCount = 0;
        chocoCount = 0;
        eggGroups.destroyEach();
        batterGroups.destroyEach();
        chocoGroups.destroyEach();
        broccoliGroups.destroyEach();
        chef.addImage(sadchef_img);
        chef.scale = 0.6;
        fill("red")
        text("NO BROCCOLIS PLEASE.",700, 350);
        
    }

    
    batters();
    eggs();
    chocos();
    broccoli();
    reset();
    drawSprites()
}

function batters(){
    if(frameCount % 80 === 0 ){
    var batter = createSprite(Math.round(random(200,1000)),50,20,50);
    batter.addImage(batter_img);
    batter.scale = 0.4
    batter.velocityY = 4;
    batter.lifetime = 140;
    batterGroups.add(batter);
    }
}
 function eggs(){
     if(frameCount % 90 === 0){
         var egg = createSprite(Math.round(random(200,1500)),20,15,20);
         egg.addImage(egg_img)
         egg.scale = 0.2
         egg.velocityY = 3;
         egg.lifetime = 160;
         eggGroups.add(egg);
     }
 }
 function chocos(){
     if(frameCount % 80 === 0){
         var choco = createSprite(Math.round(random(100,2000)),20,20,20);
         choco.addImage(choco_img)
         choco.scale = 0.2
         choco.velocityY = 3;
         choco.lifetime = 150;
         chocoGroups.add(choco);

     }
 }  
 function broccoli(){
     if(frameCount % 60 === 0){
         var broccoli = createSprite(Math.round(random(150,1500)),50,50,50);
         broccoli.addImage(broccoli_img)
         broccoli.scale = 0.3
         broccoli.velocityY = 6;
         //broccoli.lifetime = 170;
         broccoliGroups.add(broccoli);
     }
 }
 function reset(){
     if(keyDown("SPACE")){
     gameState = PLAY;
     eggCount = 0;
     batterCount = 0;
     chocoCount = 0;
     chef.addImage(chef_img)
     chef.scale = 2;
     }
 }