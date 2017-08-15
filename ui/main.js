
var counter=0;
var z=0;
var element=document.getElementById("madi");
element.onclick=function(){
     for(counter=0;counter<10;counter++)
     {
        z+=counter; 
         element.style.marginLeft=z+"px";
     }
     
};
