import { RepoDB } from './contracts';
import { ToDoModel } from './model';

export class ToDoService {
	private repo: RepoDB;
	constructor(repository: RepoDB) {
		this.repo = repository;
	}
	async SaveToDo(todo: ToDoModel): Promise<ToDoModel> {
		return this.repo.SaveToDo(todo);
	}
	async GetToDo(id: string): Promise<ToDoModel> {
		return this.repo.GetToDo(id);
	}
	async GetToDoList(): Promise<ToDoModel[]> {
		return this.repo.GetToDoList();
	}
	async EditToDo(info: ToDoModel) {
		this.repo.EditToDo(info);
	}
	async DeleteToDo(id: string) {
		this.repo.DeleteToDo(id);
	}
}
