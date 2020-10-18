var n = 0;
var c = 2;

var angle;

function setup() {
  createCanvas(600,600);
  background(0);
  //angleMode(DEGREES);
  colorMode(RGB);
  angle = prompt("Give an angle between 0 and 360 degrees.");
}

function draw() {
  for(let i=1;i<=10;i++)
  {
    var a = n * angle;
    var r = c * sqrt(n);

    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;

    fill(y,r,x);
    noStroke();
    ellipse(x, y, 4, 4);
    n++;
  }
}
