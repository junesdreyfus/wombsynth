//3- Doors/
//by Junes Dreyfus

//About breaking and entering, at different stages of a house's life.

//You are standing in the entrance. Three doors lead to the same room, with 3 variations./
//Which one will you choose/

//The entrance state/
let state = 'room3';
//room 1 default position/
let position = '0';

let SNOW_AMMOUNT = 10000;

let synthVar ={
  qw: 0,
  ty: 0,
  er: 0,
  bn: 0,
}

let touchConsole = "I can't see much..."

let synthCommands = "Q/W T/Y B/N"

let room2textbox ={
  x: 100,
  y: 300,
  width: 500,
  height: 100,
  padding: 100,
  fill: 'rgb(0, 0, 0)',
}

let entrancetextbox ={
  x: -300,
  y: 100,
  r: 170,
  g: 170,
  b: 50,
  fontsize: 20,
}

let room2tone = 'rgb(44,46,44)';


let leftwall ={
  x:-200,
  y:-100,
}
let rightwall ={
  x: 550,
  y:-100
}
let midwall ={
  x: -8,
  y:-50,
  width: 560,
  height: 448,
}
//the first door./
//this one has a window so you can see what's in it/
//If you enter it you will get visual feedback/
let door1 = {
  x: 10,
  y: 10,
  width: 150,
  height: 350,
  fill: 'rgb(214,248,241)',
  floor: 'rgb(57,69,67)',
}
let door2 = {
  //The second door./
  //This one has very little light, you will have to touch (click) on the different objects to get a feel for what they are./
  //Maybe because of low light the object you observe will have to be brought closer to your eyes ?/
  //If you enter you will get textual feedback/

  x: 200,
  y: 10,
  width: 150,
  height: 350,
  fill: 'rgb(43, 45, 43)',
  floor: 'rgb(43, 42, 48)',
}
let door3 = {
  //The third door./
  //This time there is no light at all./
  //Audio feedback ?/
  //Maybe more linear/
  x: 390,
  y: 10,
  width: 150,
  height: 350,
  fill: 'rgb(0, 0, 0)',
  floor: 'rgb(59, 1, 1)',
}

let opacity = 0


let flavortxt = undefined;

let sample1 = undefined;
let sample2 = undefined;
let sample3 = undefined;
let sample4 = undefined;
let sample5 = undefined;
let sample6 = undefined;
let sample7 = undefined;
let sample8 = undefined;
let sample9 = undefined;
let sample10 = undefined;
let sample11 = undefined;

let leftside = undefined;
let rightside = undefined;
let midside = undefined;

let hand = undefined;

  //position 1 2 3
  //each have a view for the 4 cardinals + floor
  //pos1north is default/

let pos0 = undefined;

let pos1down = undefined;
let pos1north = undefined;
let pos1northnorth = undefined;
let pos1south = undefined;
let pos1east = undefined;
let pos1west = undefined;


let pos2down = undefined;
let pos2north = undefined;
let pos2northnorth = undefined;
let pos2east = undefined;
let pos2west = undefined;
let pos2south = undefined;

let pos3down = undefined;
let pos3east = undefined;
let pos3north = undefined;
let pos3west = undefined;
let pos3south = undefined;

let room2_2 = undefined;
let room2_1 = undefined;

let wombview1 = undefined;
let wombview2 = undefined;

function preload(){

  flavortxt = loadJSON("assets/flavortxt.json");

  sample1 = loadSound("assets/sample 1.wav");
  sample2 = loadSound("assets/sample 2.wav");
  sample3 = loadSound("assets/sample 3.wav");
  sample4 = loadSound("assets/sample 4.wav");
  sample5 = loadSound("assets/sample 5.wav");
  sample6 = loadSound("assets/sample 6.wav");
  sample7 = loadSound("assets/sample 7.wav");
  sample8 = loadSound("assets/sample 8.wav");
  sample9 = loadSound("assets/sample 9.wav");
  sample10 = loadSound("assets/sample 10.wav");
  sample11 = loadSound("assets/sample 11.wav");
  
  leftside = loadImage("assets/leftside.png");
  rightside = loadImage("assets/rightside.png");
  midside = loadImage("assets/midside.png");

  pos0 = loadImage("assets/pos0.png");

  hand = loadImage("assets/hand.png");

  pos1down = loadImage("assets/pos1down.png");
 pos1north = loadImage("assets/pos1north.png");
 pos1northnorth = loadImage("assets/pos1northnorth.png");
 pos1south = loadImage("assets/pos1south.png");
 pos1east = loadImage("assets/pos1east.png");
 pos1west = loadImage("assets/pos1west.png");

 
 wombview1 = loadImage("assets/wombview1.png");
 wombview2 = loadImage("assets/wombview2.png");

 //pos2north is default
pos2down = loadImage("assets/pos2down.png");
 pos2north = loadImage("assets/pos2north.png");
 pos2northnorth = loadImage("assets/pos2northnorth.png");
 pos2east = loadImage("assets/pos2east.png");
 pos2west = loadImage("assets/pos2west.png");
 pos2south = loadImage("assets/pos2south.png");

 //pos3east is default
pos3down = loadImage("assets/pos3down.png");
pos3east = loadImage("assets/pos3east.png");
pos3west = loadImage("assets/pos3west.png");
pos3north = loadImage("assets/pos3north.png");
pos3south = loadImage("assets/pos3south.png");

room2_2 = loadImage("assets/room2_2.png");
room2_1 = loadImage("assets/room2_1.png");
}


function setup() {
  createCanvas(1707, 960);
}

function draw() {
  frameRate(8);
  background('rgb(131,121,110)');
  noStroke();
  fadein();
  chgPosition();
  
  //The view slightly adjusts to where the player is looking/
  //and it's sooo subtle/
  let eyeMovementX = map(mouseX, 0, width, 0, 40);
  let eyeMovementY = map(mouseY, 0, height, 0, 20);

  
  
  //drawing the doors/
  if(state === 'entrance' || state === 'entering1' || state === 'entering2' || state === 'entering3'){

    image(rightside, rightwall.x - eyeMovementX/4, rightwall.y + (eyeMovementY/3));
    tint(255, 225);
    }
  
    image(midside, midwall.x + eyeMovementX, midwall.y + eyeMovementY, midwall.width, midwall.height);
    tint(255, 225);

  push();
  fill(door1.fill);
  rect (door1.x+eyeMovementX, door1.y+eyeMovementY, door1.width, door1.height);
  fill(door1.floor);
  rect(door1.x+eyeMovementX, door1.y+(eyeMovementY/2)+door1.height/2, door1.width, (eyeMovementY/2)+door1.height/2);
  fill('rgb(45,42,42)');
  //jesus, lol/
  //overly complicated quad to create illusion of 3D geometry/
  quad(door1.x+eyeMovementX+door1.width, door1.y+eyeMovementY, door1.x+eyeMovementX+door1.width, door1.y+eyeMovementY+door1.height, door1.x+door1.width, door1.y+(eyeMovementY/2)+(door1.height/2), door1.x+door1.width, door1.y+eyeMovementY);
  pop();
  
  push();
  fill(door2.fill);
  rect (door2.x+eyeMovementX, door2.y+eyeMovementY, door2.width, door2.height);
  fill(door2.floor);
  rect(door2.x+eyeMovementX, door2.y+(eyeMovementY/2)+door2.height/2, door2.width, (eyeMovementY/2)+door2.heigh);
    fill('rgb(45,42,42)');
  //overly complicated quad to create illusion of 3D geometry/
  quad(door2.x+eyeMovementX+door2.width, door2.y+eyeMovementY, door2.x+eyeMovementX+door2.width, door2.y+eyeMovementY+door2.height, door2.x+ door2.width, door2.y+(eyeMovementY/2)+(door2.height/2), door2.x+ door2.width, door2.y+eyeMovementY);
  pop();
  
  push();
  fill(door3.fill);
  rect (door3.x+eyeMovementX, door3.y+eyeMovementY, door3.width, door3.height);
  fill(door3.floor);
  rect(door3.x+eyeMovementX, door3.y+(eyeMovementY/2)+door3.height/2, door3.width, (eyeMovementY/2)+door3.height/2);
  fill('rgb(45,42,42)');
  //overly complicated quad to create illusion of 3D geometry/
  quad(door3.x+eyeMovementX+door3.width, door3.y+eyeMovementY, door3.x+eyeMovementX+door3.width, door3.y+eyeMovementY+door3.height, door3.x+ door3.width, door3.y+(eyeMovementY/2)+(door3.height/2), door3.x+ door3.width, door3.y+eyeMovementY);
  pop();

  image(leftside, leftwall.x + eyeMovementX, leftwall.y + eyeMovementY);
  tint(255, 225);

  push();
  fill(entrancetextbox.r, entrancetextbox.g, entrancetextbox.b);
  textSize(entrancetextbox.fontsize);
  text("You're standing in front of three doors. Pick one by scrolling in.          (click to hide)", entrancetextbox.x + eyeMovementX*10, entrancetextbox.y + eyeMovementY*10 , width - 2 * room2textbox.padding, room2textbox.height * room2textbox.padding);
  pop();

if (mouseIsPressed){
  entrancetextbox.x-= 30000;
}


  
 



if (state === "room1"){

  }

if (state === "room2"){

noCursor();
frameRate(5);

touching();



opacity = random(0,5);
tint(255, opacity);
image(room2_1, 0, 0);
tint(255, 5-opacity);
image(room2_2, 0, 0);

tint(255, 255);
image(hand, mouseX, mouseY);

 // A for-loop to count from 0 up to the number of stars
 for (let i = 0; i < SNOW_AMMOUNT; i++) {
  drawSnow();

}


showTouchConsole();

}

if(state === "room3"){

  noCursor();

  //Adding sound to the draw function to not have to deal with big file size and also create synthethizer from looping samples./
//The samples will play with every frame (every .2 seconds).
//I just need to make sure the user interacts first, otherwise the browser blocks the program from playing sound./

synthVar.er = constrain(synthVar.er, -4, 15);
synthVar.qw = constrain(synthVar.qw, -1, 1);
synthVar.bn = constrain(synthVar.bn, -1, 1);
synthVar.ty = constrain(synthVar.ty, -1, 1);




  frameRate(5+synthVar.er);

  push();
  fill(door3.fill);
  rect(0,0,width, height);
  fill(door3.floor);
  rect(0,200, width, 600);
  pop();


  //Synth command should work with a total of 8 buttons.
  //4 pairs of buttons : QW ER TY and BN/

  opacity = random(0,100);

  imageMode(CENTER)
  tint(255, -50+opacity);
  image(wombview2, width/2, height/2);
  imageMode(CENTER)
  tint(255, 100-opacity);
  image(wombview1, width/2, height/2);
  
for (let i = 0; i < SNOW_AMMOUNT; i++) {
  drawSnow();
}


synthCommand();

//Q cancels W out, B cancels N out..../
//

 
  if(keyIsPressed && key === 'q'){
    synthVar.qw+=1;
  }
  if(keyIsPressed && key === 'w'){
    synthVar.qw-=1;
  }

  if(keyIsPressed && key === 'b'){
    synthVar.bn+=1;
  }
  if(keyIsPressed && key === 'n'){
    synthVar.bn-=1;
  }

  if(keyIsPressed && key === 't'){
    synthVar.ty+=1;
  }
  if(keyIsPressed && key === 'y'){
    synthVar.ty-=1;
  }

    //ER manipulates time. E makes framerate (thus sound trigger) faster R makes framerate slower (it seems to stop at 1fps)
    if(keyIsPressed && key === 'e'){
      synthVar.er+=1;
    }
    if (keyIsPressed && key === 'r'){
      synthVar.er-=1;
    }
  

//G and H are triggers, right foot sound, left footsound respectively/
  if (keyIsPressed && key === 'g'){
    sample10.play();
  }
  if (keyIsPressed && key === 'h'){
    sample11.play();
  }

  if (keyIsPressed && key === 'j'){
    sample7.play();
  }
  if (keyIsPressed && key === 'k'){
    sample4.play();
  }

  if (keyIsPressed && key === 'l'){
    sample3.play();
  }



if (synthVar.bn < 0){
  sample6.play();
}

if (synthVar.bn > 0){
  sample5.play();
}


if (synthVar.qw < 0){
sample9.play();
}
if (synthVar.qw > 0){
  sample8.play();
}

if (synthVar.ty < 0.5){
  sample1.play();
  }
  if (synthVar.ty > 0){
    sample2.play();
  }
}

}

function showTouchConsole(){
  push();
  stroke(255, 255, 255);
  fill(room2textbox.fill);
  rect (room2textbox.x, room2textbox.y, room2textbox.width, room2textbox.height);
  pop();

  push();
  fill(255);
  textSize(12);
  text(touchConsole, room2textbox.x + room2textbox.padding, room2textbox.y + room2textbox.padding , room2textbox.width - 2 * room2textbox.padding, room2textbox.height * room2textbox.padding);
  pop();

}

function synthCommand(){


  // push();
  // fill('rgb(82, 11, 11)');
  // textSize(100);
  // textStyle(BOLD);
  // text("IT'S PITCH BLACK IN HERE. I CAN'T SEE A THING", 0, 0, width - 2 * room2textbox.padding, room2textbox.height * room2textbox.padding);
  // pop();

  push();
  textStyle(BOLD);
  textSize(50);
  fill('rgb(138, 21, 144)');
  text("p r e s s", 50, height - 200);
  textSize(150);
  fill('rgb(107, 15, 15)');
  textSize(200);
  text(synthCommands, 0, height - room2textbox.padding*2 , width - 2 * room2textbox.padding);
  textSize(50);
  fill('rgb(138, 21, 144)');
  verticalText("press", 1550, 100);
  textSize(150);
  fill('rgb(82, 11, 11)');
  verticalText("GHJKL", 1600, 100);
  
  textStyle(BOLD);
  textSize(50);
  fill('rgb(138, 21, 144)');
  text("p r e s s", 30, 30);
  fill('rgb(107, 15, 15)');
  textSize(80);
  text("R to slow down / E to speed up", 0, 90);
  pop();
}

function fadein(){
  opacity += 51;
  opacity = constrain(opacity, 0, 255)
}

function fadeout(){
  opacity += 51;
  opacity = constrain(opacity, 0, 255)
}

function drawSnow() {
  push();
  const x = random(0, width);
  const y = random(0, height);
  const diameter = random(3, 12);
  fill('rgb(60, 7, 7)');
  square(x, y, diameter);
  pop();
}

function chgPosition(){
  //player can press space to walk in a given direction
  if(state === "room1"){

    if (position === '0' && (keyIsDown(32) && keyIsDown(78)) && opacity>250){
      opacity = 0;
      position = '1'
      
    }
    if (position === '1' && (keyIsDown(32) && keyIsDown(78)) && opacity>250){
      opacity = 0;
      position = '2'
    }
    if (position === '1' && (keyIsDown(83) && keyIsDown(32)) && opacity>250){
      opacity = 0;
      position = '0';
      state = 'entrance';
    }
    if (position === '2' && (keyIsDown(32) && keyIsDown(69)) && opacity>250){
      opacity = 0;
      position = '3'
    }
  }

}

function mouseWheel(){
  //If mouse is scrolled while hovering on top of the left door you will be entering that one./
  if((mouseX > door1.x && mouseX < door1.x+door1.width && event.delta > 0 && state === 'entrance' )||( event.delta > 0 && state === 'entering1')){
    //The state is now set to entering1, a transitional state/
    //no turning back now/
  state = 'entering1';
    
  door1.y-=3;
  door1.x-=0.9;
  door1.width+=15;
  door1.height+=15;
  door2.y-=3;
  door2.x+= 15*1.3;
  door3.x+=30*1.3;
  door2.width+=15;
  door2.height+=15;

  leftwall.x-=15;
  rightwall.x+=30*1.3;
  midwall.x-=15;
  midwall.width+=50;
  midwall.height+=50;

  entrancetextbox.fontsize+=15
    
    if (door1.x < -15 && door1.width >width+15){
      state = 'room1';
      opacity = 0;
    }
    //state changes to room1 once we've fully entered/
  }
     
    if((mouseX > door2.x && mouseX < door2.x+door2.width && event.delta > 0 && state === 'entrance' )||( event.delta > 0 && state === 'entering2')){
    //The state is now set to entering2, a transitional state/
    //no turning back now/
  state = 'entering2';

  door2.y-=3;
  door2.x-=7;
  door2.width+=15;
  door2.height+=15;
  door1.x-=15;
  door1.y-=3;
  door1.height+=15;
  door3.x+=15;
  door3.y-=3;
  door3.height+=15;

  leftwall.x-=15;
  rightwall.x+=30*1.3;
  midwall.x-=15;
  midwall.width+=50;
  midwall.height+=50;

  entrancetextbox.fontsize+=15
    //    
  if (door2.x < -50 && door2.width >width+15){
  state = 'room2';
    //state changes to room2 once we fully entered/
    }
  }
  
      if((mouseX > door3.x && mouseX < door3.x+door3.width && event.delta > 0 && state === 'entrance') || (event.delta > 0 && state === 'entering3')){
    //The state is now set to entering3, a transitional state/
    //no turning back now/
  state = 'entering3';

  door3.y-=3;
  door3.x-=15/1.1;
  door3.width+=15;
  door3.height+=15;
  door1.x-=25;
  door1.y-=3;
  door1.height+=15;
  door2.x-=25;
  door2.y-=3;
  door2.height+=15;
  door2.width+=10;

  leftwall.x-=15;
  rightwall.x+=30*1.3;
  midwall.x-=15;
  midwall.width+=50;
  midwall.height+=50;
  
  entrancetextbox.fontsize+=15

  //State changes to room3 once we've fully entered/
  if (door3.x < -50 && door3.width >width+15){
  state = 'room3';
    }
  }

}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }}


function touching(){
if ( mouseIsPressed === true){
const touchData = random(flavortxt.touchConsole);
touchConsole = touchData;
 //touchConsole = random(flavortext.touchConsole);
}
}

function verticalText(t, x, y){
  push();
  const vt = t.split('').join('\n');
  text(vt, x, y);
  pop();
}

