import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { ctxMain } from '../../contexts/ctxMain';
import { ToDoModel } from '../../domain/model/model';
import { BiTimeFive, BiTrashAlt } from 'react-icons/bi';
import clsx from 'clsx';
import { ToDoService } from '../../domain/services/todoActions';

export function ToDoList() {
	const [DB, setDB] = useAtom(ctxMain.BagToDos);
	const [option, setOption] = useAtom(ctxMain.optionBar);
	const [search] = useAtom(ctxMain.search);

	useEffect(() => {
		// --
		(async () => {
			let list = await ToDoService.GetToDoList();
			setDB(list);
		})();
		// --
	}, []);

	let filteredItems =
		option != 'todos'
			? DB?.filter((item) => item.status == option)
			: DB?.filter((item) => item.status != 'deletada');

	filteredItems = filteredItems.filter((item) =>
		item.desc.toLowerCase().includes(search.toLowerCase().trim())
	);

	return (
		<div className='w-128 h-full overflow-auto flex flex-col items-center gap-2 no-scrollbar'>
			{filteredItems.length == 0 && (
				<div className='font-bold text-black/50'>não há anotações</div>
			)}
			{filteredItems.map((item) => (
				<ToDoView
					key={item.id}
					info={item}
				/>
			))}
		</div>
	);
}

function ToDoView({ info }: { info: ToDoModel }) {
	const [status, setStatus] = useState(info.status);
	const [desc, setDesc] = useState(info.desc);
	const [, setDB] = useAtom(ctxMain.BagToDos);

	const deleteSoftToDo = async () => {
		if (info.status != 'deletada') {
			await ToDoService.EditToDo({ id: info.id, status: 'deletada' });
			setDB((prev) =>
				prev.map((item) =>
					item.id == info.id ? { ...item, status: 'deletada' } : item
				)
			);
		} else {
			await ToDoService.DeleteToDo(info.id);
			setDB((prev) => prev.filter((item) => item.id != info.id));
		}
	};

	const UpdateToDo = async () => {
		await ToDoService.EditToDo({ id: info.id, desc: desc, status: status });
		setDB((prev) =>
			prev.map((item) =>
				item.id == info.id ? { ...item, desc: desc, status: status } : item
			)
		);
	};
	const RefreshToDo = async () => {
		await ToDoService.EditToDo({ id: info.id, status: 'pendente' });
		setDB((prev) =>
			prev.map((item) =>
				item.id == info.id ? { ...item, status: 'pendente' } : item
			)
		);
	};

	useEffect(() => {
		UpdateToDo();
	}, [status, desc]);

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
						status != 'deletada' &&
						setStatus((prev) =>
							prev == 'concluida' ? 'pendente' : 'concluida'
						)
					}
					className={clsx(
						'h-full w-21 px-2 font-bold rounded grid place-content-center',
						status == 'deletada'
							? 'bg-stone-500/50 text-stone-700'
							: status == 'concluida'
							? 'bg-green-500/50  text-green-700 clickBTN cursor-pointer'
							: 'bg-orange-600/50 text-orange-700 clickBTN cursor-pointer'
					)}>
					{status == 'deletada'
						? 'deletada'
						: status == 'concluida'
						? 'concluido'
						: 'pendente'}
				</button>

				<span className='bg-stone-500/30 h-full w-max text-stone-600 font-bold rounded cursor-default items-center gap-1 px-2 text-sm flex'>
					<BiTimeFive size={16} />
					{new Date(info.createdAt)
						.toLocaleDateString('pt-BR', {
							day: '2-digit',
							month: 'short',
							year: 'numeric',
						})
						.replace('.', '')}
				</span>
				<div className='ml-auto flex gap-2'>
					{status == 'deletada' && (
						<button
							onClick={() => RefreshToDo()}
							className='hover:bg-blue-500/50 text-stone-400/50 clickBTN h-full w-max px-2 hover:text-blue-700 font-bold rounded cursor-pointer grid place-content-center transition-colors'>
							restaurar
						</button>
					)}
					<button
						onClick={() => deleteSoftToDo()}
						className='hover:bg-red-500/50 text-stone-400/50 clickBTN h-full w-7 hover:text-red-700 font-bold rounded cursor-pointer grid place-content-center transition-colors'>
						<BiTrashAlt />
					</button>
				</div>
			</div>
		</div>
	);
}
