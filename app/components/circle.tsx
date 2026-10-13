interface Props {
	width: string;
	bColor: string;
}

const Circle = ({ width, bColor }: Props) => {
	return (
		<div
			className={`absolute w-[${width}] h-[${width}] ${bColor} border-2  rounded-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]`}
		></div>
	);
};

export default Circle;
