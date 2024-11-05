import { Db, MongoClient } from "mongodb";


let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// const url = 'mongodb://design:aidtDEV@9.135.110.226:27017/rinoImg';
const url = 'mongodb://yourUserAdmin:yourPassword@115.159.76.109:27017/admin';

const dbName = 'admin';

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}