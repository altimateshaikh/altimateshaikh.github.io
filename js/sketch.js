
let canvas;

function setup() {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    angleMode(DEGREES);
    //background(225);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}

function draw(){
    background(225);

    rotateX(60);

    noFill();
    stroke(225);

    for (var i = 0; i <50; i++){
        var r = map(sin(frameCount/2),-1,1,100,200)
        var g = map(i, 0, 50, 100, 200 )
        var b =map(cos(frameCount),-1,1,200,100)

        stroke(r,g,b);

        rotate(frameCount / 20)

        beginShape()
        for(var j = 0; j < 360; j+=50){
            var rad = i * 10;
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount * 2 + i * 5) * 60;

            vertex(x,y,z);

        }
        endShape(CLOSE)
    }
    
    
}

// function mouseMoved(){
//    drawthing(mouseX,mouseY);
// }

// function drawthing(lx, ly){
//     strokeWeight();
//     fill(random(200,255),random(200,255),random(200,255));
//     ellipse(lx,ly,30,30);
// }