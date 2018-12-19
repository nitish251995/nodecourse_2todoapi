var express =require('express');
var bodyparser =require('body-parser');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');
var {ObjectID}=require('mongodb');


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
app.delete('/todos/:id',(req,res)=>
{var id =req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(400).send();

  }
  console.log(id);
Todo.findByIdAndRemove().then((todo)=>
{//if(!todo)
  //{
  //return  res.status(404).send();
  //}
  console.log("hello");
res.send(todo);
}).catch((e)=>
{
res.status(404).send();
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
