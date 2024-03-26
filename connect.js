import { MongoClient } from "mongodb";

const uri = "mongodb://guoyuanfeng:123456@192.168.11.119:27017/?authSource=guoDB";

const client = new MongoClient(uri);
const db = client.db("guoDB");
export default db;
