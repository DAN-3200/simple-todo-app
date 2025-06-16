export interface ToDoModel {
	id: string;
	desc: string;
	status: ToDoStatus;
	createdAt: Date;
}

export type ToDoStatus = 'pendente' | 'concluida' | 'deletada';
