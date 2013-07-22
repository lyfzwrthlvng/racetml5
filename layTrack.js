/* this function defines track...next step can be, adding multiple tracks...*/
function layTrack(){

      var context = canvas.getContext('2d');
   	var w = window.innerWidth-30;
	var h = window.innerHeight-20;
	canvas.width = w;
	canvas.height = h;
	var img = new Image();
	img.src="images/grass.jpg";
	img.onload = function(){context.drawImage(img,0,0);		

//layer1
      	context.beginPath();
      	context.moveTo(150, 100);
      	context.bezierCurveTo(1200, 0, 1200, 100, 1200 , 300);
      	context.lineWidth = 70;
      	context.strokeStyle = '#555555';
      	context.stroke();  

       	context.beginPath();
      	context.moveTo(1200, 300);
      	context.bezierCurveTo(1200, 800, 1000, 600, 550 , 450);
      	context.lineWidth = 70;
      	context.strokeStyle = '#555555';
      	context.stroke();  

       context.beginPath();
      	context.moveTo(550, 450);
      	context.bezierCurveTo(200, 335, 0, 100, 150 , 100);
      	context.lineWidth = 70;
      	context.strokeStyle = '#555555';
      	context.stroke();

//layer2
      	context.beginPath();
      	context.moveTo(150, 100);
      	context.bezierCurveTo(1200, 0, 1200, 100, 1200 , 300);
      	context.lineWidth = 60;
      	context.strokeStyle = '#333333';
      	context.stroke();
	context.lineWidth = 3;
	context.setLineDash([20]);
	context.strokeStyle = '#555555';
	context.stroke();   

       	context.beginPath();
      	context.moveTo(1200, 300);
      	context.bezierCurveTo(1200, 800, 1000, 600, 550 , 450);
      	context.lineWidth = 60;
	context.setLineDash([0]);
      	context.strokeStyle = '#333333';
 	context.stroke();
	context.setLineDash([20]);
	context.lineWidth = 3;
	context.strokeStyle = '#555555';
	context.stroke();  

       	context.beginPath();
      	context.moveTo(550, 450);
      	context.bezierCurveTo(200, 335, 0, 100, 150 , 100);
      	context.lineWidth = 60;
	context.setLineDash([0]);
      	context.strokeStyle = '#333333';
      	context.stroke();
	context.setLineDash([20]);
	context.lineWidth = 3;
	context.strokeStyle = '#555555';
	context.stroke();

//endPoint
	context.beginPath();
	context.moveTo(155,130);
	context.setLineDash([0]);
	context.lineTo(148,68);
	context.strokeStyle = '	#555544';
 	context.lineWidth = 10;
	context.stroke();
//startPoint
	context.beginPath();
	context.moveTo(155,130);
	context.setLineDash([0]);
	context.lineTo(148,68);
	context.strokeStyle = '	#555544';
 	context.lineWidth = 10;
	context.stroke();
	};
	//put car
	posX = 150;	
	posY = 100;
	
}
