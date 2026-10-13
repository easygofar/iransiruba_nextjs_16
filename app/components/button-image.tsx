import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { GoPlay } from "react-icons/go";

interface Props {
	image: string;
	title: string;
	playIconSize?: number;
	onClick: () => void
}

export const ButtonImage = ({ image, title, playIconSize, onClick }: Props) => {
	const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

	return (
		<button className="relative border-2 rounded-md p-2 md:w-[120px] md:h-[120px] w-[80px] h-[80px]" onClick={onClick}>
			<Image
				src={`/images/siruba-swing-machines/webp_${image.split(".")[0]
					}.webp`}
				alt={title}
				fill={true}
				className="lg:object-contain object-scale-down"
				placeholder="blur"
				blurDataURL={blurDataUrl}
			/>
			{playIconSize && (
				<span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 ">
					<GoPlay size={playIconSize} color='#F00' />
				</span>
			)}
		</button>
	);
};
