import { ToDoModel } from './model';

export interface RepoDB {
	SaveToDo(newToDo: ToDoModel): Promise<ToDoModel>;
	GetToDo(id: string): Promise<ToDoModel>;
	GetToDoList(): Promise<ToDoModel[]>;
	EditToDo(info: ToDoModel): Promise<void>;
	DeleteToDo(id: string): Promise<void>;
}

export interface Drivers {}
