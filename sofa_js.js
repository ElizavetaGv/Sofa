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
document.getElementById('sofa').addEventListener('touchstart',onStart);

function onStart(event){
	if (event.touches!=undefined) {
		startX=event.touches[0].pageX;
		startY=event.touches[0].pageY;
	} else {
		startX=event.pageX;
		startY=event.pageY;
	}
	window.addEventListener('mousemove',onMove);
	window.addEventListener('touchmove',onMove);
	window.addEventListener('mouseup',onEnd);
	window.addEventListener('touchend',onEnd);
}
var maxX=document.getElementById('room').offsetWidth-200;
var maxY=document.getElementById('room').offsetHeight-88;
function onMove(event){
	if (event.touches!=undefined) {
		var deltaX=event.touches[0].pageX-startX;
		var deltaY=event.touches[0].pageY-startY;
	} else {
		var deltaX=event.pageX-startX;
		var deltaY=event.pageY-startY;
	}
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
	window.removeEventListener('touchmove', onMove);
	window.removeEventListener('mouseup', onEnd);
	window.removeEventListener('touchend', onEnd);
}