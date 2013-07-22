
var car = document.getElementById("car");
var canvas = document.getElementById("track");
var posX = car.offsetLeft;
var posY = car.offsetTop;

var rotation = 0;

//car movement parameters
var acceleration = 0;
var turnPower = 4;
var gear = 0; //gear 0 1 2 3 4 5 6(reverse)
var topSpeed = 180;
var topReverse = 100;
var speedX = 0;
var speedY = 0;
var speed = 0;
var carX = 0;
var carY = 0;
//------------------------

var track;
var frictionAcc = 0;
var surfaceAcc = 0;
var movement;
var observer;
var dash;
var raceTimer;
var raceTime=0;

var xCoor;
var yCoor;

var fps=100;

window.onload = function(){
	movement = window.setInterval(function(){ moveCar(); },1000/fps); 
	dash = window.setInterval(updateDashBoard,100) ; 
	layTrack(); 
	observer = window.setInterval(function(){ observePosition();},1000/fps)
};

//show speedometer on car dashboard
function updateDashBoard(){
	
	var spr = 120+Math.abs(speed)/2;
	document.getElementById('meter').style.webkitTransform = "rotate("+ spr +"deg)";
	document.getElementById('hideM').innerHTML = Math.round(speed);
	document.getElementById('timer').innerHTML = raceTime;

}

//observe the current position of the car, friction will depend on where the car is
function observePosition(){

	carX = posX + 10;	//the centre of the car
	carY = posY + 5;
	var context = canvas.getContext('2d');
	var imgd = context.getImageData(carX, carY, 1, 1); //getting pixel data on that position
	var pix = imgd.data;
	
	var r = pix[0];
	var g = pix[1];
	var b = pix[2];
	
	//now if the color is different from that of the track, do something
	
	if((r>49 && r<88) && (g>49 && r<88) && (b>49 && b<88 )){
		document.getElementById('msg').innerHTML = "ON";
		frictionAcc = 0.1;
		surfaceAcc = 0.5;		
	}
	else{
		document.getElementById('msg').innerHTML = "OFF";
		frictionAcc = 4;	//make life hell, off the track!!
		surfaceAcc = 0.25;	
	}

	//	document.getElementById('timer').innerHTML = r+" "+g+" "+b;
	//finish line 85 85 68
	if(r==85 && g==85 && b==68){
		document.getElementById('msg').innerHTML = "FIN";
		window.clearInterval(raceTimer);

	}

}

//update car coordinates
function moveCar(){
				
	speed += acceleration;
	speedX = Math.cos(rotation*3.14/180)*speed;
	speedY = Math.sin(rotation*3.14/180)*speed;
	
	posX += speedX/50;
	posY += speedY/50; 
	car.style.webkitTransform = "rotate("+rotation+"deg)";
	car.style.left = posX+"px";
	car.style.top = posY+"px";
	
}

//bind keys
document.addEventListener('keydown',function(e){
	// -> 39
	// <- 37
	// UP 38
	e.preventDefault();
//document.getElementById('timer').innerHTML = e.keyCode;


	if(e.keyCode == "39"){ //turnLeft
		rotation += turnPower*((Math.min(speed,20))/20);
		rotation %= 360;
	}
	if(e.keyCode == "37"){ //turnRight
		rotation -= turnPower*((Math.min(speed,20))/20);	
		if(rotation<0)
			rotation = 360;
	}
	if(e.keyCode == "38"){ //speedUP
		if(raceTimer == null)
			raceTimer = window.setInterval(function(){raceTime++;},200);
		
		if(speed>topSpeed )
			acceleration = 0;
		else
			acceleration = surfaceAcc;
	}
	if(e.keyCode == "40"){ //speedDown
		if(speed<=-topReverse)
			acceleration = 0;
		else
			acceleration = -1*surfaceAcc;		
	}
	if(e.keyCode == "32"){
		powerBreaks();		
	}
});

document.addEventListener('keyup',function(e){

		applyFriction();
		if(e.keyCode == "40" ||e.keyCode == "38" )
			acceleration = 0;	

});

function powerBreaks(){

	var breaks = window.setInterval(function(){
	
		if(speed<0)
			speed += 4;
		else
			speed -= 4;
		if(speed<2 && speed > -2){
			speed=0;
			window.clearInterval(breaks);
		}
	},200);

}

function applyFriction(){
	
	var friction = window.setInterval(function(){

		if(speed<0)
			speed+=frictionAcc;
		else
			speed-=frictionAcc;
		if(speed<2 && speed > -2){ 
			speed=0;
			window.clearInterval(friction);
		}
	},200);
}
