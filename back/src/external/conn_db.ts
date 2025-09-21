import { MongoClient } from 'mongodb';

export async function Conn_MongoDB(): Promise<MongoClient> {
	let URI = process.env.MONGO_URI!;
	const client = new MongoClient(URI);
	await client.connect();
	return client;
}
