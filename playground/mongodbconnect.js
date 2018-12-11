const MongoClient =require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>
{if(err)
  {
    return console.log('unable to connect');

  }
  console.log("connected");
  db.collection('Todos').insertOne({text : 'something to do',completed : false},(err,res)=>
{if(err)
  {

    return console.log("unable to insert",err);
  }
  console.log(JSON .stringify(res.ops,undefined,2));
});

  db.collection('users').insertOne({

    name :"nitish",age :23,location: "delhi"},(err,res)=>
{
  if(err)
  {
    return console.log("unable to connect");
  }
  console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
});
db.close();
});
