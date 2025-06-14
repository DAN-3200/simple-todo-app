import { atom } from 'jotai';
import { ToDoModel, ToDoStatus } from '../types/useTypes';

export const ctxMain = {
	BagToDos: atom<ToDoModel[]>([
		{
			id: Math.random(),
			desc: 'Muita coisa Gulosa',
			createdAt: new Date(),
			status: 'pendente',
		},
	] as ToDoModel[]),
	optionBar: atom<ToDoStatus | 'todos'>('todos'),
	search: atom<string>(''),
};
