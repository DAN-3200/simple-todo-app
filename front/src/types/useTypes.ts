export interface ToDoModel {
	id: number;
	desc: string;
	status: ToDoStatus;
	createdAt: Date;
}

export type ToDoStatus = 'pendente' | 'concluida' | 'deletada';
