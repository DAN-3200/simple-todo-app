import { MongoClient } from 'mongodb';

let URI = process.env.MONGO_URI!;

export async function Conn_MongoDB(): Promise<MongoClient> {
	const client = new MongoClient(URI);
	await client.connect();
	return client;
}
