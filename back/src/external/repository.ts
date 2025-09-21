import { MongoClient, ObjectId } from 'mongodb';
import { RepoDB } from '../internal/ports';
import { ToDoEntity } from '../internal/entity';

export class MongoRepoToDo implements RepoDB {
	private conn: MongoClient;
	constructor(conn: MongoClient) {
		this.conn = conn;
	}
	async CreateToDoDB() {
		const db = this.conn.db('ToDoBase');
		const nameCollection = 'ToDoS';
		const collections = await db
			.listCollections({ name: nameCollection })
			.toArray();
		if (collections.length === 0) {
			await db.createCollection(nameCollection);
		}
	}
	async SaveToDo(newToDo: ToDoEntity): Promise<ToDoEntity> {
		let objToDo = await this.conn
			.db('ToDoBase')
			.collection<ToDoEntity>('ToDoS')
			.insertOne(newToDo);
		let toDo = await this.conn
			.db('ToDoBase')
			.collection<ToDoEntity>('ToDoS')
			.findOne({ _id: objToDo.insertedId });

		return {
			id: toDo!._id.toString(),
			desc: toDo!.desc,
			status: toDo!.status,
			createdAt: toDo!.createdAt,
		} as ToDoEntity;
	}
	async GetToDo(id: string): Promise<ToDoEntity> {
		let toDo = await this.conn
			.db('ToDoBase')
			.collection<ToDoEntity>('ToDoS')
			.findOne({ _id: new ObjectId(id) });

		return {
			id: toDo!._id.toString(),
			desc: toDo!.desc,
			status: toDo!.status,
			createdAt: toDo!.createdAt,
		} as ToDoEntity;
	}
	async GetToDoList(): Promise<ToDoEntity[]> {
		let toDoList = await this.conn
			.db('ToDoBase')
			.collection<ToDoEntity>('ToDoS')
			.find({})
			.toArray();

		return toDoList.map<ToDoEntity>((item: any) => ({
			id: item._id.toString(),
			desc: item.desc,
			status: item.status,
			createdAt: item.createdAt,
		}));
	}
	async EditToDo(info: ToDoEntity): Promise<void> {
		await this.conn
			.db('ToDoBase')
			.collection('ToDoS')
			.updateOne({ _id: new ObjectId(info.id) }, { $set: info });
	}
	async DeleteToDo(id: string): Promise<void> {
		await this.conn
			.db('ToDoBase')
			.collection('ToDoS')
			.deleteOne({ _id: new ObjectId(id) });
	}
}
