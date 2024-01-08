leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(400, 250);

    canvas = createCanvas( 400, 400);
    canvas.position(1000, 250);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPose);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
     
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        
        difference = floor( leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX +" rightwrist =  "+ rightWristX +" difference = "+ difference);

    }
}

function draw(){
    background("grey")
    textSize(difference);
    fill("puprle");
    text("sasha", 50, 200);
}