import React, {ChangeEventHandler} from "react";

interface Props {
	name: string;
	legend: string;
	data: { value: string }[];
	onChange: (e: any) => void
}

const DropdownList = ({ name, legend, data, onChange }: Props) => {
	return (
		<div className="my-4">
			<legend className="text-slate-900 font-bold">{legend}</legend>
            <select
                onChange={onChange}
				name={name}
				className="p-2 rounded-sm border-[1px] border-gray-500 w-2/3 sm:w-2/3 md:w-1/2 lg:w-[400px]"
			>
				{data.map(({ value }) => {
					return (
						<option key={value} value={value} className="p-2 py-4">
							{value}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DropdownList;
