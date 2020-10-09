// @ts-ignore
import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

// 创建连接
const client = new MongoClient();
// 建立连接
client.connectWithUri("mongodb://localhost:27017");
const db = client.database("study");

export const Books=db.collection("book");

export const Users=db.collection("user");
