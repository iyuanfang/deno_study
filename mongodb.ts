// @ts-ignore
import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

// 创建连接
const client = new MongoClient();
// 建立连接
client.connectWithUri("mongodb://localhost:27017");
// 读取db，如果没有会自动创建
const db = client.database("test");

// 读取collection，如果没有会自动创建
const people=db.collection("people");

console.log("init mongodb")

//先清空表（collection）
people.deleteMany({})

//插入一条，参数为json串
people.insertOne({name:"yuanfang"})

//查找一条，就是刚才插入的
let p=await people.findOne({name:"yuanfang"});
console.log(p);

//更新这一条，名字改成yuanfang2
people.updateOne({name:"yuanfang"},{$set:{name:"yuanfang2"}})
p=await people.findOne({});
console.log(p);

