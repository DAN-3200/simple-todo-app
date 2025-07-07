import { atom } from 'jotai';
import { ToDoModel, ToDoStatus } from '../domain/model/model';

export const ctxMain = {
	BagToDos: atom<ToDoModel[]>([] as ToDoModel[]),
	optionBar: atom<ToDoStatus | 'todos'>('todos'),
	search: atom<string>(''),
	modalView: atom<string | null>(),
};

export const ctxToDo = {
	idItemRemove: atom<any>(),
};
