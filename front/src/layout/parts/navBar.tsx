import { useAtom } from "jotai";
import { Exchange } from "../../utils/fetch";
import { ctxMain } from "../../contexts/ctxMain";
import clsx from "clsx";
import { iToDo } from "../../types/useTypes";

export function NavBar() {
	const [, setDB] = useAtom(ctxMain.BagToDos);
	const [option, setOption] = useAtom(ctxMain.optionBar);

	const createNote = async () => {
		// Requisição
		const response = await Exchange(
			{
				title: "",
				content: "",
				favorited: option == "check" ? true : false,
			},
			"http://127.0.0.1:5000/toDo/cards",
			"POST",
		);

		// Atualizar o Local DB dos dados salvados no serverSide
		setDB((prev) => [...prev, response as iToDo]);
	};

	const OptionsBar = ({ text, value }: { text: string; value: string }) => (
		<button
			className={clsx(
				"rounded px-2 font-bold cursor-pointer transition-color duration-500 w-max",
				option.toLowerCase() == value.toLowerCase()
					? "bg-purple-600 text-white"
					: "bg-stone-200 text-stone-800  ",
			)}
			onClick={() => setOption(value)}
		>
			{text}
		</button>
	);

	return (
		<div className="shrink-0 w-134 bg-white p-2 h-12 flex gap-1 rounded-lg text-sm flex-row ">
			<OptionsBar
				text="ToDos"
				value={"todos"}
			/>
			<OptionsBar
				text="Check"
				value={"check"}
			/>
			<OptionsBar
				text="Pending"
				value={"pending"}
			/>
			<button
				className="clickBTN rounded px-4 w-max bg-purple-600 text-white font-bold text-whit ml-auto cursor-pointer"
				onClick={() => createNote()}
			>
				Create Note
			</button>
		</div>
	);
}
