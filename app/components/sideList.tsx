"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import _ from "lodash";
// import { machines } from "../data/machines";
import { getCategory } from "../../utils/functions";
import { IfMachineType } from "../../utils/types"

interface Props {
	 machines: IfMachineType[] ;
}

const SideList = ({machines}:Props) => {
	const pathname = usePathname()

	return (
		<nav aria-label="Sidebar Menu" className="hidden lg:block">
			<div className="flex flex-col flex-wrap justify-center items-center bg-slate-200 pb-2 drop-shadow rounded-lg rounded-b-none">
				<h2 className="w-full text-center p-2 rounded-t-lg font-bold text-sm sm:text-reg md:text-lg bg-slate-200 mb-2">
					چرخ خیاطی‌های صنعتی سیروبا
				</h2>
				<ul className="flex flex-wrap w-full justify-around">
					{_.sortBy(machines, ["id"]).map((item: any) => {
						const bgSelectedToggle = pathname.split("/")[2] === getCategory(item.category)
							? "bg-red-300/25"
							: "bg-white";

						return (
							<li
								key={item.id}
								className={`
								flex items-center justify-centershadow-sm  
								text-sm text-center rounded-md px-2 my-[3px]  
								sm:text-reg md:py-[4px] mx-1 w-1/3 grow    
								hover:ring-slate-300 hover:bg-red-500/25  
								hover:cursor-pointer transition
								${bgSelectedToggle}`}
							>
								<Link
									href={`/products/${getCategory(item.category)}`}
									className="w-full h-full overflow-hidden"
								>
									<span>{item.farsi}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default SideList;
