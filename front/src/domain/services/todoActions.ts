// services = recebe e retorna informação
import { ToDoModel, ToDoStatus } from '../model/model';

export class ToDoService {
	static SaveToDo = async (
		status: ToDoStatus | 'todos'
	): Promise<ToDoModel> => {
		let response = await fetch('http://127.0.0.1:8000/todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: '',
				desc: '',
				status: status == 'todos' ? 'pendente' : status,
				createdAt: new Date(),
			} as ToDoModel),
		});

		return (await response.json()) as ToDoModel;
	};

	static GetToDoList = async (): Promise<ToDoModel[]> => {
		let resp: ToDoModel[];
		try {
			resp = (await (
				await fetch('http://127.0.0.1:8000/todo')
			).json()) as ToDoModel[];
		} catch (error) {
			resp = [];
			console.log(`Error: ${error}`);
		}
		return resp;
	};

	static EditToDo = async (todo: Partial<ToDoModel>): Promise<void> => {
		await fetch(`http://127.0.0.1:8000/todo/${todo.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(todo),
		});
	};

	static DeleteToDo = async (id: string): Promise<void> => {
		await fetch(`http://127.0.0.1:8000/todo?id=${id}`, {
			method: 'DELETE',
		});
	};
}
