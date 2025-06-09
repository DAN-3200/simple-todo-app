// import './Design.scss';
import { useAtom } from 'jotai';
import { ctxMain } from '../contexts/ctxMain';
import { NavBar } from './parts/navBar';
import { NotesView } from './parts/noteMolde';
import { iToDo} from "../types/useTypes";

export default function Design() {
	document.getElementsByTagName('title')[0].innerHTML = 'App in Dev';

	const [,setToDos] = useAtom(ctxMain.BagToDos)
	// setToDos((prev) => [...prev, X])

	return (
		<div className='bg-pastel-purple h-screen w-screen p-2 flex flex-col items-center gap-2'>
			<NavBar />
			<NotesView/>
		</div>
	);
}
