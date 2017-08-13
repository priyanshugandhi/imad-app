console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML ='New value';
var img= document.getElementsByClassName("img-medium");

img.onclick = function() {
    img.style.marginLeft='100px';
    
};