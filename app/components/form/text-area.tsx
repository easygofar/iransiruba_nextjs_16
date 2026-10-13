import React from "react";

interface Props {
	name: string;
	legend: string;
	rows: number;
	data: any;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ name, legend, rows, data,onChange }: Props) => {
	return (
		<div className="my-4 w-2/3 sm:w-2/3 md:w-1/2 lg:w-[400px]">
			<legend className="text-slate-900 font-bold">{legend}</legend>
			<textarea
				onChange={onChange}
				name={name}
				value={data[name]}
				rows={rows}
				className="p-2 rounded-sm border-[1px] border-gray-500 w-full"
			></textarea>
		</div>
	);
};

export default TextArea;
