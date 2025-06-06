import { atom } from 'jotai';
import { iToDo } from '../types/useTypes';

export const ctxMain = {
	BagToDos: atom<iToDo[]>([
		{
			id: 2,
			content: 'S',
			status: true,
			title: 'S',
			validity: '',
		} as iToDo,
	]),
	optionBar: atom('todos'),
};
