let capture;
let microphone;
let micLevel;
let balls = [];


function setup() {
  frameRate(10);
  let canvas = createCanvas(windowWidth,windowHeight);
  capture=createCapture(VIDEO);
  capture.hide();
  canvas.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  for(let i =width/2-500;i<width/2+500;i++){
    balls.push(new Ball());
  }


  
}


function draw() {
  background(0);
  imageMode(CENTER);
  rectMode(CENTER);
  for(let i =0;i<100;i++){
    push();
    noFill();
    strokeWeight(2);
    stroke(0,100,0,85);
    rect(width/2,height/2,800+5*i,600+5*i);
    pop();
  }
  
  image(capture,width/2,height/2,800,600);
  micLevel=mic.getLevel();
  noFill();
  push();
  stroke('orange');
  fill(100,0,100,10);
  ellipse(width/2,height/2,1000*micLevel,1000*micLevel);
  pop();
 
 for(let i = 0; i<balls.length;i++){
    balls[i].display();
    balls[i].move();
  }
  
  push();
  fill(0,100,0,10);
  stroke(100,0,100);
  rect(width/2,height/2,800,600);
  pop();
  
  push();
  for(let i=0;i<100;i++){
    for(let j=0;j<100;j++){
     fill(200,100,0,95);
     rect(140*i,140*j,30,10);
    }
  }
  pop();
  
  push();
  fill(100,70);
  rect(width/2,height/2,200,100);
  textAlign(CENTER);
  fill(0,50,100);
  text('405272',width/2,height/2);
  pop();
  
  text(micLevel,random(width),random(height));
  
  

}

class Ball {
  constructor(){
    this.x=random(width/2-500,width/2+500);
    this.y=random(height/2-300,height/2-300);
    this.r=1;
    this.xSpeed=20;
    this.ySpeed=20;
    this.size=9;
  }
  
  display(){
    stroke(0);
    fill(0,random(150),random(150),90);
    ellipse(this.x,this.y,3*this.size,this.size);
    text('Gucci',this.x+40,this.y+40);
    text('Terry Tao',this.x+20,this.y+20);
  }
  
  move(){
    if(this.x<width/2-500 || this.x>width/2+500){
      this.xSpeed*=-1;
    }
    
    if(this.y<height/2-300 || this.y>height/2+300){
      this.ySpeed*=-1;
    }
    this.x+=random(this.xSpeed)+10*micLevel;
    this.y+=random(this.ySpeed)+10*micLevel;
 
  }

}