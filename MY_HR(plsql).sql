create table t_cscustomer
(
  cust_no         varchar2(12) primary key not null,
  person_id       varchar2(12),
  group_no        varchar2(12),
  cust_address_id varchar2(20),
  organiseid      varchar2(10),
  cust_name       varchar2(128),
  cust_type       varchar2(2),
  serve_password  varchar2(128),
  regioncode      varchar2(4),
  operator        varchar2(16),
  opendate        date,
  remark          varchar2(500),
  address         varchar2(256),
  cust_kind       varchar2(4),
  linkman         varchar2(64),
  linkphone       varchar2(64),
  linkmobile      varchar2(64),
  company_id      varchar2(10),
  install_address varchar2(256)
)

--declare 
--message varchar(25):='hello world';
--begin 
--dbms_output.put_line(message);
--end;
set serveroutput on;
DECLARE
   message  varchar2(20):= 'Hello, World!';
BEGIN
   dbms_output.put_line(message);
END;
/

--数据类型
DECLARE
   SUBTYPE name IS char(20);
   SUBTYPE message IS varchar2(100);
   salutation name;
   greetings message;
BEGIN
   salutation := 'Reader ';
   greetings := 'Welcome to the World of PL/SQL';
   dbms_output.put_line('Hello ' || salutation || greetings);
END;
/

declare
   a integer :=10;
   b integer :=20;
begin 
   a := a+b;
   dbms_output.put_line(a);
end;
/

DECLARE
   num1 INTEGER;
   num2 REAL;
   num3 DOUBLE PRECISION;
BEGIN
   null;
END;
/
declare 
   a integer:=10;
   b integer:=20;
begin
  dbms_output.put_line(a);
  dbms_output.put_line(b);
  declare 
    c integer:=30;
    d integer:=40;
  begin 
    dbms_output.put_line(c);
    dbms_output.put_line(d);
  end;
end;
/

--if...then
declare 
   a int(10) :=10;
begin 
  if(a<2) then 
     dbms_output.put_line('a小于20');
  end if;
  dbms_output.put_line(a);
end;
/

insert into test_user (id,uname,age,salary,address) values(1,'张三',18,1800.25,'蛇口');
insert into test_user (id,uname,age,salary,address) values(2,'李四',22,2500.25,'南山');
insert into test_user (id,uname,age,salary,address) values(3,'王五',30,3300.25,'福田');
select * from test_user;
commit;


--将数据表中查询出的结果插入到plsql变量中，并做判断、数据更新
declare
   a_id test_user.id%type;
   a_nm test_user.uname%type;
   a_upd_sal test_user.salary%type;
begin 
   select uname,id into a_nm,a_id
   from test_user
   where address='福田';
   dbms_output.put_line(a_nm||a_id);
   if(a_id<4) then
      update test_user set salary = salary + 1000 
      where id = a_id;
      select salary into a_upd_sal from test_user where id = a_id;
      dbms_output.put_line('salary updated'||a_upd_sal);
   end if;
end;
/

--plsql case语句
declare 
  a integer:=10;
begin
  case a 
    when 1 then dbms_output.put_line(1);
    when 1 then dbms_output.put_line(1);
    when 1 then dbms_output.put_line(1);
    when 1 then dbms_output.put_line(1);
    when 10 then dbms_output.put_line(10);
  end case;
end;
/


--plsql 搜查case语句
declare 
    b integer :=100;
begin 
    case b
       when 10 then dbms_output.put_line(10);
       when 1 then dbms_output.put_line(1);
       when 2 then dbms_output.put_line(2);
    else 
      dbms_output.put_line('呵呵');
    end case;
end;
/

--boolean类型测试
declare 
   a boolean := true;
begin 
/*boolean类型无法打印*/
  dbms_output.put_line('hehe');
  if(a) then
    dbms_output.put_line('aaaaaaaaaa');
  end if;
end;
/


--plsql 循环
declare
   i number(1);
   j number(1);
begin
  <<outer_loop>>
   for i in 1..3 loop
     <<innerloop>>
     for j in 1..3 loop
        dbms_output.put_line('i is '||i||'######j is '||j);
      end loop innerloop;
  end loop outerloop;
end;
/
set serveroutput on;  
declare
   a number(2);
   b number(2);
begin
  <<outerloop>>
  for a in 1..10 loop
      <<innerloop>>
      for b in 1..11 loop
         dbms_output.put_line('a is '||a||'b is '||b);
      end loop innerloop;
  end loop outerloop;
end;
/


declare 
   a number(10,2):=1.256;
begin 
  dbms_output.put_line(a);
end;
/
  
declare 
   a constant number(4,2):=11.0225;
begin 
   dbms_output.put_line(a);
end;
/

   
   
   
   
   
   


  
