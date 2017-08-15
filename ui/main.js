
var counter=0;

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


var request=new XMLHttpRequest();


request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            var z=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=z.toString();
        }
    }
    
};
request.open('GET','http://gandhipriyanshu.imad.hasura-app.io/counter');
request.send(null);
};

var nameinput=document.getElementById('na');
var name=nameinput.value;
var submit=document.getElementById('sub');
submit.onclick=function(){
  
  var names= ['name1','name2','name3'];
  var list= '';
  for(var i=0;i<names.length;i++)
  {
      list +='<li>'+ names[i] + '</li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
}

