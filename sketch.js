var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box, edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(0,580,200,30);
    surface1.shapeColor ="red";

    surface2 = createSprite(250,580,200,30);
    surface2.shapeColor = "green";

    surface3 = createSprite(500,580,200,30);
    surface3.shapeColor = "blue";

    surface4 = createSprite(750,580,200,30);
    surface4.shapeColor = "brown";

    //create box sprite and give velocity
    box = createSprite(400,100, 40,40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);




    //add condition to check if box touching surface and make it box
    
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor="red";
        music.play();
    }
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor="green";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor="blue";
        
        music.stop();
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="brown";
        music.play();
    }

    
    
    
    drawSprites();
}
