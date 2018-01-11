db.getCollection('test0106').find({})


//插入数据
db.test0106.insert({"title":"my second blog","contents":"how to learn java"});
db.test0106.find();



//------------通过update()函数来更新---------------------------
db.test0106.update({"title":"my second blog"},{"contents":"how to learn java++"});
db.test0106.update({"contents":"how to learn java++"},{"title":"my second blog++"});
db.test0106.update({"title":"my second blog++"},{"contents":"how to learn java--"});
db.test0106.update({"contents":"c++"},{"title":"hehe","contents":"c++"});




// ----------通过中间变量来更新------------
var secondblog = db.test0106.findOne({"title":"hehe"});
secondblog.contents = "python";
db.test0106.update({"contents":"c++"},secondblog);



// ----------通过修改器修改值------------
//修改器“$set”可以用于修改内嵌文档
db.test0106.update({"title":"hehe"},{"$set":{"title":"hehe++","contents":"贼"}});
db.test0106.findOne({"title":"hehe++"});



//------------通过修改器$set修改（增加）数据类型---------------
//修改器“$set”可以用于修改内嵌文档
db.test0106.insert({"name":"bob","fa":"世界与和平"});
db.test0106.find();
db.test0106.update({"name":"bob"},{"$set":{"fa":["娃","红高粱","红与黑"]}});


//----------------通过修改器嵌套数组-----------------------
//----------------嵌套数组时大括号才能与逗号相连？？？---------------------
//------------内嵌文档的键就是：外层文档的键.内层文档的键。-------------------------
db.test0106.update({"name":"bob"},{"$set":{"fa":["娃","红高粱","红与黑","孔雀翎","名剑风流","古","大师傅"],"ff":["阿发"]}});

db.test0106.update({"name":"bob"},{"$set":{"fa":[{"ss":["明明德"]},{"sp":["余晖","朝阳"]}],"ff":["阿发"]}});

db.test0106.update({"name":"bob"},{"$set":{"fa":[{"ss":[{"ss1":[{"ss1++":["明明德","德明明"]},{"ss12++":["前端","后台"]}]},
{"ss2":["李白","杜甫"]}]},{"sp":["余晖","朝阳"]}],"ff":["阿发"]}});


//------------------修改器"$set"，“$unset”可以用来修改值为各种类型的键，-------------------------------
//----------------通过修改器$unset删除数据--------------------------
db.test0106.update({"name":"bob"},{"$unset":{"fa":1}});


//---------------------修改器"$inc"专门用户值为数字的键，对这个键的值进行增加或修改。如果文档中不存在这个键，则会创建。-----------------------------------
//--------------------修改器"$inc"虽然十分好用，但其修改的键的值必须为数字,如果待修改文档中该键已经存在，但值类型不是数字，则修改器"$inc"操作失败------------------------------------------
db.test0106.update({"name":"bob"},{"$inc":{"pv":1000}});//此时内嵌文档中不存在"pv"键，执行该语句后会增加该键
db.test0106.findOne({"name":"bob"});
db.test0106.update({"name":"bob"},{"$inc":{"pv":1000}});//此时内嵌文档已存在"pv"键，执行语句后对对应的值加1000
db.test0106.findOne({"name":"bob"});
db.test0106.update({"name":"bob"},{"$inc":{"pv":-500}});//减500
db.test0106.findOne({"name":"bob"});


//--------------通过数组下标来查找文档数据-----------------------------
db.test0106.insert({"jml":[{"animal":["sheep","shit"]},{"仙人":["god","大神"]}]});
db.test0106.findOne({"jml.animal.0":"sheep"});
db.test0106.findOne({"jml.仙人.0":"god"});
db.test0106.insert({"n1":"人人","n2":"乐视","n3":["网球","篮球","足球"]});
db.test0106.findOne({"n1":"人人"});




//-----------------【数组修改器】--之$push修改器---------小用了一下$pull修改器（只删除）-----------------
//--------“$push”修改器，如果这个键存在，会向其数组类型的值的末尾加入一个元素，如果这个键不存在，则会创建，并且其值为数组类型。---------
db.test0106.insert({"name":"mike","book":["拳头","多情环"]});
db.test0106.findOne({"name":"mike"});
db.test0106.update({"name":"mike"},{"$push":{"desk":["d1","d2"]}});
db.test0106.update({"name":"mike"},{"$push":{"desk":["d3","d4"]}});
db.test0106.update({"name":"mike"},{"$push":{"book":"道德经"}});//"book":"道德经"
db.test0106.update({"name":"mike"},{"$push":{"book":["明月心"]}});
db.test0106.update({"name":"mike"},{"$push":{"book":"燕南飞"}});
db.test0106.update({"name":"mike"},{"$unset":{"book":["明月心"]}});//删除键"book"对应的值的所有数据
db.test0106.update({"name":"mike"},{"$pull":{"book":["明月心"]}});//只删除键"book"对应的值



//-----------------【数组修改器】--之“$addToSet”----或"$ne"(好像现在的版本已不能用)
//-通过修改器"$ne"或“$addToSet”来实现:---如果这个元素不在数组中，就添加，否则不添加，------------
db.test0106.update({"name":"mike"},{"$addToSet":{"book":"失魂引"}});
//db.test0106.update({"name":"mike"},{"$ne":{"book":"离别钩"}});
db.test0106.update({"name":"mike"},{"$addToSet":{"book":{"$each":["失魂引","离别钩","碧血洗银枪","孔雀翎"]}}});//$each
db.test0106.findOne({"name":"mike"});



// 修改器"$pop"，"$pull"可以从数组中删除相应的值：{“$pop”：{key：1}}从数组末尾删一个值，
// {"$pop"：{key：-1}}从数组头部删一个值，{“$pull”：{key：value}}，从数组中删掉所有特定值
db.test0106.update({"name":"mike"},{"$pop":{"book":"1"}});
db.test0106.findOne({"name":"mike"});
db.test0106.update({"name":"mike"},{"$pop":{"book":"-1"}});//???删除的也是数组末尾值？？
db.test0106.update({"name":"mike"},{"$pull":{"book":"失魂引"}});



//---------【数组定位修改器】___------------------------------
// 通常我们并不知道我们要修改的元素在数组中的什么位置上。这时，我们可以使用定位符"$"：
db.test0106.insert({"content":[{"c1":"你说呢","c2":"猜不着"},{"c3":"好好的","c4":"你瞅啥"}]});
db.test0106.find();
db.test0106.findOne({"content.0.c1":"你说呢"});//此处与数组的查找方法有区别，详见上文
db.test0106.update({"content.0.c1":"你说呢"},{"$set":{"content.1.c3":"好好的++"}});//这种方式简单，容易理解，但实用性不高，
                                                                         //因为通常我们并不知道我们要修改的元素在数组中的什么位置上。
                                                                            ///这时，我们可以使用定位符"$
db.test0106.update({"content.0.c1":"你说呢"},{"$set":{"content.0.$.c3":"++好++"}});//??The positional operator did not find the match needed from the query. Unexpanded update: content.$.c3

db.test0106.update({"content.0.c1":"你说呢"},{"$push":{"content":[{"c5":"灯光","c6":"舞美"}]}});//“二维数组”
db.test0106.update({"content.0.c1":"你说呢"},{"$push":{"content":[{"c5":"良辰","c7":"美景"}]}});
db.test0106.update({"content.0.c1":"你说呢"},{"$push":{"content.2":[{"c5":"良辰","c7":"美景"}]}});
db.test0106.update({"content.0.c1":"你说呢"},{"$push":{"content.2":{"c5":"良辰","c7":"美景"}}});
db.test0106.update({"content.0.c1":"你说呢"},{"$push":{"content":{"c5":"灯光","c6":"舞美"}}});//“一维数组”
db.test0106.findOne({"content.0.c1":"你说呢"});

db.test0106.update({"content.0.c1":"你说呢"},{"$set":{"content.2.$.c5":"++良辰++"}});//？？？不起作用？？


//--------数组定位修改器(2)----------------------
db.test0106.insert({"blog":[{"content":"hh","email":"jj","name":"kk"},{"content":"uu","email":"ii","name":"oo"}]});
db.test0106.findOne({"blog.0.content":"hh"});
db.test0106.update({"blog.0.content":"hh"},{"$set":{"blog.$.name":"草了"}});


//定位符"$"
db.test0106.insert({"scores":[88,89,90]});
db.test0106.findOne({"scores.0":88});
db.test0106.update({"scores.0":88},{"$pop":{"scores":1}});
db.test0106.update({"scores.0":88},{"$pop":{"scores":-1}});
db.test0106.findOne({"scores.0":89});
db.test0106.insert({"ss":[{"bob":[77,78,79]},{"jam":[45,46,47]}]});
db.test0106.findOne({"ss.bob.0":77});
db.test0106.update({"ss.bob.0":77},{"$pop":{"ss":1}});

db.test0106.insert({"kk":[{"bob":[77,78,79]},{"jam":[45,46,47]}]});
db.test0106.update({"kk.bob.0":77},{"$pop":{"ss.jam":1}});//？？？不起作用？？
db.test0106.findOne({"kk.bob.0":77});



// 【修改器速度】
// 修改器“$inc”能就地修改文档，不会引起文档大小的变化，所以操作会很快。
// 而数组类型的修改器操作后可能引起文档大小的变化，因此会慢一些。修改器
// "$set"的操作如果引起了文档大小变化，则速度会慢，否则操作很快。MongoDB
// 在为文档分配空间时，会预留一定的补白，用来适应文档大小的变化。但如果文档变化过大，
// 这块补白空间不够，就会引发文档空间的重新分配，这样会拉慢操作速度。


// -------------【upsert】------------update()的第三个参数--------------
// upsert是一个特殊的更新，要是没有文档符合更新条件，就会以这个条件和文档为基础创建一个新的文档，
// 如果按照这个条件可以定位到一个文档，则执行更新操作。是集合update和insert操作的集合体。upsert的操作是原子性的。
db.test0108.find();
db.test0108.update({"count":25},{"$inc":{"count":15}},true);//这里我们使用了update方法的第三个参数，我们传递了true，
                                                             //这个true，就表明这个update操作时upsert操作。



// --------------------【save函数的使用】--------------
// save是集合的一个函数，只有一个参数，就是一个文档。
// 如果该文档包含“_id”键，则save其实会转调upsert，
// 如果文档中不存在"_id"键，save函数默认就是向集合中插入一条文档。
db.test0108.save({"count":33});
db.test0108.find();

var x = db.test0108.findOne({"_id":ObjectId("5a530b36d9a5663f9d06ca38")});
x.count = 66;
db.test0108.save(x);




// -----------------【更新多个文档】--------update()第四个参数--------------
// 目前我用的MongoDB 2.0.6对于更新操作是，如果有多个文档符合更新操作的查询条件，
// 则只会更新第一个匹配的文档。如果我们要一次更新多个文档，我们要启用update函数的
// 第四个参数，传递true，则是全部更新，否则只更新第一条：
db.test0108.save({"count":33});
db.test0108.find();
db.test0108.update({"count":33},{"$inc":{"count":10}},false,true);
db.test0108.find();
db.test0108.update({"count":43},{"$inc":{"count":10}},false);



// ---------------------------------
//在MongoDB Shell中执行完任何命令，都可以再通过运行getLastError命令，来看看，上次执行的命令影响了多少条文档：
// ---------数据库调用runCommand({getLastError : 1})会返回一个文档，在这个文档中，“键”n的值就是上次操作影响的文档条数------------------------
db.runCommand({"getLastError":1});



//--------------【返回已更新的文档】-----------------
// 返回已更新的文档。可以通过findAndModify命令做到这点。
// 这个命令和普通的更新操作不同，他稍微慢些，因为他要等到数据库响应后再返回，而其他更新操作都是瞬间完成（这个后面会有提及）。
db.test0108.insert({"status" : "READY", "priority" :  1});
db.test0108.insert({"status" : "READY", "priority" :  2});
db.test0108.insert({"status" : "READY", "priority" :  3});
db.test0108.insert({"status" : "READY", "priority" :  4});
db.test0108.find();
db.test0108.update({"priority" :  1},{"$unset":{"status" : 1, "priority" :  1}});
db.test0108.update({"priority" :  1},{"$unset":{"priority" :  1}});
db.test0108.update({"status" : "READY"},{"$set":{"priority" :  1}});
//并且返回更新后的文档：
// 我们接着说一下这个findAndModify命令，其中涉及如下的键，含义分别为：
// 1.  findAndModify : 集合名。
// 2.  query : 查询文档，用于定位这个命令作用的文档。
// 3.  sort : 这个命令只会作用在一条文档上，如果匹配了多条，按这个排序，取第一条进行更新。我们从上例看，
// 排序也接受一个文档 {"priority" : -1}， 如果值为负的，则倒叙，如果值为正的，则正序。
// 4.  update : 修改器文档，对匹配的一条文档执行的操作。
// 5.  remove : 布尔类型，表明是否是对匹配的文档进行删除操作，remove 和 update必须也只能存在一个。
// 6.  new : 布尔类型，返回的文档中键“value”指向的内嵌文档是上述匹配文档修改前还是修改后的。如果为true，
// 则是修改后的，否则是修改前的，但匹配的文档肯定也是被修改了。
// findAndModify 这个命令有些限制，一次只能更新一条文档。并且只能执行更新或删除操作。执行这个命令，
// 如果没有匹配到任何文档，则不会执行任何更新操作，返回的文档中键“value”的值为null。
db.runCommand({"findAndModify":"test0108",//findAndModify后跟集合名
    "query":{"status":"READY"},
    "sort":{"priority":-1},//--------------更改了同条件中的最后一个
    "update":{"$set":{"status":"RUNNING"}},
    "new":true});
db.test0108.find();   
db.runCommand({"findAndModify":"test0108",//findAndModify后跟集合名
    "query":{"status":"READY"},
    "sort":{"priority":1},//--------------更改了同条件中的第一个
    "update":{"$set":{"status":"RUNNING"}},
    "new":true});
  
  
  
    
    
//--------【查询】------------------------
db.test0108.insert({"name":"tom","age":"18"});
db.test0108.insert({"name":"jimmy","age":"28"});
db.test0108.insert({"name":"tim","age":"38"});
db.test0108.find({});
// 可以使用find函数的第二个参数，来指定返回的键值对，这样还可以减少传输的数据量从而加快效率。第二个参数同样是个文档
db.test0108.find({},{"age":1,"name":1});
db.test0108.find({},{"name":1,"age":1});
db.test0108.find({},{"name":1});
db.test0108.find({},{"name":1,"_id":0});
db.test0108.find({},{"name":1,"age":0});//对于非"_id"的所有键，其值要么同时不等于0（表明要查询该键值对），
                                            //要么同时等于0（表明要忽略该键值对），否则执行报错。

db.test0108.find({},{"name":0,"age":0});
db.test0108.find({},{"name":0,"age":0,"_id":1});//对于非“_id”的所有键，如果其值全部为0，则此时如果
                                                    //也指明了键“_id”的情况，则键“_id”的值必须为0，否则执行报错。
//*******************综上，我们总结一下如果需要使用第二个参数，则使用的技巧为：指明所有需要得到的键的值为非0的数字，如果还要过滤键"_id"，
//则再指明"_id"这个键值为0即可。***************************


// “$lt”、“$lte”、“$gt”、“$gte” 就是所有的范围比较操作符，分别对应<、<=、>、>=。
db.test0108.find({"age":{"$gte":18,"$lte":39}});
db.test0108.find({});
db.people.insert({"name":"tom","age":"18"});
db.people.insert({"name":"jimmy","age":"28"});
db.people.insert({"name":"tim","age":"38"});
db.people.find({"age":{"$gte":18,"$lte":39}});
db.people.find();
db.people.find({"age":{"$gte":8,"$lte":30}}); //?????不起作用？？


// 操作符"$ne"，他表示不相等。如我们要查询注册用户名不等于“tom”的文档：
db.people.find({"name":{"$ne":"tom"}});
db.people.find({"age":{"$ne":18}});//???

db.people.find({"age":{"$in":[18,28,29,40]}},{"name":1});
db.people.find({"$or":[{"age":{"$in":[18,28,29,40]}},{"name":"tim"}]});//？？$in不起作用？？

//$mod取余
db.people.find({"age":{"$mod":[28,0]}});//???
//$not是元条件符，即可以用于任何其他条件之上的，表明取反
db.people.find({"age":{"$not":{"$mod":[18,0]}}});//???很懵逼！！  结果一样？？
db.people.find({"age":{"$not":{"$mod":[12,0]}}}); 
db.people.find();



//查询键y对应的值为null的数据
db.cc.insert({"x":1,"y":null});
db.cc.insert({"x":0,"y":1});
db.cc.insert({"x":0,"y":2});
db.cc.insert({"x":0});
db.cc.find({});
db.cc.find({"y":null});//利用值为null的条件貌似可以查询正确的文档，
                        //但我们忽略了如果集合中存在没有键"y"的文档，
db.cc.find({"y":{"$in":[null],"$exists":true}});//正确解法
                                  //因为MongoDB中没有提供类似于"$eq"这种相等的条件操作符，
                                  //所以“=null”的判断只能通过{"$in"：[null]}来实现！


//---------------【正则表达式】----------------------
//正则表达式可以灵活的匹配字符串类型的值。如我们要查询所有姓名为“joy”开头并且忽略大小写的用户文档：
//Shell中写正则表达式的方式和JavaScript的一致，写在一对“ // ”之间的就是正则表达式。
db.people.insert({"name":"joe","age":1});
db.people.insert({"name":"Joe","age":2});
db.people.insert({"name":"Joey","age":3});
db.people.find({"name":/joe.*/i});
db.people.find({"name":/joe/});

//修改器操作符都是外层文档的键，而查询条件的操作符基本都是内层文档的键（注意“$or”是一个例外）。




//-------------------【查询数组】----------------------------
db.fruitshop.insert({"name":"big fruit","fruits":["apple", "pear", "orange"]});
db.fruitshop.insert({"name":"good fruit","fruits":["banana", "pear", "orange" ]});
db.fruitshop.insert({"name":"good fruit","fruits":["banana", "apple", "tomato" ]});
db.fruitshop.insert({"name":"bad fruit","fruits":["a", "b", "c" ]});
db.fruitshop.insert({"name":"nice fruit","fruits":["d", "e"]});
db.fruitshop.find();
db.fruitshop.find({"fruits":"apple"});//只要包含苹果的数组都能被查询出来。
//如果要通过多个元素来匹配数组，就需要条件操作符----"$all"，---比如我们要查询既卖apple又卖banana的水果店：
db.fruitshop.find({"fruits":{"$all":["banana","apple"]}});//使用“$all”对数组内元素的顺序没有要求，只要全部包含的数组都能查询出来。
//数组查询也可以使用精确匹配的方式
db.fruitshop.find({"fruits":["apple", "pear", "orange"]});//精确匹配
//数组中的索引可以作为键使用，如我们要匹配水果店售第二种水果是orange 的水果店
db.fruitshop.find({"fruits.1":"apple"});
//"$size"条件操作符，可以用来查询特定长度的数组的，如我们要查询卖3种水果的水果店：
db.fruitshop.find({"fruits":{"$size":3}});//"$size"不能和其他操作符连用如“$gt”等
                                            //使用这个操作符我们只能精确查询某个长度的数组。
//我只想查询水果店售卖说过数组的前两个：
db.fruitshop.find({},{"fruits":{"$slice":2}});
//“$slice”也可以从后面截取，用复数即可，如-1表明截取最后一个；
//还可以截取中间部分，如[2,3]，即跳过前两个，截取3个，如果剩余不足3个，就全部返回！
db.fruitshop.find({},{"fruits":{"$slice":-1}});
db.fruitshop.find({},{"fruits":{"$slice":[1,2]}});
// 如果第二个参数中有个键使用了条件操作符"$slice"，则默认查询会返回所有的键，如果此时你要忽略哪些键，可以手动指明！
db.fruitshop.find({},{"fruits":{"$slice":[1,2]},"_id":0,"name":0});




//-------------------------【查询内嵌文档】---------------------------------------
db.staff.insert({ "_id" : ObjectId("50225fc909248743250688e6"), 
    "name" : { "first" : "joe", "middle" : "bush", "last" : "Schmoe" }, "age" : 45 });
db.staff.insert({ "_id" : ObjectId("50225fe209248743250688e7"), 
    "name" : { "first" : "joe", "middle" : "bush" }, "age" : 35 } ); 
db.staff.insert({ "_id" : ObjectId("50225fff09248743250688e8"), 
    "name" : { "middle" : "bush", "first" : "joe" }, "age" : 25 });
db.staff.find();
db.staff.find({"name":{"first":"joe","middle":"bush"}});
db.staff.find({"name":{"first":"joe"}}); //？？查不到！！

//针对内嵌文档特定键值对的查询是最常用的！通过点表示法来精确表示内嵌文档的键：
db.staff.find({"name.first":"joe","name.middle":"bush"});//通过点表示法，可以表示深入到内嵌文档内部的键！
                                                            //利用“点表示法”来查询内嵌文档，这也约束了在插入文档时，
                                                            //任何键都不能包含“.” !!


//----当内嵌文档变得复杂后，如键的值为内嵌文档的数组，这种内嵌文档的匹配需要一些技巧，如下例：-----------
db.blogs.insert({  
        "_id" : ObjectId("502262ab09248743250688ea"),  
        "content" : ".....",  
        "comment" : [  
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
        ]  
} );
db.blogs.find();
db.blogs.find({"comment":{"$elemMatch":{"author":"joe","score":{"$gte":2}}}});//$elemMatch
db.blogs.find({"comment":{"$elemMatch":{"author":"joe", "score":{"$gte":3}}}});//操作符“$elemMatch”可以组合一组条件，
                                                                        //并且还能达到的“点表示法”的模糊查询的效果！
//"$where"，用他可以执行任意JavaScript作为查询的一部分！
db.fruitprice.insert({ "_id" : ObjectId("50226b4c3becfacce6a22a5b"), "apple" : 10, "banana" : 6, "pear" : 3 });  
db.fruitprice.insert({ "_id" : ObjectId("50226ba63becfacce6a22a5c"), "apple" : 10, "watermelon" : 3, "pear" : 3 });
db.fruitprice.insert({ "a" : 10, "b" : 6, "c" : 3 });
db.fruitprice.insert({ "a" : 10, "e" : 7, "c" : 3 });
db.fruitprice.insert({ "a" : 10, "f" : 3, "c" : 3 });
db.fruitprice.remove({"apple":10});
 db.fruitprice.find();
// 使用"$where"其实就是写了一个javascript函数，MongoDB在查询时，会将每个文档转换成一个javascript对象，
// 然后扔到这个函数中去执行，通过返回结果来判断其是否匹配！在实际使用中，尽量避免使用”$where" 条件操作符，因为其性能很差！
db.fruitprice.find({
    "$where":function(){
                for(var i in this){
                    for(var j in this){
                       if(i!=j && this[i]==this[j]){
                           return true;
                       } 
                    }
                }
                return false;
            }
    });



//------------------【MongoDB查询(游标使用)】----------------------
// MongoDB中find()函数返回一个游标，客户端通过对游标进行一些设置就能对查询结果进行有效地控制，
// 如可以限制查询得到的结果数量、跳过部分结果、或对结果集按任意键进行排序等！
for(var i=0;i<100;i++){
    db.coll.insert({"x":i});
}
db.coll.find();

// 这样做，实际发生的是，调用完find后，此时Shell并不会去真正地访问数据库，
// 而是等待开始要求获得结果的时候才向数据库发送查询请求！我们此时可以对这个游标进行各种设置，
// 然后调用游标的hashNext()或next()方法，这样就会真正访问数据库，这是一个懒加载的过程
var cursor = db.coll.find();
while(cursor.hasNext()){
    var doc = cursor.next();
}

db.fruitprice.insert({ "_id" : ObjectId("50226b4c3becfacce6a22a5b"), "apple" : 10, "banana" : 6, "pear" : 3 });  
db.fruitprice.insert({ "_id" : ObjectId("50226ba63becfacce6a22a5c"), "apple" : 10, "watermelon" : 3, "pear" : 3 });  
db.fruitprice.insert({ "_id" : ObjectId("5023a1db7dceac1a6dacb0b7"), "apple" : 8, "orange" : 4, "tomato" : 3 } ); 
db.fruitprice.insert({ "_id" : ObjectId("5023a1eb7dceac1a6dacb0b8"), "apple" : 9, "orange" : 5, "grape" : 12 });  
db.fruitprice.insert({ "_id" : ObjectId("5023a2037dceac1a6dacb0b9"), "melon" : 7, "orange" : 3, "grape" : 11 } );
// 这样做，实际发生的是，调用完find后，此时Shell并不会去真正地访问数据库，
// 而是等待开始要求获得结果的时候才向数据库发送查询请求！我们此时可以对这个游标进行各种设置，
// 然后调用游标的hashNext()或next()方法，这样就会真正访问数据库，这是一个懒加载的过程
db.fruitprice.find();
db.fruitprice.remove({"c":3});
db.fruitprice.find().sort({"orange":1,"apple":-1});
db.fruitprice.find().skip(1).limit(3).sort({"orange":1,"apple":-1});
// 【避免使用skip略过大量结果】
// 使用skip略过少量文档效率不会有什么影响，如果略过大量结果，则可能会产生性能瓶颈！
db.fruitprice.find({"apple":10}).sort({"pear":1});
db.fruitprice.find({"$query":{"apple":10},"$orderby":{"pear":1}});//????用不了！！"errmsg" : "unknown top level operator: $query",
db.fruitprice.find({"$query" : {"apple" : 10}, "$orderby" : {"banana" : 1}});



//-------------【索引】简介、使用----------------------------
//索引存在的最主要目的就是加快查询速度！数据库的数据和其索引可以对应实际中我们使用的字典以及字典前面的索引部分。
// MongoDB对不会采用任何索引的查询都会进行“全表扫描”，即查询整个集合。
// 对于大的集合，效率会很低，通常我们要避免“全表扫描”的出现！
db.user.insert({ "_id" : ObjectId("5020faf5d6acd1b2a3fb316f"), "name" : "tim", 
    "age" : 40, "registered" : ISODate("2007-03-02T16:00:00Z") }  );
db.user.insert({ "_id" : ObjectId("5020fb08d6acd1b2a3fb3170"), "name" : "tom", 
    "age" : 29, "registered" : ISODate("2009-07-02T16:00:00Z") }  );
db.user.insert({ "_id" : ObjectId("5020fb27d6acd1b2a3fb3171"), "name" : "jimmy", 
    "age" : 18, "registered" : ISODate("2009-09-02T16:00:00Z") });
db.user.find();
// MongoDB中通过调用集合的ensureIndex函数来构建索引，即索引是建立在集合之上的。
db.user.ensureIndex({"name":1,"age":-1});//ensureIndex函数的参数和前面讲得游标的sort函数差不多，
                                           //都是一个文档，使用对应集合中的键，其值表示构建索引的方向。
                                              //  值>0（通常为1）表示按升序构建索引数据，
                                            //值<0（通常为-1）表示按降序构建索引数据。上面我们建了一个包含两个键的索引


// 使用索引后，每次对集合的插入、更新、删除都会因为要更新索引而产生额外的开销！
// 所以通常索引适用于一次插入，多次查询，更新不是很频繁的集合，并且要做到索引高效使用，
// 不要过多地创建索引！这里强调一下，禁止为每一个键创建索引！这样的集合插入速度会非常慢！
// MongoDB中规定一个集合最多有64个索引！这绝对是足够的！


// 但要想要这个多键索引生效，也是有要求的，就是按顺序使用构建索引的一部分键或全部键，索引才会生效！
// 这句话的意思就是：假如我们构建这样一个索引：{“a”：1, "b"：1, "c"：1,"d"：1}，
// 我们其时顺带构建了如下3个索引{"a"：1}，{“a”：1， “b”：1}，{"a"：1，"b"：1，“c”：1}。
// 只要符合这几个索引的查询都会触发这个复合索引！
db.index_test.insert({"a":9,"b":15,"c":29,"d":31,"e":15});
db.index_test.insert({"a":5,"b":15,"c":28,"d":32,"e":33});
db.index_test.insert({"a":6,"b":11,"c":27,"d":33,"e":21});
db.index_test.insert({"a":3,"b":13,"c":26,"d":34,"e":64});
db.index_test.insert({"a":7,"b":12,"c":25,"d":35,"e":14});//有个规律，如果查询最后返回的结果的数量>目标集合文档数量的一半，
                                                            //使用索引反而不如“全表扫描”！
db.index_test.insert({"a":4,"b":14,"c":24,"d":36,"e":6});
db.index_test.insert({"a":2,"b":16,"c":23,"d":37,"e":66});
db.index_test.insert({"a":1,"b":17,"c":22,"d":38,"e":24});
db.index_test.insert({"a":6,"b":19,"c":21,"d":39,"e":43});
db.index_test.insert({"a":2,"b":18,"c":20,"d":30,"e":47});
db.index_test.find();
db.index_test.ensureIndex({"a":1,"b":1,"c":1,"d":1,"e":1});


// --------------------【构建内嵌文档的索引】-----------------
// 为内嵌文档建立索引和上述为普通的键创建索引是一样的！内嵌文档的键通过点表示法表示即可！如：
db.blogs.ensureIndex({"blogs.author":1});


//--------------------【为排序创建索引】----------------------
// 当数据量太大时，有时我们可能单纯是为了查询中排序去做索引！如果我们在查询中使用没有创建索引的键
// 来排序，MongoDB会将所有的数据取到内存中来排序！因此排序首先限制于内存的大小并且MongoDB本身对
// 无索引排序的数据量也是有要求的，即T级别的数据无法在内存中进行排序！否则MongoDB会报错！因此如果
// 我们要对超大数据集按某个键排序，我们就要为这个键构建索引！MongoDB会按照索引顺序提取数据，这样就不会耗尽内存！




// --------------------【索引名称】--------------------
// 集合中每个索引都会有一个字符串名字，来唯一标示这个索引！MongoDB通过这个名称来操作索引！默认索引的名称规则为：
// keyname1_dir1_keyname2_dir2.....；keyname是构建索引的键名称，dir是代表其方向的数字！如我们创建索引{"a"：1，“b”：1}，
// 其对应的默认名称是："a_1_b_1"。我们在创建索引时也可以为索引指定名称：
db.user.ensureIndex({"name":1,"age":1,"registered":-1}, {"name":"myuserIndex"}); 



// -------------------------【创建唯一索引】------------------------
// 唯一索引可以确保集合中某一个指定键在每一个文档中的值都是唯一的！如下面例子，
// 我们要保证用户的姓名是唯一的，我们可以对姓名来创建唯一性索引，insert在插入时会进行检测，如果该值已经存在，就报错：
 db.user.ensureIndex({"name":1},{"unique":true}); 



//-----------------------【消除重复】-----------------------------------
// 实际情况中，我们为一个集合创建索引时，集合中通常已经存在了很多数据！
//  如果这是我们要为某一个键创建唯一索引，就有可能失败，因为这个键的值此时在该集合中可能已经重复了，
// MongoDB会我们提供了删除重复这种功能选项，”dropDups“！使用这种选项创建唯一性索引，
//  会保留这个键第一次出现某个值的文档，再次出现这个值的文档会直接被删掉，还是这个例子：
db.user.ensureIndex({"name":1},{"unique":true, "dropDups":true});  













