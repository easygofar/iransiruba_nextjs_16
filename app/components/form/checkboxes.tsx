import React from "react";

interface Props {
	name: string;
	legend: string;
	data: { value: string }[];
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CehckBoxes = ({ name, legend, data, onChange }: Props) => {
	return (
		<fieldset className="my-4">
			<legend className="text-slate-900 font-bold">{legend}</legend>
			<ul>
				{data.map(({ value }) => {
					return (
						<li key={value} className="flex items-center">
							<input
								onChange={onChange}
								type="checkbox"
								className="p-2 mx-2 rounded-sm border-[1px] border-gray-200 w-4 h-4"
								name={name}
								value={value}
							/>
							{value}
						</li>
					);
				})}
			</ul>
		</fieldset>
	);
};

export default CehckBoxes;
