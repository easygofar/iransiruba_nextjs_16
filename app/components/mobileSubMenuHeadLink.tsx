import Link from "next/link";
import { getCategory } from "../../utils/functions";
import { More } from "./menu/signs";

interface Props {
  category: string;
  sub_menu_url: string;
  farsi: string;
  handleProductMouseOver: (e: any) => void;
}

function MobileSubMenuHeadLink({
  category,
  sub_menu_url,
  farsi,
  handleProductMouseOver,
}: Props) {
  return (
    <Link
      href={`${sub_menu_url}/${getCategory(category)}`}
      className="flex items-center h-full hover:text-blue-500 grow hover:underline hover:transition-all duration-300"
      onClick={(e) => {
        handleProductMouseOver(e);
      }}
    >
      <span>{farsi}</span>
      {/* pointer-events-none  */}
      <span className="icon more md:hidden block mx-1 w-2 h-2 left-[10px] absolute pointer-events-none">
        <More />
      </span>
    </Link>
  );
}

export default MobileSubMenuHeadLink;
