import { useAtom } from 'jotai';
import { ctxMain } from '../contexts/ctxMain';
import { FilterStatus, NavBar } from './parts/navBar';
import { DeleteSoftToDo, ToDoList } from './parts/todoView';
import { JSX } from 'react/jsx-runtime';

export default function ToDoApp() {
	document.getElementsByTagName('title')[0].innerHTML = 'ToDoApp';

	const [modalView] = useAtom(ctxMain.modalView);
	const modalOptions: { [key: string]: JSX.Element } = {
		DeleteSoft: <DeleteSoftToDo />,
	};

	return (
		<>
			<div className='bg-pastel-purple h-screen w-screen p-2 flex flex-col items-center gap-3'>
				<NavBar />
				<FilterStatus />
				<ToDoList />
			</div>
			{modalView && (
				<div className='fixed inset-0 z-50 grid place-items-center bg-black/50'>
					{modalOptions[modalView]}
				</div>
			)}
		</>
	);
}
