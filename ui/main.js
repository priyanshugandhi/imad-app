
var counter=0;
var z=0;
function Right(){
    counter+=10;
    element.style.marginLeft=counter+"px";
}

var element=document.getElementById("madi");
element.onclick=function(){
     var interval=setInterval(Right,5);
     
};

var b=document.getElementById("b1");
b.onclick=function(){
    z+=1;
    var span=document.getElementById("count");
    span.innerHTML=z;
};



