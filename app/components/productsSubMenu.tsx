import Link from "next/link";
import _ from "lodash";
import { getCategory } from "../../utils/functions";
import { getData } from "../../lib";
import { More, Less, Left } from "../components/menu/signs";

interface Props {
  handleProductMouseOver: (e: any) => void;
  handleMenu: (e: any, level: string, childNumber?: number) => void;
  closeProductDetailSubMenus: (e: any) => void;
  closeMainMobileMenu: () => void;
  setIsOpen: (e: any) => void;
}

export default async function ProductSubMenu({
  handleProductMouseOver,
  handleMenu,
  closeProductDetailSubMenus,
  closeMainMobileMenu,
  setIsOpen,
}: Props) {
  const machines = getData();
  console.log("machines====>", machines);

  return _.sortBy(machines, ["id"]).map((m: any) => (
    <li
      key={m.id} //md:transition-none
      className={`table border-b border-slate-200 py-[0.2rem] bg-white hover:bg-slate-200 hover:font-bold ${m.models.length > 1
        ? "relative md:hover:border-t-slate-200 hover:border-t-slate-300 "
        : ""
        }`}
    >
      {/* *** DESKTOP LINK *** */}
      <Link
        onClick={(e) => handleMenu(e, "1", 1)}
        onMouseOver={handleProductMouseOver}
        className="hidden md:block w-full h-full md:px-4 px-2 text-sm sm:text-reg lg:text-lg"
        href={`/products/${m.models.length > 1
          ? getCategory(m.category)
          : getCategory(m.category) + "/" + m.models[0].title
          }`}
      >
        {m.farsi}
      </Link>

      {/* *** MOBILE LINK **** */}
      <div className="md:hidden w-full h-full md:px-4 px-2 text-sm sm:text-reg lg:text-lg flex items-center z-40">
        {m.models.length > 1 ? (
          <div className="flex items-center justify-between w-full">
            <Link
              href={`/products/${getCategory(m.category)}`}
              className="flex items-center h-full hover:text-blue-500 grow hover:underline hover:transition-all duration-300"
              onClick={(e) => {
                handleProductMouseOver(e);
              }}
            >
              <span>{m.farsi}</span>
              {/* pointer-events-none  */}
              <span className="icon more md:hidden block mx-1 w-2 h-2 left-2.5 absolute pointer-events-none">
                <More />
              </span>
            </Link>
            <div
              onClick={closeProductDetailSubMenus}
              className="icon less relative flex z-50 md:hidden  mr-1 h-full py-3 grow"
            >
              <span className="w-2 h-2 absolute top-[50%] left-1.5 translate-y-[-50%]">
                <Less />
              </span>
            </div>
          </div>
        ) : (
          <Link
            onClick={() => {
              closeMainMobileMenu();
              setIsOpen(false);
            }}
            className="block w-full h-full md:px-4 px-2 text-sm sm:text-reg lg:text-lg"
            href={`/products/${m.models.length > 1
              ? getCategory(m.category)
              : getCategory(m.category) + "/" + m.models[0].title
              }`}
          >
            {m.farsi}
          </Link>
        )}
      </div>

      {m.models.length > 1 ? (
        <span className="pointer-events-none hidden invisible md:block md:visible mx-1 w-2 h-2 absolute top-[50%] translate-y-[-50%] left-2.5 z-40">
          <Left />
        </span>
      ) : null}

      {/* product details sub menu */}
      {m.models.length > 1 ? (
        <div className="md:animate-none">
          <ul className="relative md:absolute animate-fade-in-scale md:animate-fade-in-right porduct-details top-2 md:top-0 hidden md:mr-0.5 invisible hover:block md:right-full md:mb-2 mb-1 drop-shadow md:px-0 pr-2 bg-white border-2 md:border-2 md:shadow-md md:border-slate-200 md:rounded-md rounded-sm border-none sm:w-70 w-50 z-100">
            {_.sortBy(m.models, ["title"]).map((sub: any) => (
              <li
                key={sub.title}
                className="border-b py-[0.15rem] sm:py-1 hover:block w-full bg-white hover:bg-slate-200/75"
              >
                <Link
                  onClick={() => {
                    closeMainMobileMenu();
                    setIsOpen(false);
                  }}
                  href={`/products/${getCategory(m.category)}/${sub.title}`}
                  className="block w-full h-full mx-4 text-sm sm:text-reg lg:text-lg font-normal"
                >
                  {sub.sub_category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </li>
  ));
}
