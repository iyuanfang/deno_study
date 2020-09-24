// @ts-ignore
import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

// 创建连接
const client = new MongoClient();
// 建立连接
client.connectWithUri("mongodb://localhost:27017");
const db = client.database("test");

const people=db.collection("people");

console.log("init mongodb")

// people.insertOne({name:"yuanfang"})
// people.insertOne({name:"tingting",sex:"F"})
people.deleteMany({name:"yuanfang"})

let p=await people.findOne({});
console.log(p);