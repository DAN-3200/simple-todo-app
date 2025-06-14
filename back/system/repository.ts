import { MongoClient, ObjectId } from 'mongodb';
import { RepoDB } from './contracts';
import { ToDoModel } from './model';

export class MongoRepoToDo implements RepoDB {
	private conn: MongoClient;
	constructor(conn: MongoClient) {
		this.conn = conn;
	}
	async CreateBASE() {
		const db = this.conn.db('ToDoBase');
		const nameCollection = 'ToDoS';
		const collections = await db
			.listCollections({ name: nameCollection })
			.toArray();
		if (collections.length === 0) {
			await db.createCollection(nameCollection);
		}
	}
	async SaveToDo(newToDo: ToDoModel): Promise<ToDoModel> {
		let objToDo = await this.conn
			.db('ToDoBase')
			.collection<ToDoModel>('ToDoS')
			.insertOne(newToDo);
		let toDo = await this.conn
			.db('ToDoBase')
			.collection<ToDoModel>('ToDoS')
			.findOne({ _id: objToDo.insertedId });

		return {
			id: toDo!._id.toString(),
			desc: toDo!.desc,
			status: toDo!.status,
			createdAt: toDo!.createdAt,
		} as ToDoModel;
	}
	async GetToDo(id: string): Promise<ToDoModel> {
		let toDo = await this.conn
			.db('ToDoBase')
			.collection<ToDoModel>('ToDoS')
			.findOne({ _id: new ObjectId(id) });

		return {
			id: toDo!._id.toString(),
			desc: toDo!.desc,
			status: toDo!.status,
			createdAt: toDo!.createdAt,
		} as ToDoModel;
	}
	async GetToDoList(): Promise<ToDoModel[]> {
		let toDoList = await this.conn
			.db('ToDoBase')
			.collection<ToDoModel>('ToDoS')
			.find({})
			.toArray();

		return toDoList.map<ToDoModel>((item) => ({
			id: item._id.toString(),
			desc: item.desc,
			status: item.status,
			createdAt: item.createdAt,
		}));
	}
	async EditToDo(info: ToDoModel): Promise<void> {
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
