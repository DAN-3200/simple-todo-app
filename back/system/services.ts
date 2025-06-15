import { RepoDB } from './contracts';
import { ToDoModel } from './model';

export class ToDoService {
	private repo: RepoDB;
	constructor(repository: RepoDB) {
		this.repo = repository;
	}
	async SaveToDo(todo: ToDoModel): Promise<ToDoModel> {
		return await this.repo.SaveToDo(todo);
	}
	async GetToDo(id: string): Promise<ToDoModel> {
		return await this.repo.GetToDo(id);
	}
	async GetToDoList(): Promise<ToDoModel[]> {
		return await this.repo.GetToDoList();
	}
	async EditToDo(info: ToDoModel) {
		await this.repo.EditToDo(info);
	}
	async DeleteToDo(id: string) {
		await this.repo.DeleteToDo(id);
	}
}
