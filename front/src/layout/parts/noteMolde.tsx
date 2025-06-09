import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { ctxMain } from '../../contexts/ctxMain';
import { iToDo } from '../../types/useTypes';

export function NotesView() {
	const [DB, setDB] = useAtom(ctxMain.BagToDos);
	const [option, setOption] = useAtom(ctxMain.optionBar);

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
			setDB((prev) => [...prev, ...resp]);
		})();
		// --
	}, []);

	const filterRules = {
		todos: () => true,
		check: (item: iToDo) => item.status == true,
		pending: (item: iToDo) => item.status == false,
	};

	const filteredItems = DB.filter((item) =>
		filterRules[option] ? filterRules[option]?.(item) : true
	);

	return (
		<div className='w-134 h-full overflow-auto flex flex-col items-center gap-2'>
			{filteredItems.map((item) => (
				<Note
					key={`H${item.id}`}
					item={item}
				/>
			))}
		</div>
	);
}

function Note({ item }: { item: iToDo }) {
	return (
		<div className='bg-white w-full rounded-lg shrink-0 min-h-30 h-max flex flex-col overflow-x-hidden gap-1 py-1 transition-all'>
			<div className='h-12 shrink-0 grid place-items-center px-2 border-b-2 border-black/30'>
				<input
					type='text'
					placeholder='title...'
					className='w-full self-center-safe px-2 p border-transparent transition outline-none border-2 hover:border-stone-600 rounded focus:border-purple-500 text-lg'
				/>
			</div>
			<div className='h-full flex items-start px-2'>
				<textarea
					placeholder='typing'
					spellCheck='false'
					className='resize-none text-base px-2 focus:h-20 transition-all w-full border-transparent outline-none border-2 hover:border-stone-600 duration-300 rounded focus:border-purple-500 not-focus:line-clamp-1 not-focus:h-[2lh] '></textarea>
			</div>
			<div className='h-12 shrink-0'></div>
		</div>
	);
}
