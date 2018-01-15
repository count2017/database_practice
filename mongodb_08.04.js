
use mycustomers

show collections

db.blogs.find({"comment.author":"joe"});

db.blogs.find({"comment.author":"joe"}).explain();

db.system.indexes.find();

db.blogs.find();

db.user.find();

db.user.find({"age":18}).explain();

db.user.ensureIndex({"age":1,"name":-1});

db.user.find({"age":18});

db.user.find({"age":1,"name":-1});

db.system.indexes.find();

db.user.insert({"name":"hhhhhh","age":66});

db.user.find({"name":"hhhhhh"}).explain();

db.user.find({"name":"hhhhhh"});

db.user.getIndexes();

db.user.find();

var cursor = db.user.find({"age":18,"name":"jimmy"}).hint({"age":1,"name":-1});

cursor.explain();

db.system.indexes.find({"ns":"mycustomers.user"});

db.user.dropIndex("name_1_age_-1");

db.user.getIndexes();

db.user.dropIndex("name_-1_age_1");

db.user.getIndexes();

db.runCommand({"dropIndexes":"user","index":"age_1_name_-1"});

db.user.getIndexes();

db.runCommand({"dropIndexes":"user","index":"name_1_age_1"});

db.user.getIndexes();

db.user.dropIndex("_id_");

db.runCommand({"dropIndexes":"user","index":"_id_"});

db.user.getIndexes();

db.user.ensureIndex({"name":1,"age":-1});

db.user.ensureIndex({"name":-1,"age":1});

db.user.getIndexes();

db.user.runCommand({"dropIndexes":"user","index":"*"});

db.user.getIndexes();

db.user.reIndex();

db.runCommand({"reIndex":"user"});

db.user.getIndexes();


db

db.system.indexes.find();

db.basi.insert({"no":1,"author":[{"name":"bob","age":18},{"name":"jack","age":"22"}]});

db.basi.insert({"no":2,"author":[{"name":"micheal","age":14},{"name":"kobe","age":"33"}]});

db.basi.insert({"no":3,"author":[{"name":"curry","age":11},{"name":"love","age":"45"}]});

db.basi.find();





















