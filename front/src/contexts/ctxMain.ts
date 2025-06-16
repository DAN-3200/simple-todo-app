import { atom } from 'jotai';
import { ToDoModel, ToDoStatus } from '../domain/model/model';

export const ctxMain = {
	BagToDos: atom<ToDoModel[]>([
		{ id: 's', desc: '', status: 'pendente', createdAt: new Date() },
	] as ToDoModel[]),
	optionBar: atom<ToDoStatus | 'todos'>('todos'),
	search: atom<string>(''),
};
