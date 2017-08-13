console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML ='New value';
var img= document.getElementById('madi');

function moveRight() {
    img.style.marginLeft+='10px';
}
img.onclick = function() {
    var interval= setInterval(moveRight,100);
    
};