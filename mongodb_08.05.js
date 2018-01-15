use mycustomers
show dbs
show collections
db.user.find();

db.user.count();

db.user.count({"name":"tim"});

db.user.distinct("name");

db.user.distinct("age");

db.runCommand({"distinct":"user","key":"name"});

db.runCommand({"distinct":"user","key":"age"});

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

db.user.aggregate([
    {$match:{"name":"tim"}},
    {$group:{_id:"_id",total:{$sum:"$age"}}}
    ]);
    
db.user.aggregate([
    {$match:{"name":"tom"}},
        {$group:{_id:"",total:{$sum:"$age"}}}
    ]);
        
        
db.runCommand({
    "group":{
        "ns":"user",
        "key":{"_id":""},
        "initial":{"accountage":0},
        "$reduce":function(doc,prev){
                prev.accountage += doc.age;
            }
        }
    
    });
        
db.blog.find();       

db.blogs.find();

db.dog.find();

db.runCommand({
    "group":{
        "ns":"dog",
        "initial":{},
        "key":{"onumber":1,"date":1},
        "$reduce":function(doc,prev){},
        
        }
    });

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
           },
           "finalize":function(reducedoc){
               var mostpopular = 0;
               for(var i in reducedoc.tag){
                   if(reducedoc.tag[i] > mostpopular){
                       mostpopular =  reducedoc.tag[i];
                       reducedoc.tag[i] = i;
                   }
               }
           }
        }
});



function test0805(){
    var person = {fname:"John", lname:"Doe", age:25}; 
    var text = "";
    var x;
    for (x in person) {
        text += person[x];
        
    }
    return text;
}

test0805();














