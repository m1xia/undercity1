let canvas;


let undercity;
let poster1;
let poster2;
let fondo;
let tren;
let hueso;
let auto;
let star;
let angel;
let blanco;
let blanco1; 
let blue;
let nova;
let nova1;
let nova2;
let verde;
let moto;
let night;
let cat;
let shine;
let eye;


let a;
let slider;
let valSlider;
let rgbColor;
let button;
let txtInput;
let txt;

let r;
let g;
let b;



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }



function setup(){
 canvas = createCanvas(windowWidth, windowHeight); 
 canvas.position(0, 0); 

 undercity = loadImage("imagenes/undercity.jpg");
 poster1 = loadImage ("imagenes/poster1.png");
 poster2 = loadImage ("imagenes/poster2.png");
 fondo = loadImage ("imagenes/fondo.jpg");
 tren = loadImage ("imagenes/tren.gif");
 hueso = loadImage ("imagenes/hueso.png");
 auto = loadImage ("imagenes/auto.gif");
 star = loadImage ("imagenes/star.gif");
 angel = loadImage ("imagenes/angel.gif");
 blanco = loadImage ("imagenes/blanco.png");
 blanco1 = loadImage ("imagenes/blanco2.png");
 blue = loadImage ("imagenes/blue.gif");
 nova = loadImage ("imagenes/nova.jpg");
 nova1 = loadImage ("imagenes/nova1.jpg");
 nova2 = loadImage ("imagenes/nova2.jpg");
 verde = loadImage ("imagenes/verde.gif");
 moto = loadImage ("imagenes/moto.gif");
night = loadImage ("imagenes/night.jpg");
cat = loadImage ("imagenes/cat.jpg")
shine = loadImage ("imagenes/shine.png");
eye = loadImage ("imagenes/eye.png");

textFont('Rubik Glitch');


a = createA('https://www.instagram.com/mile.xia_/', 'MILEXIA');
a.position(1500, 450);
a.style('font-size', '22px');
a.style('color', 'red');

slider = createSlider(50, 300, 100);
slider.position(1300, 580);
slider.style('width', '300px');


txtInput = createInput('????');
txtInput. position(1300, 600);
txtInput.size(200);
txtInput.style('color', 'red');



button = createButton('click me');
button.position(1550, 300);
button.mousePressed(cambiarColor);

r= color (255, 0, 0);
g = color (0, 255, 0);
b = color (0,0, 255);


rgbColor = color(random(255), random(255), random(255));


}



function cambiarColor(){ 
  rgbColor = color(random(255), random(255), random(255));

}


function draw(){
  noTint ();
image (fondo, 0, 0 , windowWidth, windowHeight);
stroke (rgbColor);
strokeWeight (3);
fill(0, 170);
  rect (-5,0, 355, windowHeight);

  
  noTint ();
image (hueso, -5,0, 355, windowHeight);
if(mouseX < 355){
  tint (0, 255, 255);
  image (hueso, -5,0, 355, windowHeight);

  if (mouseIsPressed) {
    tint (255, 0, 0);
image (hueso, -5,0, 355, windowHeight);
stroke(255);
strokeWeight(3);
fill(255, 0, 0);
textSize (80);
text("HUMAN", -10, 220);
    text("are you?", -10, 490);
}
}

noTint ();
image (cat, 210, 570, 480, 170);
rect (210, 570, 480, 170);
if(mouseX < 690 && mouseY < 740){
  if (mouseX>210 && mouseY > 570){
    image (cat, 210, 570, 480, 170);
    
    if (mouseIsPressed) {
      image (blue, 210, 570, 480, 170);
    }
}}


image (poster1, 380,0, 190, 304);
rect (380,0, 190, 304);
if(mouseX < 570 && mouseY < 304){
  if (mouseX>380 && mouseY > 0){
image (poster1, 380,0, 190, 304);
    if (mouseIsPressed) {
      image (tren, 380,0, 190, 304);
    fill (255, 0, 0);
      textSize(15);
      text("BTBT", 390, 250);
      text("BTBT", 390, 270);
      text("BTBT", 390, 290);
    }     
}}


image (undercity, 650, 160, 480, 300);
	rect (650, 160, 480, 300);
	if(mouseX < 1130 && mouseY < 460){
		if (mouseX>650 && mouseY > 160){
image (undercity, 650, 160, 480, 300);
			
			if (mouseIsPressed) {
				image (auto, 650, 160, 480, 300);
				fill (255, 0, 0);
				textSize(25);
				text("It doesn't hurt me", 740, 250);
				}
}}

image (poster2, 1270,250, 190, 304);
rect (1270,250, 190, 304);
if(mouseX < 1460 && mouseY < 554){
  if (mouseX>1270 && mouseY > 250){
     image (poster2, 1270,250, 190, 304);

if (mouseIsPressed) {
     image (verde, 1270,250, 190, 304);
}
}}



image (night, 830, 590, 290, 170);
rect (830, 590, 290, 170);
if(mouseX < 1120 && mouseY < 760){
  if (mouseX>830 && mouseY > 590){
    image (night, 830, 590, 290, 170);
    
    if (mouseIsPressed) {
      image (moto, 830, 590, 290, 170);
    }
}}



image (nova1, 1290, 0, 350, 170);
noFill();
rect (1290, 0, 350, 170);
if(mouseX < 1640 && mouseY < 170){
  if (mouseX>1290 && mouseY > 0){
    image (nova2, 1290, 0, 350, 170);
    
    if (mouseIsPressed) {
      image (star, 1290, 0, 350, 170);
    }
}}
 

fill (255); 
textSize (35);
stroke (0);
text("my eyes are on you", 400, 660);
text("And if I only could", 490, 100);
text("I'd make a deal with God", 760, 80);
text("I am fading", 1200, 560);
text("Be running up that road", 840, 120);
textSize (25);
  text("2020002", 1340, 210);
  text("human", 360, 370);
  text("alien", 360, 390);
  text("human", 360, 410);
  text("alien", 360, 430);
  text("human", 360, 450);

textSize (60);
text("PERFECT GIRL", 670, 520);
text("PERFECT GIRL", 750, 570);
image (blanco1, 580, 130, 50, 350);
image (blanco, 1200, 170, 50, 360);



if(mouseX < windowWidth/3 && mouseY < windowHeight/3){
  fill(rgbColor);
  textSize(100);
  text("you're", 250, 100);
  text("727409", 630, 720);
  }
  
  if(mouseX > windowWidth/3 && mouseX < windowWidth/3*2){
    if (mouseY < windowHeight/3 ){
    fill(rgbColor);
    textSize(50);
    text("such a", 750, 120);
    text("V7V", 1350, 420);
    }}
    
    if(mouseX > windowWidth/3*2 && mouseY<windowHeight/3){
      fill(rgbColor);
      textSize(90);
      text("strange", 1200, 180);
      textSize(200);
      text("BTBT", 12, 780);
      }
      
      if(mouseX < 600 && mouseY >250){
        fill(rgbColor);
        textSize(100);
        text("girl", 150, 320);
        }
      




 //
 
 
 if(mouseX < windowWidth/3 && mouseY > windowHeight/3*2){
  fill(rgbColor);
  textSize(50);
  text("I wanna", 250, 700);
  }
  
  if(mouseX > windowWidth/3 && mouseX < windowWidth/3*2){
    if (mouseY > windowHeight/3*2 ){
    fill(rgbColor);
    textSize(50);
    text("such a", 750, 700);
    }}
    
    if(mouseX > windowWidth/3*2 && mouseY > windowHeight/3*2 ){
      fill(rgbColor);
      textSize(150);
      text("strange", 1200, 700);
      text("PASTEL",-10, 600);
      }

        
      
      






//
for(let y = 0; y<=50; y +=7){
  for(let x= 10; x<= windowWidth; x +=50){
  strokeWeight (4);
    stroke(rgbColor);
  line(x, y, x, 10);
  }
  }
    
      for(let y = 0; y<=10; y +=10){
  for(let x= 0; x<= windowWidth; x +=10){
   line(x, y, x, 10);
  }
  }
      
    
  //
    
    for(let y = windowHeight-10; y<=windowHeight; y +=10){
  for(let x= 0; x<= windowWidth; x +=10){
    line(x, y, x, windowHeight-10);
  }
  }
    for(let y = windowHeight-10; y<=windowHeight; y +=10){
  for(let x= 0; x<= windowWidth; x +=50){
  line(x, y, x, windowHeight-50);
  }
  }


  valSlider = slider.value();
  txt = txtInput.value();
  textSize(valSlider); 
  text(txt, 1140, 800);

  
 
  image (angel, mouseX-30, mouseY, 100, 80);
  

}
