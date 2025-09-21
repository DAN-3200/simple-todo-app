import dotenv from 'dotenv';
import RunServer from './src/external/server';

// função 'main' = incializar tudo junto
(async () => {
	dotenv.config();
	RunServer().then(() => console.log('loggers...'));
})();
