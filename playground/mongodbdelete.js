
const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>
{if(err)
  {
    return console.log('unable to connect');

  }
  console.log("connected");
  //db.collection('Todos').deleteMany({text: "elunch"}).then((result)=>
//{
  //console.log(result);
//});

//db.collection('Todos').deleteOne({text : 'elunch'}).then((result)=>{
//  console.log(result);
//});
//db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>
//{
  //console.log(result);
//});
//db.collection('users').deleteMany({name :"nitish"}).then((result)=>
//{
//  console.log(result);
//});
db.collection('users').findOneAndDelete({_id :new ObjectID('5c0e61a911837f0eb04d7762')}).then((result)=>
{
  console.log(result);
});

//db.close();
});
