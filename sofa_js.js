var startX;
var startY;
var sofaX=30;
var sofaY=30;
var currentX;
var currentY;

function onDrag(event) {
	event.preventDefault();
}
document.getElementById('sofa').addEventListener('dragstart', onDrag);

document.getElementById('sofa').addEventListener('mousedown',onStart);

function onStart(event){
	startX=event.pageX;
	startY=event.pageY;
	window.addEventListener('mousemove',onMove);
  window.addEventListener('mouseup',onEnd);
}
var maxX=document.getElementById('room').offsetWidth-200;
var maxY=document.getElementById('room').offsetHeight-88;
function onMove(event){
	var deltaX=event.pageX-startX;
	var deltaY=event.pageY-startY;
	currentX=sofaX+deltaX;
	currentY=sofaY+deltaY;
	if (currentY>maxY) {
		currentY=maxY;
  }
  if (currentX>maxX) {
  	currentX=maxX;
  }
  if (currentX<0){
 	 currentX=0;
  }
  if (currentY<0){
 	 currentY=0;
  }
  document.getElementById('sofa').setAttribute('style','left:'+ currentX+'px; top:'+ currentY+'px');
  
}
function onEnd(event){
	sofaX=currentX;
  sofaY=currentY;
  
  document.getElementById('sofa').setAttribute('style','left:'+ sofaX+'px; top:'+ sofaY+'px');
  window.removeEventListener('mousemove', onMove);
  window.removeEventListener('mouseup', onEnd);
}