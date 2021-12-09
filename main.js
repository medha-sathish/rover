canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

roverWidth=100;
roverHeight= 100;

roverX=10;
roverY=10;

background_img="mars.jpg";
rover_img = "rover.png";

function add() {
    background = new Image();
    background.onload = uploadBackground;
    background.src = background_img;

    rover = new Image();
    rover.onload = uploadRover;
    rover.src = rover_img; 
}

function uploadBackground() {
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage( rover, roverX, roverY, roverWidth, roverHeight);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed= e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(roverY >=0)
    {
        roverY -=10;//rover_y = rover y -10
        console.log("roverX=" + roverX + " roverY" +roverY);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(roverY <=500)
    {
        roverY +=10;//rover_y = rover y -10
        console.log("roverX=" + roverX + " roverY" +roverY);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(roverX >=0)
    {
        roverX -=10;//rover_y = rover y -10
        console.log("roverX=" + roverX + " roverY" +roverY);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(roverX <=700)
    {
        roverX +=10;//rover_y = rover y -10
        console.log("roverX=" + roverX + " roverY" +roverY);
        uploadBackground();
        uploadRover();
    }
}