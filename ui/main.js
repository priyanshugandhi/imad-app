
var counter=0;
function Right(){
    counter+=10;
    element.style.marginLeft=counter+"px";
}

var element=document.getElementById("madi");
element.onclick=function(){
     var interval=setInterval(Right,20);
     
};
