var bg
var cricketPlayer



function preload(){
    bg = loadImage("bg.png")
  //(cricketPlayer = loadImage(""))

}


function setup(){
    createCanvas(1000,700);

    frameRate(50);


}


function draw(){
    //background(bg);
    image(bg, 0,0 )


    drawSprites();
}