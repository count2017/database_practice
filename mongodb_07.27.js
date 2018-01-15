
db

db.fruitshop.find({});

db.fruitshop.find({"fruits":{"$all":["apple","orange"]},"size":1});

db.fruitshop.find({"fruits":["banana","apple"]});

db.fruitshop.find({"fruits":["banana","apple","tomato"]});

db.fruitshop.find({"fruits.1":"orange"});

db.fruitshop.find({"fruits.1":"apple"});

db.fruitshop.find({"fruits.0":"apple"});

db.fruitshop.find({"fruits":{"$size":3}});

db.fruitshop.find({"fruits":{"$size":4}});

db.fruitshop.find({"name":"big fruit"});

db.fruitshop.find();

db.fruitshop.update({"name":"big fruit"},{"$push":{"fruits":"yezi"},"$inc":{"size":1}},false,false);



db.fruitshop.find({},{"fruits":{"$slice":2}});

db.fruitshop.find({},{"fruits":{"$slice":-1}});

db.fruitshop.find({},{"fruits":{"$slice":[2,3]}});

db.fruitshop.find({},{"fruits":{"$slice":[2,3]},"name":0,"_id":0});

db.fruitshop.find({},{"fruits":{"$slice":[2,3]},"name":0,"_id":0,"size":0});


db.staff.insert({"name" : { "first" : "joe", "middle" : "bush", "last" : "Schmoe" }, "age" : 45});

db.staff.find();

db.staff.insert({"name" : { "first" : "joe", "middle" : "bush" }, "age" : 35});

db.staff.insert({"name" : { "middle" : "bush", "first" : "joe" }, "age" : 25});

db.staff.find({"name":{"first":"joe","middle":"bush"}});

db.staff.find({"name":{"first":"bush","middle":"bush"}});

db.staff.find({"name.middle":"bush"},{"_id":0,"first":0,"age":0});

db.blogs.find();

db.blogs.insert({ "comment" : [  
                {  
                        "author" : "joe",  
                        "score" : 3,  
                        "comment" : "just so so!"  
                },  
                {  
                        "author" : "jimmy",  
                        "score" : 5,  
                        "comment" : "cool! good!"  
                }  
        ] });


db.blogs.find({"comment":{"$elemMatch":{"author":"joe","score":{"$gte":5}}}});

db.blogs.find({"comment":{"$elemMatch":{"author":"joe","score":{"$gte":2}}}},{"_id":0,"comment.author":0});


db.fruitprice.insert({"apple" : 10, "banana" : 6, "pear" : 3});

db.fruitprice.insert({"apple" : 10, "watermelon" : 3, "pear" : 3});

db.fruitprice.find();

db.fruitprice.find({"$where":function(){
     for(var a in this){
       for(var b in this){
           if(a != b  && this[a]==this[b]){
               
               return true;
           } 
       }  
     }
     return false;
     
    }    
    });


    for(var i=0;i<100;i++){
        db.coll.insert({
            "x":i   
         });
    }
    
db.coll.find();

var cursor = db.coll.find();

while(cursor.hasNext()){
    var doc = cursor.next();    
    };
    
db.fruitprice.find().sort({"apple":1,"banana":-1});

db.fruitprice.find();

db.fruitprice.insert({"apple" : 8, "orange" : 4, "tomato" : 3});

db.fruitprice.insert({"apple" : 5, "banana" : 9, "tomato" : 3});

db.fruitprice.insert({"apple" : 3, "banana" : 2, "tomato" : 3});

db.fruitprice.find({}).limit(2).skip(1).sort({"apple":1,"banana":-1});

db.fruitprice.find({"apple":10}).sort({"banana":-1});

db.fruitprice.find({"$query":{"apple":10},"$orderby":{"banana":-1}});
db.fruitprice.find({"$query" : {"apple" : 10}, "$orderby" : {"banana" : 1}});



db.user.insert({"name" : "tim", "age" : 40, "registered" : ISODate("2007-03-02T16:00:00Z")});

db.user.find();

db.user.insert({"name" : "tom", "age" : 29, "registered" : ISODate("2009-07-02T16:00:00Z")});
db.user.insert({"name" : "jimmy", "age" : 18, "registered" : ISODate("2009-09-02T16:00:00Z")});

db.user.ensureIndex({"name":-1,"age":1});
















