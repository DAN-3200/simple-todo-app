import { ToDoModel } from './model';
import { ToDoService } from './services';
import { Request, Response } from 'express';

export class ToDoController {
	private service: ToDoService;
	constructor(service: ToDoService) {
		this.service = service;
	}
	// arrow function usa o 'this' do escopo a qual foi declarado
	SaveToDo = async (req: Request, res: Response) => {
		let bodyReq = req.body as ToDoModel;
		let response = await this.service.SaveToDo(bodyReq);
		res.status(201).json(response);
	};
	GetToDo = async (req: Request, res: Response) => {
		let paramReq = req.params.id;
		let response = await this.service.GetToDo(paramReq);
		res.status(200).json(response);
	};
	GetToDoList = async (_req: Request, res: Response) => {
		let response = await this.service.GetToDoList();
		res.status(200).json(response);
	};
	EditToDo = async (req: Request, res: Response) => {
		let paramReq = req.params.id;
		let bodyReq = req.body as ToDoModel;
		bodyReq.id = paramReq;
		await this.service.EditToDo(bodyReq);
		res.status(200).send('ToDo editado');
	};
	DeleteToDo = async (req: Request, res: Response) => {
		let queryReq = req.query.id as string;
		await this.service.DeleteToDo(queryReq);
		res.status(204).send("ToDo deletado");
	};
}
