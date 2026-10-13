"use client"

import { usePathname } from "next/navigation"
import Link from 'next/link'
// import { machines } from "../data/machines"
import { getCategory } from "../../utils/functions"
import _ from 'lodash'
import { IfMachineType } from "../../utils/types"

interface Props {
	machines: IfMachineType[];
}


const Pathname = ({ machines }: Props) => {
	const pathname = usePathname()
	const arr = pathname.trim().split("/")
	arr.pop()
	arr.shift()
	const machine = _.sortBy(machines, ['id']).filter((m: any) => getCategory(m.category) === arr[1])
	const path = machine[0]?.farsi

	return (
		<nav aria-label="Breadcrumb Menu" className="text-xs sm:text-sm mx-2 p-1">
			<Link href="/" className="text-blue-500 hover:underline text-sm">
				ایران سیروبا
			</Link>{" "}
			/{" "}
			<Link href="/products/" className="text-blue-500 hover:underline text-sm">
				محصولات
			</Link>{" "}
			/{" "}
			{arr.length === 2 ? (
				<span className="text-slate-500 font-bold">{path}</span>
			) : (
				<>
					<Link
						href={`/products/${arr[1]}`}
						className="text-blue-500 hover:underline text-sm"
					>
						{path}
					</Link>{" "}
					/ <span className="text-slate-500 font-bold">{arr[2]}</span>
				</>
			)}
		</nav>
	);
}

export default Pathname