var bA, bB,bC,bD;
var bAI, bBI, bCI,bDI;
var bg1, bg2;
var bg1I, bg2I;
var startI, start;
var gameState="Q1";

function preload()
{
   bAI=loadImage("Images/boxA.jpg");
   bBI=loadImage("Images/boxB.jpg");
   bCI=loadImage("Images/boxC.jpg");
   bDI=loadImage("Images/boxD.jpg");

   bg1I=loadImage("Images/backgroundA.jpg");
   bg2I=loadImage("Images/backgroundB.jpg");

   startI=loadImage("Images/Start.jpg");
}

function setup()
{
   var canvas=createCanvas(displayWidth - 30 ,displayHeight - 95);

    bA=createSprite(330,590,100,50);
    bA.addImage(bAI);
    bA.scale=0.22;
    bB=createSprite(330,420,100,50);
    bB.addImage(bBI);
    bB.scale=0.22;
    bC=createSprite(1015,590,100,50);
    bC.addImage(bCI);
    bC.scale=0.22;
    bD=createSprite(1015,420,100,50)
    bD.addImage(bDI);
    bD.scale=0.22;
}

function draw()
{
    background(bg2I);

    boxPressed();

    drawSprites();

    if(gameState==="Q1")
    {
        //Q.
        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("What are Mars' two moons called?",displayWidth/2 - 350,displayHeight/3-100);

        //bA
        textSize(20);
        /*fill("black");
        stroke(5);*/
        text("Callisto and Titan",253,600);

         //bB
        /*textSize(30);
        fill("black");
        stroke(5);*/
        text("Europa and Io",253,430);

        //bC
        /*textSize(30);
        fill("black");
        stroke(5);*/
        text("Phobos and Deimos",970,590);

        //bD
        /*textSize(30);
        fill("black");
        stroke(5);*/
        text("Venus and Mercury",970,430);
    }
    
    if(gameState==="Q2")
    {
        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("The law of conservation of energy states that when one form of energy is transformed to another,",displayWidth/2 - 350,displayHeight/3-100);  
    }
}
function boxPressed()
{
    if(mousePressedOver(bA))
    {
        background("black");
    }

    if(mousePressedOver(bB))
    {
        background("black");
    }

    if(mousePressedOver(bC))
    {
        background("black");
    }

    if(mousePressedOver(bD))
    {
        background("black");
    }
}