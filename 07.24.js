
use mycustomers

db.version();
show collections

db

function myadd(a,b){return a+b;}
myadd(10,12);

function chen(a,b){
    return a*b;  
 }
 chen(12,12);

db.createCollection("apple");

db.apple.insert({"name":"a2","age":"20"});

db.apple.find();

db.apple.find().pretty();

db.apple.insert({"Name":"B!","leibie":"A","jihe":[{"name":"b1","age":"19"},{"name":"b2","age":"22"}]});

db.apple.insert({"Name":"B++","leibie":"A++","jihe":[{"name":"b1","age":"19"},
{"name":"b2","age":"22"},{"name":"b3","users":[{"name":"h1"},{"name":"h2","sex":"man"}],"age":"24"}]});

db.apple.find({"Name":"B++"},{"jihe":{"$slice":[1,1]}});

db.apple.insert({"_id":"1234","name":"hh","Name":"ss","name":"kk","name":"ll"});

db.apple.find({"_id":"123"});

db.apple.find({"_id":"1234"});

db.apple.insert({"name":"hehe","date":new Date()});

db.apple.find({"name":"hehe"});

db.apple.insert({"name":"zeze","date":new Date("2017/12/24")});

db.apple.find({"name":"haha"});

db.apple.find({"name":"zeze"});

db.apple.insert({"Date":ISODate()});

db.apple.find();

db.loft.insert({"blog1":[{"title":"first","content":"this is my first blog"}]});

db.loft.find();

db.blogs.insert({"title":"my second blog", "contents":"how to learn java"});

db.blogs.insert({"title":"my first blog", "contents":"how to learn java"});

db.blogs.find();

var secondcontents = db.blogs.findOne({"title":"my second blog"});

secondcontents.contents = "updated";

db.blogs.update({"title":"my second blog"},secondcontents);

secondcontents.age = "19";

db.blogs.update({"title":"my second blog"},secondcontents);

db.blogs.find();

db.blogs.update({"title":"my second blog"},{"$set":{"favorate book":"war and peace"}});

db.blogs.update({"title":"my second blog"},{"$set":{"favorate book":["cat's cradle", "foundation trilogy"]}});

db.blogs.find();

db.blogs.update({"title":"my second blog"},{"$unset":{"favorate book":1}});

db.blogs.find();
