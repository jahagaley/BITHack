var express= require('express');
var mongojs=require('mongojs');
var app =express();

var bodyParser=require('body-parser');

var db=mongojs('careerconnect',['careerconnect']);


app.use(express.static(__dirname +"/public"));
app.use(bodyParser.json());



app.get('/careerconnect',function(req,res){
    
 console.log("I recieved a get request");
    
    
 
});



app.post('/careerconnect', function (req, res) {
    
    
    
  console.log(req.body);
     db.careerconnect.findOne({email:req.body.email,password:req.body.password}, function(err, doc) {
     
    if(doc){    
    
    console.log(doc.fname); 
    console.log(doc.lname); 
    console.log(doc.email);   
        
    
        
    }
         
         res.json(doc);
         
  });
  });

app.listen(3000);


console.log("Server running on port 3000");