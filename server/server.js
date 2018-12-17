var express =require('express');
var bodyparser =require('body-parser');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');


var app=express();
app.use(bodyparser.json());
app.post('/todos',(req,res)=>
{
console.log(req.body);
var todo =new Todo({text: req.body.text})

todo.save().then((doc)=>
{
res.send(doc);
},(e)=>
{
  res.status(400).send(e);
});
});
app.get('/todos',(req,res)=>
{ Todo.find().then((todos)=>
{res.send({
  todos
});

},(e)=>
{res.status(400).send(e);

});

});

app.listen(3000,()=>
{
  console.log("successful");
});

//var newtodo=new Todo({....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
  //text:'dinner'
//});

//newtodo.save().then((res)=>
//{
//  console.lo(res);
//},(err)=>
//{
//console.log("unable to connect");
//});
//var othertodo =new Todo({text:'feedthedog',
///completed:true,
//completedat:123});
//othertodo.save().then((doc)=>
//{//
  //console.log(doc);
//},(err)=>
//{
//  console.log("unable to do");
//});
 //var user =new user({
   //email :'nitishmnka@gmail.com'
 //});
 //user.save().then((res)=>
//{
//  console.log(res);
//});
