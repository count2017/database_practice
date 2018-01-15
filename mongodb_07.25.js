

db.blogs.findOne();

db.blogs.update({"_id":ObjectId("5975c15f6fed630379d181a7")},
{"$set":{"favorite book":"war and peace"}});


db.blogs.update({"contents":"updated"},{
    "$set":{"favorite book":"green eggs and ham"}});
    
    
db.blogs.findOne();

show collections
    
db.blogs.update({"contents":"updated"},{"$set":{"favorite book":["cat's cradle","foundation trilogy"]}});
    
db.blogs.findOne();


db.blogs.insert({"title":"my first blog","content":"hehe ","favorite book":["cat's cradle","foundation trilogy"]});

db.blogs.find({"content":"hehe "});

db.blogs.update({"content":"hehe "},{"$unset":{"favorite book":1}});

db.blogs.insert({ "title" : "Java",  
        "content" : "...",  
        "author" : {  
                "name" : "drifter",  
                "email" : "drifter@example.com"  
        } });

db.blogs.find({"content":"..."});

db.blogs.update({"content":"..."},{"$set":{"author.name":"frifter_zh"}});

db.blogs.find({"content":"..."});

db.pvcount.insert({"url" : "www.csdn.net"});

db.pvcount.find();

db.pvcount.update({"url":"www.csdn.net"},{"$inc":{"pv":1000}});

db.pvcount.find();

db.pvcount.update({"url":"www.csdn.net"},{"$inc":{"pv":999}});

db.pvcount.find();

db.pvcount.update({"url":"www.csdn.net"},{"$inc":{"pv":-777}});

db.pvcount.find();

db.blogs.insert({  "_id" : ObjectId("501e0d1905f64f64b0765c57"),  
        "author" : {  
                "email" : "drifter@example.com",  
                "name" : "drifter_zh"  
        },  
        "content" : "...",  
        "title" : "Java" });
        
 db.blogs.find({"author.name":"drifter_zh"});
        
db.blogs.update({"author.name":"drifter_zh"},{
    "$push":{"comments":{"name":"joe","email":"joe@example.com","content":"good blog"}}
    });   
    
 db.blogs.find({"author.name":"drifter_zh"});
 
 db.blogs.update({"author.name":"drifter_zh"},{"$push":{"comments":{"name":"bob","email":"bob@example.com","content":"just so so!"}}});
 
  db.blogs.find({"author.name":"drifter_zh"});
  
show collections
  
db.users.insert( {"_id" : ObjectId("501e069405f64f64b0765c56"),  
        "email" : [  
                "dri@126.com"  
        ],  
        "name" : "drifter" } );

db.users.find();

db.users.update({"email":{"$ne":"dri@12666666666.com"}},{"$push":{"email":"dri@126.com"}});

db.users.find();

db.users.update({"email":{"$ne":"dri@12666666666.com"}},{"$push":{"email":"dri@1267777.com"}});

db.users.find();

db.users.update({"email":{"$ne":"dri@1267777.com"}},{"$push":{"email":"dri@1267777.com"}});

db.users.find();

db.users.update({"name":"drifter"},{"$addToSet":{"email":"dri@163.com"}});

db.users.update({"name":"drifter"},{"$addToSet":{"email":{"$each":["dri@hotmail.com","dri@google.com","dri@126.com","dri@163.com"]}}});
  
db.users.update({"name":"drifter"},{"$pop":{"email":-1}});

db.users.update({"name":"drifter"},{"$pop":{"email":1}});

db.users.update({"name":"drifter"},{"$pull":{"email":"dri@126.com"}});
db.users.find();

db.users.insert({"author" : {  
                "email" : "drifter@example.com",  
                "name" : "youyou"  
        },  
        "comments" : [  
                {  
                        "name" : "joe",  
                        "email" : "joe@example.com",  
                        "content" : "good blog"  
                },  
                {  
                        "name" : "bob",  
                        "email" : "bob@example.com",  
                        "content" : "just so so!"  
                }  
        ],  
        "content" : "...",  
        "title" : "Java" });

db.users.find({"author.name":"youyou"});

db.users.update({"author.name":"youyou"},{"$set":{"comments.1.name":"bob fixed"}});

db.users.find({"author.name":"youyou"});

db.users.update({"comments.email":"bob@example.com"},{"$set":{"comments.$.name":"bob second updated"}});

db.users.find({"author.name":"youyou"});

db.users.find({});

db.users.find({});

db.users.insert({"age" : 18, "name" : "tom"});

db.users.insert({"age" : 26, "name" : "bob","sex":"woman"});

db.users.insert({"age" : 14, "name" : "jiang","sex":"man"});

db.users.insert({"age" : 36, "name" : "liu"});

db.users.find();

db.users.find({},{"age":1,"name":1});

db.users.find({},{"age":2});

db.users.find({},{"_id":0,"name":2});

db.users.find({},{"age":1,"_id":0});

db.users.find({"age":{"$gte":20,"$lte":35}});


db.users.insert({"name" : "tim", "age" : 40, "registered" :ISODate("2007-03-02T16:00:00Z")});

db.users.insert({"name" : "allen", "age" : 42, "registered" :ISODate("2017-06-02T16:00:00Z")});

db.users.insert({"name":"smith","age":"45","registered":ISODate("2017-03-02")});

db.users.find();

db.users.insert({"name":"love","age":"35","registered":new Date("2016/05/05")});

db.users.find({"registered":{"$gte":new Date("2011/01/01")}});

db.users.find({"registered":{"$gte":new Date("2017/07/01")}});

db.users.find({"name":{"$ne":"love"},"name":{"$ne":"allen"}});

db.users.find({"name":{"$in":["love","allen"]}});

db.users.find({"name":{"$in":["love","allen"]}},{"name":1,"_id":0});

db.raffle.find({"$or":[{"ti":{"$in":[10,20,30]}},{"name":"tim"}]});

db.users.find({"$or":[{"name":{"$in":["love","allen"]}},{"age":{"$gte":30}}]},{"_id":0,"name":1,"age":1});










