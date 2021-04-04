var acornImage;
var autumnImage, winterImage;
var hitImage, jumpingImage, runningImage;
var branchGroup, branch1Image, branch2Image, branch3Image;
var ground;
var count;

//initiate Game States
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
    acornImage = loadImage ('Images/acorn.png');
    autumnImage = loadImage ('Images/autumn-park.jpg');
    hitImage = loadImage ('Images/hit-squirrel.png');
    jumpingImage = loadImage ('Images/jumping-squirrel.png');
    runningImage = loadImage ('Images/running-squirrel.png');
    branch1Image = loadImage ('Images/tree-branch-1.png');
    branch2Image = loadImage ('Images/tree-branch-2.png');
    branch3Image = loadImage ('Images/tree-branch-3.png');
    winterImage = loadImage ('Images/winter-park.jpg');
} 

function setup() {
    createCanvas (900,600);

    ground = createSprite (450,590,1800,30);
   //ground.visible = false;

    squirrel = createSprite (100,535,75,75);
    squirrel.addImage (runningImage);
    squirrel.scale = 0.06;

    acornGroup = new Group();
    branchGroup = new Group();
}

function draw() {
    background (autumnImage);
    
    console.log(squirrel.y);

    if(gameState === PLAY){

    //scoring
    count = count + Math.round(World.frameRate/50);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && squirrel.y >= 510){
      squirrel.velocityY = -12 ;
      squirrel.addImage(jumpingImage);
      //squirrel.scale = 2;
    }

      //spawn the acorns
    spawnAcorns();
  
    //spawn obstacles
    spawnBranches();
    
    //End the game when trex is touching the obstacle
    if(branchGroup.isTouching(squirrel)){
      gameState = END;
    }
  }

    if(gameState === END){
      //set velcity of each game object to 0
      squirrel.velocityY = 0;
      branchGroup.setVelocityXEach(0);
      branchGroup.setVelocityXEach(0);
    
      //change the squirrel animation
      squirrel.addImage(hitImage);
      squirrel.scale = 2;
    
      //set lifetime of the game objects so that they are never destroyed
      branchGroup.setLifetimeEach(-1);
      acornGroup.setLifetimeEach(-1);
    }

    //stop squirrel from falling down
     squirrel.collide(ground);
  

    //add gravity
    squirrel.velocityY = squirrel.velocityY + 0.2;

    drawSprites();
  }

function spawnAcorns() {
  if (frameCount %100 === 0) {
    rand = Math.round(random(350,400));
    var acorn = createSprite(890,rand,40,10);
    acorn.addImage(acornImage);
    acorn.velocityX = -5;
    acorn.scale = 0.1;
    acornGroup.lifetime = 130;
    acornGroup.add(acorn);
  }
}

function spawnBranches() {
    if (frameCount %100 === 0) {
      var branch = createSprite(890,570,40,10);
      branch.velocityX = -5;
      rand = Math.round(random(1,3));
      switch(rand){
          case 1: branch.addImage(branch1Image);
          break;
          case 2: branch.addImage(branch2Image);
          break;
          case 3: branch.addImage(branch3Image);
          break;
      }
      branch.scale = 0.2;
      branchGroup.lifetime = 130;
      branchGroup.add(branch);
    }
}