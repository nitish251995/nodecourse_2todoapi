
const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>
{if(err)
  {
    return console.log('unable to connect');

  }
  console.log("connected");
  db.collection("users").find({name :'yashika'})
  .toArray().then((docs)=>
  {//console.log(count);
  console.log(JSON.stringify(docs,undefined,2));
  },(err)=>
  {
  console.log("unable to fech docs");
  });
//db.close();
});
