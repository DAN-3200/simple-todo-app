import { RepoSQL } from './contracts';

export class ToDoService {
	private repo: RepoSQL;
	constructor(repository: RepoSQL) {
		this.repo = repository;
	}
}
