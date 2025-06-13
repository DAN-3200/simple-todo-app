import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { ctxMain } from '../../contexts/ctxMain';
import { iToDo } from '../../types/useTypes';
import { BiTimeFive, BiTrashAlt } from 'react-icons/bi';
import clsx from 'clsx';

export function ToDoList() {
	const [DB, setDB] = useAtom(ctxMain.BagToDos);
	const [option, setOption] = useAtom(ctxMain.optionBar);
	const [search] = useAtom(ctxMain.search);

	// Requisição de todos os dados
	useEffect(() => {
		// --
		(async () => {
			let resp;
			try {
				resp = await (await fetch('http://127.0.0.1:5000/toDo/cards')).json();
			} catch (error) {
				resp = [];
				console.log(`Error: ${error}`);
			}
			setDB((prev) => [...(prev ?? []), ...resp]);
		})();
		// --
	}, []);

	let filteredItems =
		option != 'todos' ? DB?.filter((item) => item.status == option) : DB;

	filteredItems = filteredItems.filter((item) =>
		item.desc.toLowerCase().includes(search.toLowerCase().trim())
	);

	return (
		<div className='w-128 h-full overflow-auto flex flex-col items-center gap-2'>
			{filteredItems.map((item) => (
				<ToDoView
					key={item.id}
					item={item}
				/>
			))}
		</div>
	);
}

function ToDoView({ item }: { item: iToDo }) {
	const [status, setStatus] = useState(item.status);
	const [desc, setDesc] = useState(item.desc);

	return (
		<div className='bg-white w-full rounded-lg shrink-0 h-max flex flex-col overflow-hidden transition-all'>
			<div className='m-2 p-1 border-2 border-transparent hover:border-stone-300 transition-all duration-200 rounded font-semibold '>
				<textarea
					placeholder='Escreva'
					className='not-focus:line-clamp-1 not-focus:h-lh text-[16px] w-full h-10 focus:h-40 resize-none px-2 outline-none text-[#28282b] transition-all'
					spellCheck='false'
					value={desc}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setDesc(e.target.value)
					}
				/>
			</div>

			<div className='h-11 shrink-0 bg-stone-200 flex py-2 px-3 gap-2'>
				<button
					onClick={() =>
						setStatus((prev) =>
							prev == 'concluida' ? 'pendente' : 'concluida'
						)
					}
					className={clsx(
						'clickBTN h-full w-21 px-2 font-bold rounded cursor-pointer grid place-content-center',
						status == 'concluida'
							? 'bg-green-500/50  text-green-700'
							: 'bg-orange-600/50 text-orange-700'
					)}>
					{status == 'concluida' ? 'concluido' : 'pendente'}
				</button>

				<span className='bg-stone-500/30 h-full w-max text-stone-600 font-bold rounded cursor-default items-center gap-1 px-2 text-sm flex'>
					<BiTimeFive size={16} />
					{item.createdAt
						.toLocaleDateString('pt-BR', {
							day: '2-digit',
							month: 'short',
							year: 'numeric',
						})
						.replace('.', '')}
				</span>

				<button className='hover:bg-red-500/50 text-stone-400/50 clickBTN h-full w-7 ml-auto  hover:text-red-700 font-bold rounded cursor-pointer grid place-content-center transition-colors'>
					<BiTrashAlt />
				</button>
			</div>
		</div>
	);
}
