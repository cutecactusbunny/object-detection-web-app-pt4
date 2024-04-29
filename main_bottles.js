function preload(){
    img = loadImage("water bottles pic copy.webp");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#338ED4");
    text("Meerkat", 45, 75);
    noFill();
    stroke("#338ED4")
    rect(30, 60, 450, 350 );

    fill("#D133D4");
    text("Other Meerkat", 320, 120);
    noFill();
    stroke("#D133D4")
    rect(300, 90, 270, 320 );

}