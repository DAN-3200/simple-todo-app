import { useAtom } from 'jotai';
import { ctxMain } from '../../contexts/ctxMain';
import { iToDo, ToDoStatus } from '../../types/useTypes';
import clsx from 'clsx';

export function NavBar() {
	const [, setDB] = useAtom(ctxMain.BagToDos);
	const [option, setOption] = useAtom(ctxMain.optionBar);
	const [search, setSearch] = useAtom(ctxMain.search);

	const createNote = async () => {
		// const response = await fetch();
		var test = {
			id: Math.random(),
			desc: 'add',
			createdAt: new Date(),
			status: 'concluida',
		} as iToDo;
		setDB((prev) => [...(prev ?? []), test]);
	};

	return (
		<div className='shrink-0 w-136 bg-white p-2 h-13 flex gap-1 rounded-lg text-sm flex-row '>
			
			<input
				type='text'
				name=''
				id=''
				value={search}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
				className='bg-stone-200 focus:bg-stone-300 transition-colors w-full rounded outline-none font-bold text-[#28282b] px-2 text-base'
			/>
			<button
				onClick={() => createNote()}
				className='clickBTN rounded px-4 w-4 bg-purple-500 text-white font-bold text-[20px] cursor-pointer grid place-content-center'>
				C
			</button>
		</div>
	);
}

export function FilterStatus() {
	const [option, setOption] = useAtom(ctxMain.optionBar);
	const OptionBar = ({ text }: { text: ToDoStatus | 'todos' }) => (
		<button
			onClick={() => setOption(text)}
			className='px-2'>
			<span
				className={clsx(
					'transition-all cursor-pointer text-base font-extrabold',
					option == text ? 'text-white' : 'text-black/70 hover:text-black'
				)}>
				{text}
			</span>
		</button>
	);

	return (
		<div className='flex items-center gap-1 '>
			<OptionBar text='todos' />
			<strong className='opacity-50 cursor-default'>|</strong>
			<OptionBar text='pendente' />
			<OptionBar text='concluida' />
			<strong className='opacity-50 cursor-default'>|</strong>
			<OptionBar text='deletada' />
		</div>
	);
}
