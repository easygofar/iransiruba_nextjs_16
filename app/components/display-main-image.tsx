import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";

interface Props {
	image: string;
	title: string;
	subCategory: string
}

export const DisplayMainImage = ({ image, title, subCategory }: Props) => {
	const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

	return (
		<Image
			src={`/images/siruba-swing-machines/webp_${image.split(".")[0]
				}.webp`}
			fill={true}
			alt={`چرخ صنعتی ${subCategory} سیروبا مدل ${title}`}
			className="lg:object-contain object-scale-down"
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			placeholder="blur"
			blurDataURL={blurDataUrl}
		/>
	);
};
