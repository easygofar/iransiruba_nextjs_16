import Link from "next/link";
import React from "react";
import { getCategory } from "../../utils/functions";

interface Props {
	item: string;
	farsi: string;
}

const SubMenuItem = ({ item, farsi }: Props) => {
	const category = getCategory(item);

	return (
		<li className="px-4 py-2 w-full border-b hover:bg-slate-200/50">
			<Link href={`/products/${category}`}>{farsi}</Link>
		</li>
	);
};

export default SubMenuItem;
