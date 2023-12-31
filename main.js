leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(600, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX ="+ leftWristX + "rightWristX ="+ rightWristX + "difference =" + difference);
        console.log(results);
    }
}

function preload(){}

function draw(){
    background('purple')
    document.getElementById("square_side").innerHTML = "Length of the text is =" + difference+"px";
    fill ('green');
    textSize(difference);
   text("Aadith", 50, 350);
}