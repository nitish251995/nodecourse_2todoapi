const {ObjectID}=require('mongodb')
const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/models/todo')
const{user}=require('./../server/models/user')
var id ='5c114ca27b15198409d88a42';
var iduser='';
if(!ObjectID.isValid(id))
{
  console.log("id not valid");
}

Todo.findById(id).then((todo)=>
{if(!todo)
  {
 return(  console.log('id not valid'));
  }
  console.log('find by id',todo);
}).catch((e)=>
{
  console.log(e);
});

//user.findById(iduser).then((user)=>
//{if(!user)
  //{//
    //return (console.log('error id'));
  //}
  //console.log(user);
//}//).catch((e)=>
//{
  //console.log(e);
////});
