img="";
status= "";

function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: detecting object";
}
function preload()
{
    img= loadImage('bed rooom.png');
}
function draw()
{
    image(img, 0 , 0, 600, 400);
 
}
function modelLoaded()
{
    console.log("modelLoaded");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}