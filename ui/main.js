console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML ='New value';
var img= document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft+=10;
    img.style.marginLeft=marginLeft+ 'px';
}
img.onclick = function() {
    var interval= setInterval(moveRight,100);
    
};

var button=document.getElementById('b1');
var counter=0;

button.onclick = function() {
      counter+=1;
     var span=document.getElementById('count');
     span.innerHTML= counter.toString();
};