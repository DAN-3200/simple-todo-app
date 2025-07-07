import Express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Conn_MongoDB } from './conn_db';
import { MongoRepoToDo } from './repository';
import { ToDoService } from './services';
import { ToDoController } from './controllers';

export default async function RunServer() {
	const server = Express();
	const port = 8000;

	server.use(Express.json(), morgan('dev'), cors());
	RoutesManager(server);

	server.listen(port, () => {
		console.clear();
		console.log(`\nserver running [http://localhost:${port}/] \n`);
	});
}

async function RoutesManager(server: Express.Application) {
	const repository = new MongoRepoToDo(await Conn_MongoDB());
	await repository.CreateToDoDB();
	const service = new ToDoService(repository);
	const handle = new ToDoController(service);

	server.post('/todo', handle.SaveToDo);
	server.get('/todo/:id', handle.GetToDo);
	server.get('/todo', handle.GetToDoList);
	server.patch('/todo/:id', handle.EditToDo);
	server.delete('/todo', handle.DeleteToDo);
}
