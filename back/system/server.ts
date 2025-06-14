import Express from 'express';
import morgan from 'morgan';
import { Conn_MongoDB } from './conn_db';
import { MongoRepoToDo } from './repository';
import { ToDoService } from './services';

// definir o Framework Http externo
export async function RunServer() {
	const server = Express();
   const port = 8000;

   server.use(Express.json(), morgan("dev"))
   Routes(server)
   server.listen(port, () => {
		console.clear();
		console.log(`\nserver running [http://localhost:${port}/] \n`);
	})
}

async function Routes(s: Express.Application) {
	let Repo = new MongoRepoToDo(await Conn_MongoDB());
	await Repo.CreateBASE();
	const Service = new ToDoService(Repo);
}
