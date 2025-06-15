import { ToDoModel } from './model';

export interface RepoDB {
	SaveToDo(newToDo: ToDoModel): Promise<ToDoModel>;
	GetToDo(id: string): Promise<ToDoModel>;
	GetToDoList(): Promise<ToDoModel[]>;
	EditToDo(info: ToDoModel): Promise<void>;
	DeleteToDo(id: string): Promise<void>;
}

// base para alguma adição de feature no Layer Service 
export interface Drivers {}
