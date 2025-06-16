import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ToDoApp from './views/app';
import './tailwind.css';

const ManagerRouter = createBrowserRouter([
	{
		path: '/',
		element: <ToDoApp />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={ManagerRouter} />
	</StrictMode>
);
