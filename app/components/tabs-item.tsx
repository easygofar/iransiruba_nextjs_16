import { GiClothes, GiFilmStrip } from "react-icons/gi";
import { GoListUnordered } from "react-icons/go";
//
const icons = [
  <GoListUnordered key="1" />,
  <GiClothes key="2" />,
  <GiFilmStrip key="3" />,
];

interface Props {
  tabNumber: number;
  title: string;
  tab: number;
  setTab: (n: number) => void;
}

const TabsItem = ({ tabNumber, title, tab, setTab }: Props) => {
  return (
    <li
      className={`grow w-1/2 sm:w-1/4 md:w-auto mt-[2px] relative py-2 md:p-4 cursor-pointer rounded-t-lg ${
        tab == tabNumber
          ? "bg-slate-100 border-t-[2px] border-x-[2px] border-slate-200"
          : "bg-white border-b-[2px] border-x-[1px] border-t-[1px] border-slate-200 text-blue-500 hover:text-blue-900"
      }`}
      onClick={() => setTab(tabNumber)}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-2 lg:gap-4">
        {/* {icons[tabNumber - 1]} */}
        <span
          className={`sm:text-reg text-sm text-center select-none ${
            tab === tabNumber
              ? "text-gray-900"
              : "text-blue-500 hover:text-blue-700"
          }`}
        >
          {title}
        </span>
      </div>
    </li>
  );
};

export default TabsItem;
