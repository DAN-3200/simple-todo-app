import { FilterStatus, NavBar } from './parts/navBar';
import { ToDoList } from './parts/todoView';

export default function ToDoApp() {
	document.getElementsByTagName('title')[0].innerHTML = 'ToDoApp';

	return (
		<div className='bg-pastel-purple h-screen w-screen p-2 flex flex-col items-center gap-3'>
			<NavBar />
			<FilterStatus />
			<ToDoList />
		</div>
	);
}
