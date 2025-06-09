import { useAtom } from 'jotai';
import { Exchange } from '../../utils/fetch';
import { ctxMain } from '../../contexts/ctxMain';
import clsx from 'clsx';
import { iToDo, ToDoStatus } from '../../types/useTypes';

export function NavBar() {
	const [, setDB] = useAtom(ctxMain.BagToDos);
	const [option, setOption] = useAtom(ctxMain.optionBar);

	const createNote = async () => {
		// Requisição
		const response = (await Exchange(
			{
				title: '',
				content: '',
				favorited: option == 'check' ? true : false,
			},
			'http://127.0.0.1:5000/toDo/cards',
			'POST'
		)) as iToDo;

		// Atualizar o Local DB dos dados salvados no serverSide
		setDB((prev) => [...(prev ?? []), response as iToDo]);
	};

	const OptionsBar = ({
		text,
		status,
	}: {
		text: string;
		status?: ToDoStatus;
	}) => (
		<button
			className={clsx(
				'rounded px-2 font-bold cursor-pointer transition-color duration-500 w-max',
				option.toLowerCase() == status?.toLowerCase()
					? 'bg-purple-600 text-white'
					: 'bg-stone-200 text-stone-800  '
			)}
			onClick={() => status && setOption(status)}>
			{text}
		</button>
	);

	return (
		<div className='shrink-0 w-134 bg-white p-2 h-12 flex gap-1 rounded-lg text-sm flex-row '>
			<OptionsBar text='ToDos' />
			<OptionsBar
				text='Check'
				status={'concluída'}
			/>
			<OptionsBar
				text='Pending'
				status={'pendente'}
			/>
			<button
				className='clickBTN rounded px-4 w-max bg-purple-600 text-white font-bold text-whit ml-auto cursor-pointer'
				onClick={() => createNote()}>
				Create Note
			</button>
		</div>
	);
}
