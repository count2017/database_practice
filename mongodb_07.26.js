









show dbs

db

db.users.find();

db.users.find({"age":{"$mod":[12,0]}});

db.users.find({"age":{"$not":{"$mod":[12,0]}}});

db.users.insert({"x" : 0, "y" : null });

db.users.insert({"x" : 10, "y" : 13 });

db.users.find({"y":null});

db.users.find({"y":{"$in":[null],$exists:true}});

db.users.insert({"age" : 29, "name" : "JoEy"});
db.users.insert({"age" : 16, "name" : "joe"});


db.users.find({"name":/joe.*/i});

db.users.find({"name":{"$not":/joe.*/i}});

db.users.find();

db.users.insert({ "age" : 99, "name" : /joe/i});

db.users.find({"name":/joe/i});

db.users.insert({"test":{db.users.findOne({"name":/jo/i})}});


db.math.insert({"users":[{"name":"luo","age":19},{"name":"zhan","age":23}]});


db.math.update({"users.0.name":"luo"},{"$inc":{"age":10}}, true);

db.math.find();

db.math.update({"users.0.name":"luo"},{"$inc":{"users.1.age":10}}, true);

db.math.update({"users.0.name":"luo"},{"$inc":{"users.1.age":10}}, false);

db.math.find();

db.math.remove({});

db.math.insert({"users":[{"name":"luo","age":19},{"name":"zhan","age":23}]});

db.math.insert({"users":[{"name":"liag","age":36},{"name":"yang","age":15}]});

db.math.remove({"users":{"$not":/a.*/i}});

db.math.find();

db.math.remove({"users.0.name":"luo"});

db.math.save({"count":10});

var k = db.math.findOne({"_id":ObjectId("5977f9ed0ed66f1c8438f5f1")});

k.count = 20;

db.math.save(k);

db.math.find({"_id":ObjectId("5977f9ed0ed66f1c8438f5f1")});

db.math.find();

db.math.save({"count":13});
db.math.save({"count":13});

db.math.update({"count":13},{"$inc":{"count":10}});

db.math.find();

db.math.save({"count":13});

db.math.update({"count":13},{"$inc":{"count":10}},false,true);

db.math.find();

db.math.update({"count":23},{"$inc":{"count":1}},false,true);

db.math.update({"count":24},{"$inc":{"count":2}},true,true);

db.math.find();

db.math.update({"count":30},{"$inc":{"count":2}},true,true);

db.math.find();


db.runCommand({"getLastError":1});



db.processes.insert({"status" : "READY", "priority" : 1});
db.processes.insert({"status" : "READY", "priority" : 2});
db.processes.insert({"status" : "READY", "priority" : 3});
db.processes.insert({"status" : "READY", "priority" : 4});

db.processes.find();

db.runCommand({"findAndModify":"processes",
    "query":{"status":"READY"},
    "sort":{"priority":-1},
    "update":{"$set":{"status":"running"}},
    "new":true});
    
db.runCommand({"findAndModify":"processes",  
    "query":{"status":"READY"},  
    "sort":{"priority":-1},  
    "update":{"$set":{"status":"RUNNING"}},  
    "new":true});   


db.fruitshop.insert({"name" : "big fruit", "fruits" : [ "apple", "pear", "orange" ]});

db.fruitshop.insert({"name" : "good fruit", "fruits" : [ "banana", "pear", "orange" ]});

db.fruitshop.insert({"name" : "good fruit", "fruits" : [ "banana", "apple", "tomato" ]});

db.fruitshop.find({});

db.fruitshop.find({"fruits":"apple"});

db.fruitshop.find({"fruits":{"$all":["banana","apple"]}});

db.fruitshop.find({"fruits.0":"apple"});
db.fruitshop.find({"fruits.1":"apple"});

db.fruitshop.find({"fruits":{"$size":3}});

db.fruitshop.find({"fruits":{"size":2}});

db.fruitshop.find({});

db.fruitshop.insert({"fruits" : [ "apple", "pear", "orange", "strawberry" ], "name" : "big fruit", "size" : 4});

db.fruitshop.update({"name":"big fruit"},{"$push":{"fruits":"banana"},"$inc":{"size":1}},false,false);

db.fruitshop.find({"name":"big fruit"});









