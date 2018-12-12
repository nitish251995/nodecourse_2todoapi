
const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>
{if(err)
  {
    return console.log('unable to connect');

  }
  console.log("connected");
//db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5c10cad66ad7019d28a28587')},
//{
//  $set :{completed :true
//  }
//},{
  //returnOriginal:false
//}
//)//.then((result)=>
//{//
  //console.log(result);
//});
db.collection('users').findOneAndUpdate({
  _id : new ObjectID('5c0e60c4a396d129a8247688')
},{
  $inc :{ age :2}
},{
  returnOriginal :false

}).then((result)=>
{
  console.log(result);
})
//db.close();
});
