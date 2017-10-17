var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool =require('pg').Pool;
var config= {
    user: 'gandhipriyanshu',
    database: 'gandhipriyanshu',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password : process.env.DB_PASSWORD,
};
var app = express();
app.use(morgan('combined'));

var bands={
 'band1' : {
    title:'Priyanshu Gandhi',
    heading:'THE BAND',
    content: `We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          },
 'band2' : {
    title:'Priyanshu Gandhi',
    heading:'THE BAND',
    content: `We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
          }
};

function createTemplate(data) {
  var title=data.title;
  var heading=data.heading;
  var content=data.content;

var htmltemplate= 
`<html>
<head>
<title> ${title} </title>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-sm-2">
</div>
<div class="col-sm-8">
<h2> ${heading} </h2>
<br>
<br>
<p>${content}</p>
</div>
</div>
</body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=new Pool(config);
app.get('/test-db', function (req,res) {
    pool.query('SELECT * FROM test', function (err,result){
        if(err){
        res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
            
        }
        
        
    });
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter+=1;
  res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name', function (req,res) {
    
    var name=req.query.name;
    names.push(name);
    
   res.send(JSON.stringify(names)); 
});


app.get('band/:bandname', function (req,res) {
    
    pool.query("SELECT * FROM band WHERE Title="+ req.params.bandname, function(err,result){
         if(result.rows.length===0) {
             res.status(404).send("BAnd not found");
         }
         else{
             var bandData=result.rows[0];
         res.send(createTemplate(bandData));
         }
    
        
    });
    
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
