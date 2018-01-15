db

db.user.find();

db.user.insert({"name" : "tim", "age" : 33, "registered" : ISODate("2012-08-10T09:10:25.579Z")});

db.user.ensureIndex({"name":1},{"unique":true});

db.user.ensureIndex({"name":1},{"unique":true,"dropDups":true});


show tables

db.user.find({"name":"tom"}).explain();

db.user.find({"name":"tim"}).explain();

db.user.count();

db.user.count({"name":"tim"});

db.user.distinct("name");

db.runCommand({"distinct":"user","key":"name"});

db.vegetableprice.insert({"name" : "tomato", "price" : 3.3, "time" : ISODate("2012-08-12T02:56:10.303Z")});
db.vegetableprice.insert({"name" : "tomato", "price" : 3.5, "time" : ISODate("2012-08-12T02:56:24.843Z")});
db.vegetableprice.insert({"name" : "eggplant", "price" : 5.6, "time" : ISODate("2012-08-12T02:57:25.605Z")});
db.vegetableprice.insert({"name" : "cucumber", "price" : 4.7, "time" : ISODate("2012-08-12T02:57:42.031Z")});
db.vegetableprice.insert({"name" : "eggplant", "price" : 5.9, "time" : ISODate("2012-08-12T02:57:51.001Z")});
db.vegetableprice.insert({"name" : "cucumber", "price" : 4.3, "time" : ISODate("2012-08-12T02:57:59.363Z")});
db.vegetableprice.insert({ "name" : "bean", "price" : 8.9, "time" : ISODate("2012-08-12T02:58:34.931Z")});
db.vegetableprice.find();

db.runCommand({
    "group":{
        "ns":"vegetableprice",
        "key":{"name":true},
        "initial":{"time":0},
        "$reduce":function(doc,prev){
                if(doc.time > prev.time){
                    prev.time = doc.time;
                    prev.price = doc.price;
                    }
            }
        }
    });

db.runCommand({
    "group":{
        "ns":"vegetableprice",
        "key":{"name":true},
        "initial":{"time":0},
        "$reduce":function(a,b){
                if(a.time > b.time){
                    b.time = a.time;
                    b.price = a.price;
                 }
            }
    }
});

db.vegetableprice.find({},{"_id":0});

db.runCommand({
        "group":{
            "ns":"vegetableprice",
            "key":{"name":true},
            "initial":{"price":9},
            "$reduce":function(doc,prev){
                       if(doc.price < prev.price ){
                                prev.price = doc.price;
                           }
                }
         }
    });

db.runCommand({
        "group":{
            "ns":"vegetableprice",
            "key":{"name":true},
            "initial":{"time":2201556566000},
            "$reduce":function(doc,prev){
                    if(doc,prev){
                        if(doc.time > prev.time){
                            prev.time = doc.time;
                        }
                    }
                },
             "condition":{"name":{"$in":["tomato"]}}
         }
    });


show collections

db.blog.insert({"author" : "jim", "content" : "...", "tag" : [ "cat", "pet", "dog" ]});
db.blog.insert({"author" : "jim", "content" : "...", "tag" : [ "cat", "pet", "pig" ]});
db.blog.insert({"author" : "jim", "content" : "...", "tag" : [ "cat", "pet", "hamster" ]});
db.blog.insert({"author" : "tom", "content" : "...", "tag" : [ "db", "oracle", "mysql" ]});
db.blog.insert({"author" : "tom", "content" : "...", "tag" : [ "db", "mongodb", "mysql" ]});

db.blog.find();

db.runCommand({
   "group":{
       "ns":"blog",
        "key":{"author":true},
        "initial":{"tag":{}},
        "$reduce":function(doc,prev){
                for(var i in doc.tag){
                    if(doc.tag[i] in prev.tag){
                        prev.tag[doc.tag[i]]++;
                    }else{
                        prev.tag[doc.tag[i]] = 1;
                     }
                }
            }
    }
});























