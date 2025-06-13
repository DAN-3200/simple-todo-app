import { atom } from 'jotai';
import { iToDo, ToDoStatus } from '../types/useTypes';

export const ctxMain = {
	BagToDos: atom<iToDo[]>([
		{ id: Math.random(), desc: 'Muita coisa Gulosa', createdAt: new Date(), status: 'pendente' },
	] as iToDo[]),
	optionBar: atom<ToDoStatus | 'todos'>('todos'),
	search: atom<string>('')
};
