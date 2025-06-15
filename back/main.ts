import dotenv from 'dotenv';
import RunServer from './system/server';

// função 'main' = incializar tudo junto
(async () => {
	dotenv.config();
	RunServer().then(() => console.log('loggers...'));
})();
