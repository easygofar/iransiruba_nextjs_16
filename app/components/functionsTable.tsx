"use client";
import { useState } from "react";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const FunctionsTable = ({ fns }: { fns: string[] }) => {
	const [image, setImage] = useState<string>("");
	const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

	const handleImageClick = (fn: string) => {
		setImage(fn);
	};

	const renderImage = () => {
		if (image === "") {return null;}

		return (
			<div className="fixed top-0 left-0 z-[200] flex justify-center flex-col w-screen bg-white">
				<TransformWrapper
					initialScale={1}
					initialPositionX={0}
					initialPositionY={0}
				>
					{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
						<>
							<div className="fixed top-0 left-2 flex gap-[4px] justify-center items-center bg-slate-300/50 m-auto sm:p-2 p-[5px] rounded-b-lg z-[500] border-b">
								<button
									className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-blue-500 shadow rounded-md border-[1px] border-blue-300 hover:bg-blue-600 text-white"
									onClick={() => zoomIn()}
								>
									Zoom In
								</button>
								<button
									className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-blue-500 shadow rounded-md border-[1px] border-blue-300 hover:bg-blue-600 text-white"
									onClick={() => zoomOut()}
								>
									Zoom out
								</button>
								<button
									className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-blue-500 shadow rounded-md border-[1px] border-blue-300 hover:bg-blue-600 text-white"
									onClick={() => resetTransform()}
								>
									Reset
								</button>
								<button
									className="sm:px-4 sm:py-2 px-[10px] py-[5px] sm:text-reg text-sm bg-blue-500 shadow rounded-md border-[1px] border-blue-300 hover:bg-blue-600 text-white"
									onClick={() => setImage("")}
								>
									Close
								</button>
							</div>
							<div className="tools flex justify-center p-4 border-2">
								<TransformComponent>
									<div className="relative w-screen h-screen">
										<Image
											src={`/images/siruba-swing-machines/webp_${image}-siruba-application-full.webp`}
											alt={`siruba ${image}`}
											fill={true}
											className="object-scale-down"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											quality={50}
											placeholder="blur"
											blurDataURL={blurDataUrl}
										/>
									</div>
								</TransformComponent>
							</div>
							<div className="py-4"></div>
						</>
					)}
				</TransformWrapper>
			</div>
		);
	};

	return (
		<>
			{renderImage()}
			<div className="relative flex flex-wrap w-full justify-center md:gap-8 sm:gap-4 gap-2 mt-4 pb-4">
				{fns.map(fn => (
					<div
						key={fn}
						className="sm:w-[180px] sm:h-[280px] w-[130px] h-[190px] relative rounded-lg overflow-hidden border hover:ring-slate-300/50 hover:ring-1 hover:ring-offset-4 hover:cursor-pointer"
					>
						<Image
							onClick={() => handleImageClick(fn)}
							key={fn}
							fill={true}
							alt={`function ${fn}`}
							src={`/images/siruba-swing-machines/webp_${fn}-siruba-application.webp`}
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							quality={50}
							placeholder="blur"
							blurDataURL={blurDataUrl}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default FunctionsTable;
