import { RepoDB } from './ports';
import { ToDoEntity } from './entity';

export class ToDoUseCase {
	private repo: RepoDB;
	constructor(repository: RepoDB) {
		this.repo = repository;
	}
	async SaveToDo(todo: ToDoEntity): Promise<ToDoEntity> {
		return await this.repo.SaveToDo(todo);
	}
	async GetToDo(id: string): Promise<ToDoEntity> {
		return await this.repo.GetToDo(id);
	}
	async GetToDoList(): Promise<ToDoEntity[]> {
		return await this.repo.GetToDoList();
	}
	async EditToDo(info: ToDoEntity) {
		await this.repo.EditToDo(info);
	}
	async DeleteToDo(id: string) {
		await this.repo.DeleteToDo(id);
	}
}
