db.getCollection('test0106').find({})


//��������
db.test0106.insert({"title":"my second blog","contents":"how to learn java"});
db.test0106.find();



//------------ͨ��update()����������---------------------------
db.test0106.update({"title":"my second blog"},{"contents":"how to learn java++"});
db.test0106.update({"contents":"how to learn java++"},{"title":"my second blog++"});
db.test0106.update({"title":"my second blog++"},{"contents":"how to learn java--"});
db.test0106.update({"contents":"c++"},{"title":"hehe","contents":"c++"});




// ----------ͨ���м����������------------
var secondblog = db.test0106.findOne({"title":"hehe"});
secondblog.contents = "python";
db.test0106.update({"contents":"c++"},secondblog);



// ----------ͨ���޸����޸�ֵ------------
//�޸�����$set�����������޸���Ƕ�ĵ�
db.test0106.update({"title":"hehe"},{"$set":{"title":"hehe++","contents":"��"}});
db.test0106.findOne({"title":"hehe++"});



//------------ͨ���޸���$set�޸ģ����ӣ���������---------------
//�޸�����$set�����������޸���Ƕ�ĵ�
db.test0106.insert({"name":"bob","fa":"�������ƽ"});
db.test0106.find();
db.test0106.update({"name":"bob"},{"$set":{"fa":["��","�����","�����"]}});


//----------------ͨ���޸���Ƕ������-----------------------
//----------------Ƕ������ʱ�����Ų����붺������������---------------------
//------------��Ƕ�ĵ��ļ����ǣ�����ĵ��ļ�.�ڲ��ĵ��ļ���-------------------------
db.test0106.update({"name":"bob"},{"$set":{"fa":["��","�����","�����","��ȸ��","��������","��","��ʦ��"],"ff":["����"]}});

db.test0106.update({"name":"bob"},{"$set":{"fa":[{"ss":["������"]},{"sp":["����","����"]}],"ff":["����"]}});

db.test0106.update({"name":"bob"},{"$set":{"fa":[{"ss":[{"ss1":[{"ss1++":["������","������"]},{"ss12++":["ǰ��","��̨"]}]},
{"ss2":["���","�Ÿ�"]}]},{"sp":["����","����"]}],"ff":["����"]}});


//------------------�޸���"$set"����$unset�����������޸�ֵΪ�������͵ļ���-------------------------------
//----------------ͨ���޸���$unsetɾ������--------------------------
db.test0106.update({"name":"bob"},{"$unset":{"fa":1}});


//---------------------�޸���"$inc"ר���û�ֵΪ���ֵļ������������ֵ�������ӻ��޸ġ�����ĵ��в��������������ᴴ����-----------------------------------
//--------------------�޸���"$inc"��Ȼʮ�ֺ��ã������޸ĵļ���ֵ����Ϊ����,������޸��ĵ��иü��Ѿ����ڣ���ֵ���Ͳ������֣����޸���"$inc"����ʧ��------------------------------------------
db.test0106.update({"name":"bob"},{"$inc":{"pv":1000}});//��ʱ��Ƕ�ĵ��в�����"pv"����ִ�и���������Ӹü�
db.test0106.findOne({"name":"bob"});
db.test0106.update({"name":"bob"},{"$inc":{"pv":1000}});//��ʱ��Ƕ�ĵ��Ѵ���"pv"����ִ������Զ�Ӧ��ֵ��1000
db.test0106.findOne({"name":"bob"});
db.test0106.update({"name":"bob"},{"$inc":{"pv":-500}});//��500
db.test0106.findOne({"name":"bob"});


//--------------ͨ�������±��������ĵ�����-----------------------------
db.test0106.insert({"jml":[{"animal":["sheep","shit"]},{"����":["god","����"]}]});
db.test0106.findOne({"jml.animal.0":"sheep"});
db.test0106.findOne({"jml.����.0":"god"});
db.test0106.insert({"n1":"����","n2":"����","n3":["����","����","����"]});
db.test0106.findOne({"n1":"����"});




//-----------------�������޸�����--֮$push�޸���---------С����һ��$pull�޸�����ֻɾ����-----------------
//--------��$push���޸����������������ڣ��������������͵�ֵ��ĩβ����һ��Ԫ�أ��������������ڣ���ᴴ����������ֵΪ�������͡�---------
db.test0106.insert({"name":"mike","book":["ȭͷ","���黷"]});
db.test0106.findOne({"name":"mike"});
db.test0106.update({"name":"mike"},{"$push":{"desk":["d1","d2"]}});
db.test0106.update({"name":"mike"},{"$push":{"desk":["d3","d4"]}});
db.test0106.update({"name":"mike"},{"$push":{"book":"���¾�"}});//"book":"���¾�"
db.test0106.update({"name":"mike"},{"$push":{"book":["������"]}});
db.test0106.update({"name":"mike"},{"$push":{"book":"���Ϸ�"}});
db.test0106.update({"name":"mike"},{"$unset":{"book":["������"]}});//ɾ����"book"��Ӧ��ֵ����������
db.test0106.update({"name":"mike"},{"$pull":{"book":["������"]}});//ֻɾ����"book"��Ӧ��ֵ



//-----------------�������޸�����--֮��$addToSet��----��"$ne"(�������ڵİ汾�Ѳ�����)
//-ͨ���޸���"$ne"��$addToSet����ʵ��:---������Ԫ�ز��������У�����ӣ�������ӣ�------------
db.test0106.update({"name":"mike"},{"$addToSet":{"book":"ʧ����"}});
//db.test0106.update({"name":"mike"},{"$ne":{"book":"���"}});
db.test0106.update({"name":"mike"},{"$addToSet":{"book":{"$each":["ʧ����","���","��Ѫϴ��ǹ","��ȸ��"]}}});//$each
db.test0106.findOne({"name":"mike"});



// �޸���"$pop"��"$pull"���Դ�������ɾ����Ӧ��ֵ��{��$pop����{key��1}}������ĩβɾһ��ֵ��
// {"$pop"��{key��-1}}������ͷ��ɾһ��ֵ��{��$pull����{key��value}}����������ɾ�������ض�ֵ
db.test0106.update({"name":"mike"},{"$pop":{"book":"1"}});
db.test0106.findOne({"name":"mike"});
db.test0106.update({"name":"mike"},{"$pop":{"book":"-1"}});//???ɾ����Ҳ������ĩβֵ����
db.test0106.update({"name":"mike"},{"$pull":{"book":"ʧ����"}});



//---------�����鶨λ�޸�����___------------------------------
// ͨ�����ǲ���֪������Ҫ�޸ĵ�Ԫ���������е�ʲôλ���ϡ���ʱ�����ǿ���ʹ�ö�λ��"$"��
db.test0106.insert({"content":[{"c1":"��˵��","c2":"�²���"},{"c3":"�úõ�","c4":"���ɶ"}]});
db.test0106.find();
db.test0106.findOne({"content.0.c1":"��˵��"});//�˴�������Ĳ��ҷ����������������
db.test0106.update({"content.0.c1":"��˵��"},{"$set":{"content.1.c3":"�úõ�++"}});//���ַ�ʽ�򵥣�������⣬��ʵ���Բ��ߣ�
                                                                         //��Ϊͨ�����ǲ���֪������Ҫ�޸ĵ�Ԫ���������е�ʲôλ���ϡ�
                                                                            ///��ʱ�����ǿ���ʹ�ö�λ��"$
db.test0106.update({"content.0.c1":"��˵��"},{"$set":{"content.0.$.c3":"++��++"}});//??The positional operator did not find the match needed from the query. Unexpanded update: content.$.c3

db.test0106.update({"content.0.c1":"��˵��"},{"$push":{"content":[{"c5":"�ƹ�","c6":"����"}]}});//����ά���顱
db.test0106.update({"content.0.c1":"��˵��"},{"$push":{"content":[{"c5":"����","c7":"����"}]}});
db.test0106.update({"content.0.c1":"��˵��"},{"$push":{"content.2":[{"c5":"����","c7":"����"}]}});
db.test0106.update({"content.0.c1":"��˵��"},{"$push":{"content.2":{"c5":"����","c7":"����"}}});
db.test0106.update({"content.0.c1":"��˵��"},{"$push":{"content":{"c5":"�ƹ�","c6":"����"}}});//��һά���顱
db.test0106.findOne({"content.0.c1":"��˵��"});

db.test0106.update({"content.0.c1":"��˵��"},{"$set":{"content.2.$.c5":"++����++"}});//�������������ã���


//--------���鶨λ�޸���(2)----------------------
db.test0106.insert({"blog":[{"content":"hh","email":"jj","name":"kk"},{"content":"uu","email":"ii","name":"oo"}]});
db.test0106.findOne({"blog.0.content":"hh"});
db.test0106.update({"blog.0.content":"hh"},{"$set":{"blog.$.name":"����"}});


//��λ��"$"
db.test0106.insert({"scores":[88,89,90]});
db.test0106.findOne({"scores.0":88});
db.test0106.update({"scores.0":88},{"$pop":{"scores":1}});
db.test0106.update({"scores.0":88},{"$pop":{"scores":-1}});
db.test0106.findOne({"scores.0":89});
db.test0106.insert({"ss":[{"bob":[77,78,79]},{"jam":[45,46,47]}]});
db.test0106.findOne({"ss.bob.0":77});
db.test0106.update({"ss.bob.0":77},{"$pop":{"ss":1}});

db.test0106.insert({"kk":[{"bob":[77,78,79]},{"jam":[45,46,47]}]});
db.test0106.update({"kk.bob.0":77},{"$pop":{"ss.jam":1}});//�������������ã���
db.test0106.findOne({"kk.bob.0":77});



// ���޸����ٶȡ�
// �޸�����$inc���ܾ͵��޸��ĵ������������ĵ���С�ı仯�����Բ�����ܿ졣
// ���������͵��޸�����������������ĵ���С�ı仯����˻���һЩ���޸���
// "$set"�Ĳ�������������ĵ���С�仯�����ٶȻ�������������ܿ졣MongoDB
// ��Ϊ�ĵ�����ռ�ʱ����Ԥ��һ���Ĳ��ף�������Ӧ�ĵ���С�ı仯��������ĵ��仯����
// ��鲹�׿ռ䲻�����ͻ������ĵ��ռ�����·��䣬���������������ٶȡ�


// -------------��upsert��------------update()�ĵ���������--------------
// upsert��һ������ĸ��£�Ҫ��û���ĵ����ϸ����������ͻ�������������ĵ�Ϊ��������һ���µ��ĵ���
// �����������������Զ�λ��һ���ĵ�����ִ�и��²������Ǽ���update��insert�����ļ����塣upsert�Ĳ�����ԭ���Եġ�
db.test0108.find();
db.test0108.update({"count":25},{"$inc":{"count":15}},true);//��������ʹ����update�����ĵ��������������Ǵ�����true��
                                                             //���true���ͱ������update����ʱupsert������



// --------------------��save������ʹ�á�--------------
// save�Ǽ��ϵ�һ��������ֻ��һ������������һ���ĵ���
// ������ĵ�������_id��������save��ʵ��ת��upsert��
// ����ĵ��в�����"_id"����save����Ĭ�Ͼ����򼯺��в���һ���ĵ���
db.test0108.save({"count":33});
db.test0108.find();

var x = db.test0108.findOne({"_id":ObjectId("5a530b36d9a5663f9d06ca38")});
x.count = 66;
db.test0108.save(x);




// -----------------�����¶���ĵ���--------update()���ĸ�����--------------
// Ŀǰ���õ�MongoDB 2.0.6���ڸ��²����ǣ�����ж���ĵ����ϸ��²����Ĳ�ѯ������
// ��ֻ����µ�һ��ƥ����ĵ����������Ҫһ�θ��¶���ĵ�������Ҫ����update������
// ���ĸ�����������true������ȫ�����£�����ֻ���µ�һ����
db.test0108.save({"count":33});
db.test0108.find();
db.test0108.update({"count":33},{"$inc":{"count":10}},false,true);
db.test0108.find();
db.test0108.update({"count":43},{"$inc":{"count":10}},false);



// ---------------------------------
//��MongoDB Shell��ִ�����κ������������ͨ������getLastError������������ϴ�ִ�е�����Ӱ���˶������ĵ���
// ---------���ݿ����runCommand({getLastError : 1})�᷵��һ���ĵ���������ĵ��У�������n��ֵ�����ϴβ���Ӱ����ĵ�����------------------------
db.runCommand({"getLastError":1});



//--------------�������Ѹ��µ��ĵ���-----------------
// �����Ѹ��µ��ĵ�������ͨ��findAndModify����������㡣
// ����������ͨ�ĸ��²�����ͬ������΢��Щ����Ϊ��Ҫ�ȵ����ݿ���Ӧ���ٷ��أ����������²�������˲����ɣ������������ἰ����
db.test0108.insert({"status" : "READY", "priority" :  1});
db.test0108.insert({"status" : "READY", "priority" :  2});
db.test0108.insert({"status" : "READY", "priority" :  3});
db.test0108.insert({"status" : "READY", "priority" :  4});
db.test0108.find();
db.test0108.update({"priority" :  1},{"$unset":{"status" : 1, "priority" :  1}});
db.test0108.update({"priority" :  1},{"$unset":{"priority" :  1}});
db.test0108.update({"status" : "READY"},{"$set":{"priority" :  1}});
//���ҷ��ظ��º���ĵ���
// ���ǽ���˵һ�����findAndModify��������漰���µļ�������ֱ�Ϊ��
// 1.  findAndModify : ��������
// 2.  query : ��ѯ�ĵ������ڶ�λ����������õ��ĵ���
// 3.  sort : �������ֻ��������һ���ĵ��ϣ����ƥ���˶��������������ȡ��һ�����и��¡����Ǵ���������
// ����Ҳ����һ���ĵ� {"priority" : -1}�� ���ֵΪ���ģ��������ֵΪ���ģ�������
// 4.  update : �޸����ĵ�����ƥ���һ���ĵ�ִ�еĲ�����
// 5.  remove : �������ͣ������Ƿ��Ƕ�ƥ����ĵ�����ɾ��������remove �� update����Ҳֻ�ܴ���һ����
// 6.  new : �������ͣ����ص��ĵ��м���value��ָ�����Ƕ�ĵ�������ƥ���ĵ��޸�ǰ�����޸ĺ�ġ����Ϊtrue��
// �����޸ĺ�ģ��������޸�ǰ�ģ���ƥ����ĵ��϶�Ҳ�Ǳ��޸��ˡ�
// findAndModify ���������Щ���ƣ�һ��ֻ�ܸ���һ���ĵ�������ֻ��ִ�и��»�ɾ��������ִ��������
// ���û��ƥ�䵽�κ��ĵ����򲻻�ִ���κθ��²��������ص��ĵ��м���value����ֵΪnull��
db.runCommand({"findAndModify":"test0108",//findAndModify���������
    "query":{"status":"READY"},
    "sort":{"priority":-1},//--------------������ͬ�����е����һ��
    "update":{"$set":{"status":"RUNNING"}},
    "new":true});
db.test0108.find();   
db.runCommand({"findAndModify":"test0108",//findAndModify���������
    "query":{"status":"READY"},
    "sort":{"priority":1},//--------------������ͬ�����еĵ�һ��
    "update":{"$set":{"status":"RUNNING"}},
    "new":true});
  
  
  
    
    
//--------����ѯ��------------------------
db.test0108.insert({"name":"tom","age":"18"});
db.test0108.insert({"name":"jimmy","age":"28"});
db.test0108.insert({"name":"tim","age":"38"});
db.test0108.find({});
// ����ʹ��find�����ĵڶ�����������ָ�����صļ�ֵ�ԣ����������Լ��ٴ�����������Ӷ��ӿ�Ч�ʡ��ڶ�������ͬ���Ǹ��ĵ�
db.test0108.find({},{"age":1,"name":1});
db.test0108.find({},{"name":1,"age":1});
db.test0108.find({},{"name":1});
db.test0108.find({},{"name":1,"_id":0});
db.test0108.find({},{"name":1,"age":0});//���ڷ�"_id"�����м�����ֵҪôͬʱ������0������Ҫ��ѯ�ü�ֵ�ԣ���
                                            //Ҫôͬʱ����0������Ҫ���Ըü�ֵ�ԣ�������ִ�б���

db.test0108.find({},{"name":0,"age":0});
db.test0108.find({},{"name":0,"age":0,"_id":1});//���ڷǡ�_id�������м��������ֵȫ��Ϊ0�����ʱ���
                                                    //Ҳָ���˼���_id��������������_id����ֵ����Ϊ0������ִ�б���
//*******************���ϣ������ܽ�һ�������Ҫʹ�õڶ�����������ʹ�õļ���Ϊ��ָ��������Ҫ�õ��ļ���ֵΪ��0�����֣������Ҫ���˼�"_id"��
//����ָ��"_id"�����ֵΪ0���ɡ�***************************


// ��$lt������$lte������$gt������$gte�� �������еķ�Χ�Ƚϲ��������ֱ��Ӧ<��<=��>��>=��
db.test0108.find({"age":{"$gte":18,"$lte":39}});
db.test0108.find({});
db.people.insert({"name":"tom","age":"18"});
db.people.insert({"name":"jimmy","age":"28"});
db.people.insert({"name":"tim","age":"38"});
db.people.find({"age":{"$gte":18,"$lte":39}});
db.people.find();
db.people.find({"age":{"$gte":8,"$lte":30}}); //?????�������ã���


// ������"$ne"������ʾ����ȡ�������Ҫ��ѯע���û��������ڡ�tom�����ĵ���
db.people.find({"name":{"$ne":"tom"}});
db.people.find({"age":{"$ne":18}});//???

db.people.find({"age":{"$in":[18,28,29,40]}},{"name":1});
db.people.find({"$or":[{"age":{"$in":[18,28,29,40]}},{"name":"tim"}]});//����$in�������ã���

//$modȡ��
db.people.find({"age":{"$mod":[28,0]}});//???
//$not��Ԫ�������������������κ���������֮�ϵģ�����ȡ��
db.people.find({"age":{"$not":{"$mod":[18,0]}}});//???���±ƣ���  ���һ������
db.people.find({"age":{"$not":{"$mod":[12,0]}}}); 
db.people.find();



//��ѯ��y��Ӧ��ֵΪnull������
db.cc.insert({"x":1,"y":null});
db.cc.insert({"x":0,"y":1});
db.cc.insert({"x":0,"y":2});
db.cc.insert({"x":0});
db.cc.find({});
db.cc.find({"y":null});//����ֵΪnull������ò�ƿ��Բ�ѯ��ȷ���ĵ���
                        //�����Ǻ�������������д���û�м�"y"���ĵ���
db.cc.find({"y":{"$in":[null],"$exists":true}});//��ȷ�ⷨ
                                  //��ΪMongoDB��û���ṩ������"$eq"������ȵ�������������
                                  //���ԡ�=null�����ж�ֻ��ͨ��{"$in"��[null]}��ʵ�֣�


//---------------��������ʽ��----------------------
//������ʽ��������ƥ���ַ������͵�ֵ��������Ҫ��ѯ��������Ϊ��joy����ͷ���Һ��Դ�Сд���û��ĵ���
//Shell��д������ʽ�ķ�ʽ��JavaScript��һ�£�д��һ�ԡ� // ��֮��ľ���������ʽ��
db.people.insert({"name":"joe","age":1});
db.people.insert({"name":"Joe","age":2});
db.people.insert({"name":"Joey","age":3});
db.people.find({"name":/joe.*/i});
db.people.find({"name":/joe/});

//�޸�����������������ĵ��ļ�������ѯ�����Ĳ��������������ڲ��ĵ��ļ���ע�⡰$or����һ�����⣩��




//-------------------����ѯ���顿----------------------------
db.fruitshop.insert({"name":"big fruit","fruits":["apple", "pear", "orange"]});
db.fruitshop.insert({"name":"good fruit","fruits":["banana", "pear", "orange" ]});
db.fruitshop.insert({"name":"good fruit","fruits":["banana", "apple", "tomato" ]});
db.fruitshop.insert({"name":"bad fruit","fruits":["a", "b", "c" ]});
db.fruitshop.insert({"name":"nice fruit","fruits":["d", "e"]});
db.fruitshop.find();
db.fruitshop.find({"fruits":"apple"});//ֻҪ����ƻ�������鶼�ܱ���ѯ������
//���Ҫͨ�����Ԫ����ƥ�����飬����Ҫ����������----"$all"��---��������Ҫ��ѯ����apple����banana��ˮ���꣺
db.fruitshop.find({"fruits":{"$all":["banana","apple"]}});//ʹ�á�$all����������Ԫ�ص�˳��û��Ҫ��ֻҪȫ�����������鶼�ܲ�ѯ������
//�����ѯҲ����ʹ�þ�ȷƥ��ķ�ʽ
db.fruitshop.find({"fruits":["apple", "pear", "orange"]});//��ȷƥ��
//�����е�����������Ϊ��ʹ�ã�������Ҫƥ��ˮ�����۵ڶ���ˮ����orange ��ˮ����
db.fruitshop.find({"fruits.1":"apple"});
//"$size"����������������������ѯ�ض����ȵ�����ģ�������Ҫ��ѯ��3��ˮ����ˮ���꣺
db.fruitshop.find({"fruits":{"$size":3}});//"$size"���ܺ����������������硰$gt����
                                            //ʹ���������������ֻ�ܾ�ȷ��ѯĳ�����ȵ����顣
//��ֻ���ѯˮ��������˵�������ǰ������
db.fruitshop.find({},{"fruits":{"$slice":2}});
//��$slice��Ҳ���ԴӺ����ȡ���ø������ɣ���-1������ȡ���һ����
//�����Խ�ȡ�м䲿�֣���[2,3]��������ǰ��������ȡ3�������ʣ�಻��3������ȫ�����أ�
db.fruitshop.find({},{"fruits":{"$slice":-1}});
db.fruitshop.find({},{"fruits":{"$slice":[1,2]}});
// ����ڶ����������и���ʹ��������������"$slice"����Ĭ�ϲ�ѯ�᷵�����еļ��������ʱ��Ҫ������Щ���������ֶ�ָ����
db.fruitshop.find({},{"fruits":{"$slice":[1,2]},"_id":0,"name":0});




//-------------------------����ѯ��Ƕ�ĵ���---------------------------------------
db.staff.insert({ "_id" : ObjectId("50225fc909248743250688e6"), 
    "name" : { "first" : "joe", "middle" : "bush", "last" : "Schmoe" }, "age" : 45 });
db.staff.insert({ "_id" : ObjectId("50225fe209248743250688e7"), 
    "name" : { "first" : "joe", "middle" : "bush" }, "age" : 35 } ); 
db.staff.insert({ "_id" : ObjectId("50225fff09248743250688e8"), 
    "name" : { "middle" : "bush", "first" : "joe" }, "age" : 25 });
db.staff.find();
db.staff.find({"name":{"first":"joe","middle":"bush"}});
db.staff.find({"name":{"first":"joe"}}); //�����鲻������

//�����Ƕ�ĵ��ض���ֵ�ԵĲ�ѯ����õģ�ͨ�����ʾ������ȷ��ʾ��Ƕ�ĵ��ļ���
db.staff.find({"name.first":"joe","name.middle":"bush"});//ͨ�����ʾ�������Ա�ʾ���뵽��Ƕ�ĵ��ڲ��ļ���
                                                            //���á����ʾ��������ѯ��Ƕ�ĵ�����ҲԼ�����ڲ����ĵ�ʱ��
                                                            //�κμ������ܰ�����.�� !!


//----����Ƕ�ĵ���ø��Ӻ������ֵΪ��Ƕ�ĵ������飬������Ƕ�ĵ���ƥ����ҪһЩ���ɣ���������-----------
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
db.blogs.find({"comment":{"$elemMatch":{"author":"joe", "score":{"$gte":3}}}});//��������$elemMatch���������һ��������
                                                                        //���һ��ܴﵽ�ġ����ʾ������ģ����ѯ��Ч����
//"$where"����������ִ������JavaScript��Ϊ��ѯ��һ���֣�
db.fruitprice.insert({ "_id" : ObjectId("50226b4c3becfacce6a22a5b"), "apple" : 10, "banana" : 6, "pear" : 3 });  
db.fruitprice.insert({ "_id" : ObjectId("50226ba63becfacce6a22a5c"), "apple" : 10, "watermelon" : 3, "pear" : 3 });
db.fruitprice.insert({ "a" : 10, "b" : 6, "c" : 3 });
db.fruitprice.insert({ "a" : 10, "e" : 7, "c" : 3 });
db.fruitprice.insert({ "a" : 10, "f" : 3, "c" : 3 });
db.fruitprice.remove({"apple":10});
 db.fruitprice.find();
// ʹ��"$where"��ʵ����д��һ��javascript������MongoDB�ڲ�ѯʱ���Ὣÿ���ĵ�ת����һ��javascript����
// Ȼ���ӵ����������ȥִ�У�ͨ�����ؽ�����ж����Ƿ�ƥ�䣡��ʵ��ʹ���У���������ʹ�á�$where" ��������������Ϊ�����ܺܲ
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



//------------------��MongoDB��ѯ(�α�ʹ��)��----------------------
// MongoDB��find()��������һ���α꣬�ͻ���ͨ�����α����һЩ���þ��ܶԲ�ѯ���������Ч�ؿ��ƣ�
// ��������Ʋ�ѯ�õ��Ľ���������������ֽ������Խ�������������������ȣ�
for(var i=0;i<100;i++){
    db.coll.insert({"x":i});
}
db.coll.find();

// ��������ʵ�ʷ������ǣ�������find�󣬴�ʱShell������ȥ�����ط������ݿ⣬
// ���ǵȴ���ʼҪ���ý����ʱ��������ݿⷢ�Ͳ�ѯ�������Ǵ�ʱ���Զ�����α���и������ã�
// Ȼ������α��hashNext()��next()�����������ͻ������������ݿ⣬����һ�������صĹ���
var cursor = db.coll.find();
while(cursor.hasNext()){
    var doc = cursor.next();
}

db.fruitprice.insert({ "_id" : ObjectId("50226b4c3becfacce6a22a5b"), "apple" : 10, "banana" : 6, "pear" : 3 });  
db.fruitprice.insert({ "_id" : ObjectId("50226ba63becfacce6a22a5c"), "apple" : 10, "watermelon" : 3, "pear" : 3 });  
db.fruitprice.insert({ "_id" : ObjectId("5023a1db7dceac1a6dacb0b7"), "apple" : 8, "orange" : 4, "tomato" : 3 } ); 
db.fruitprice.insert({ "_id" : ObjectId("5023a1eb7dceac1a6dacb0b8"), "apple" : 9, "orange" : 5, "grape" : 12 });  
db.fruitprice.insert({ "_id" : ObjectId("5023a2037dceac1a6dacb0b9"), "melon" : 7, "orange" : 3, "grape" : 11 } );
// ��������ʵ�ʷ������ǣ�������find�󣬴�ʱShell������ȥ�����ط������ݿ⣬
// ���ǵȴ���ʼҪ���ý����ʱ��������ݿⷢ�Ͳ�ѯ�������Ǵ�ʱ���Զ�����α���и������ã�
// Ȼ������α��hashNext()��next()�����������ͻ������������ݿ⣬����һ�������صĹ���
db.fruitprice.find();
db.fruitprice.remove({"c":3});
db.fruitprice.find().sort({"orange":1,"apple":-1});
db.fruitprice.find().skip(1).limit(3).sort({"orange":1,"apple":-1});
// ������ʹ��skip�Թ����������
// ʹ��skip�Թ������ĵ�Ч�ʲ�����ʲôӰ�죬����Թ��������������ܻ��������ƿ����
db.fruitprice.find({"apple":10}).sort({"pear":1});
db.fruitprice.find({"$query":{"apple":10},"$orderby":{"pear":1}});//????�ò��ˣ���"errmsg" : "unknown top level operator: $query",
db.fruitprice.find({"$query" : {"apple" : 10}, "$orderby" : {"banana" : 1}});



//-------------����������顢ʹ��----------------------------
//�������ڵ�����ҪĿ�ľ��Ǽӿ��ѯ�ٶȣ����ݿ�����ݺ����������Զ�Ӧʵ��������ʹ�õ��ֵ��Լ��ֵ�ǰ����������֡�
// MongoDB�Բ�������κ������Ĳ�ѯ������С�ȫ��ɨ�衱������ѯ�������ϡ�
// ���ڴ�ļ��ϣ�Ч�ʻ�ܵͣ�ͨ������Ҫ���⡰ȫ��ɨ�衱�ĳ��֣�
db.user.insert({ "_id" : ObjectId("5020faf5d6acd1b2a3fb316f"), "name" : "tim", 
    "age" : 40, "registered" : ISODate("2007-03-02T16:00:00Z") }  );
db.user.insert({ "_id" : ObjectId("5020fb08d6acd1b2a3fb3170"), "name" : "tom", 
    "age" : 29, "registered" : ISODate("2009-07-02T16:00:00Z") }  );
db.user.insert({ "_id" : ObjectId("5020fb27d6acd1b2a3fb3171"), "name" : "jimmy", 
    "age" : 18, "registered" : ISODate("2009-09-02T16:00:00Z") });
db.user.find();
// MongoDB��ͨ�����ü��ϵ�ensureIndex�����������������������ǽ����ڼ���֮�ϵġ�
db.user.ensureIndex({"name":1,"age":-1});//ensureIndex�����Ĳ�����ǰ�潲���α��sort������࣬
                                           //����һ���ĵ���ʹ�ö�Ӧ�����еļ�����ֵ��ʾ���������ķ���
                                              //  ֵ>0��ͨ��Ϊ1����ʾ�����򹹽��������ݣ�
                                            //ֵ<0��ͨ��Ϊ-1����ʾ�����򹹽��������ݡ��������ǽ���һ������������������


// ʹ��������ÿ�ζԼ��ϵĲ��롢���¡�ɾ��������ΪҪ������������������Ŀ�����
// ����ͨ������������һ�β��룬��β�ѯ�����²��Ǻ�Ƶ���ļ��ϣ�����Ҫ����������Чʹ�ã�
// ��Ҫ����ش�������������ǿ��һ�£���ֹΪÿһ�������������������ļ��ϲ����ٶȻ�ǳ�����
// MongoDB�й涨һ�����������64����������������㹻�ģ�


// ��Ҫ��Ҫ������������Ч��Ҳ����Ҫ��ģ����ǰ�˳��ʹ�ù���������һ���ּ���ȫ�����������Ż���Ч��
// ��仰����˼���ǣ��������ǹ�������һ��������{��a����1, "b"��1, "c"��1,"d"��1}��
// ������ʱ˳������������3������{"a"��1}��{��a����1�� ��b����1}��{"a"��1��"b"��1����c����1}��
// ֻҪ�����⼸�������Ĳ�ѯ���ᴥ���������������
db.index_test.insert({"a":9,"b":15,"c":29,"d":31,"e":15});
db.index_test.insert({"a":5,"b":15,"c":28,"d":32,"e":33});
db.index_test.insert({"a":6,"b":11,"c":27,"d":33,"e":21});
db.index_test.insert({"a":3,"b":13,"c":26,"d":34,"e":64});
db.index_test.insert({"a":7,"b":12,"c":25,"d":35,"e":14});//�и����ɣ������ѯ��󷵻صĽ��������>Ŀ�꼯���ĵ�������һ�룬
                                                            //ʹ�������������硰ȫ��ɨ�衱��
db.index_test.insert({"a":4,"b":14,"c":24,"d":36,"e":6});
db.index_test.insert({"a":2,"b":16,"c":23,"d":37,"e":66});
db.index_test.insert({"a":1,"b":17,"c":22,"d":38,"e":24});
db.index_test.insert({"a":6,"b":19,"c":21,"d":39,"e":43});
db.index_test.insert({"a":2,"b":18,"c":20,"d":30,"e":47});
db.index_test.find();
db.index_test.ensureIndex({"a":1,"b":1,"c":1,"d":1,"e":1});


// --------------------��������Ƕ�ĵ���������-----------------
// Ϊ��Ƕ�ĵ���������������Ϊ��ͨ�ļ�����������һ���ģ���Ƕ�ĵ��ļ�ͨ�����ʾ����ʾ���ɣ��磺
db.blogs.ensureIndex({"blogs.author":1});


//--------------------��Ϊ���򴴽�������----------------------
// ��������̫��ʱ����ʱ���ǿ��ܵ�����Ϊ�˲�ѯ������ȥ����������������ڲ�ѯ��ʹ��û�д��������ļ�
// ������MongoDB�Ὣ���е�����ȡ���ڴ���������������������������ڴ�Ĵ�С����MongoDB�����
// �����������������Ҳ����Ҫ��ģ���T����������޷����ڴ��н������򣡷���MongoDB�ᱨ��������
// ����Ҫ�Գ������ݼ���ĳ�����������Ǿ�ҪΪ���������������MongoDB�ᰴ������˳����ȡ���ݣ������Ͳ���ľ��ڴ棡




// --------------------���������ơ�--------------------
// ������ÿ������������һ���ַ������֣���Ψһ��ʾ���������MongoDBͨ���������������������Ĭ�����������ƹ���Ϊ��
// keyname1_dir1_keyname2_dir2.....��keyname�ǹ��������ļ����ƣ�dir�Ǵ����䷽������֣������Ǵ�������{"a"��1����b����1}��
// ���Ӧ��Ĭ�������ǣ�"a_1_b_1"�������ڴ�������ʱҲ����Ϊ����ָ�����ƣ�
db.user.ensureIndex({"name":1,"age":1,"registered":-1}, {"name":"myuserIndex"}); 



// -------------------------������Ψһ������------------------------
// Ψһ��������ȷ��������ĳһ��ָ������ÿһ���ĵ��е�ֵ����Ψһ�ģ����������ӣ�
// ����Ҫ��֤�û���������Ψһ�ģ����ǿ��Զ�����������Ψһ��������insert�ڲ���ʱ����м�⣬�����ֵ�Ѿ����ڣ��ͱ���
 db.user.ensureIndex({"name":1},{"unique":true}); 



//-----------------------�������ظ���-----------------------------------
// ʵ������У�����Ϊһ�����ϴ�������ʱ��������ͨ���Ѿ������˺ܶ����ݣ�
//  �����������ҪΪĳһ��������Ψһ���������п���ʧ�ܣ���Ϊ�������ֵ��ʱ�ڸü����п����Ѿ��ظ��ˣ�
// MongoDB�������ṩ��ɾ���ظ����ֹ���ѡ���dropDups����ʹ������ѡ���Ψһ��������
//  �ᱣ���������һ�γ���ĳ��ֵ���ĵ����ٴγ������ֵ���ĵ���ֱ�ӱ�ɾ��������������ӣ�
db.user.ensureIndex({"name":1},{"unique":true, "dropDups":true});  













