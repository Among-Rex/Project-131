img = "";

function preload() {
    img = loadImage('kitchen.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Cups", 195, 205);
    text("Window", 30, 95);
    noFill();
    stroke("#FF0000");
    //no.1 = left and right
    //no.2 = up and down
    //no.3 = length
    //no.4 = width.
    rect(190, 190, 250, 70);
    rect(22, 80, 155, 120);
}

function home() {
    
}