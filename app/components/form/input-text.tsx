import React from "react";

interface Props {
	name: string;
	legend: string;
	data: any;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ name, legend, data,onChange }: Props) => {
	return (
		<div className="my-4 w-2/3 sm:w-2/3 md:w-1/2 lg:w-[400px]">
			<legend className="text-slate-900 font-bold">{legend}</legend>
			<input
				onChange={onChange}
				type="text"
				name={name}
				value={data[name]}
				className="p-2 rounded-sm border-[1px] border-gray-500 w-full"
			/>
		</div>
	);
};

export default InputText;
