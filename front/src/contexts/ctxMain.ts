import { atom } from 'jotai';
import { iToDo } from '../types/useTypes';

export const ctxMain = {
	BagToDos: atom<iToDo[]>(),
	optionBar: atom('todos'),
};
