var acornImage;
var autumnImage;
var hitImage;
var jumpingImage;
var runningImage;
var branch1Image;
var branch2Image;
var branch3Image;
var winterImage;
var ground;

function preload(){
    acornImage = loadImage ('../Images/acorn.png');
    autumnImage = loadImage ('../Images/autumn-park.jpg');
    hitImage = loadImage ('../Images/hit-squirrel.png');
    jumpingImage = loadImage ('../Images/jumping-squirrel.png');
    runningImage = loadImage ('../Images/running-squirrel.png');
    branch1Image = loadImage ('../Images/tree-branch-1.png');
    branch2Image = loadImage ('../Images/tree-branch-2.png');
    branch3Image = loadImage ('../Images/tree-branch-3.png');
    winterImage = loadImage ('../Images/winter-park.jpg');
} 

function setup() {
    createCanvas (900,600);

    ground = createSprite (450,600,1800,50);
    ground.visible = false;

    squirrel = createSprite (100,535,75,75);
    squirrel.addImage (runningImage);
    squirrel.scale = 0.06;
}

function draw() {
    background (autumnImage);
    ground.velocityX = -3;
    if (ground.x < 0) {
        ground.x = ground.width/2;
      }
    drawSprites();
}
