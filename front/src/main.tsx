import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Design from './layout/app';
import './tailwind.css';

const ManagerRouter = createBrowserRouter([
	{
		path: '/',
		element: <Design />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={ManagerRouter} />
	</StrictMode>
);
