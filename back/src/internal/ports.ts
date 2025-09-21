import { ToDoEntity } from './entity';

export interface RepoDB {
	SaveToDo(newToDo: ToDoEntity): Promise<ToDoEntity>;
	GetToDo(id: string): Promise<ToDoEntity>;
	GetToDoList(): Promise<ToDoEntity[]>;
	EditToDo(info: ToDoEntity): Promise<void>;
	DeleteToDo(id: string): Promise<void>;
}

// base para alguma adição de feature no Layer Service
export interface Drivers {}
