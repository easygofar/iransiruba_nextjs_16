import _ from "lodash";
import Link from "next/link";

import MobileSubMenuHeadNoLink from "./mobileSubMenuHeadNoLink";
import MobileSubMenuHeadLink from "./mobileSubMenuHeadLink";
import { Down, Left, Less } from "../components/menu/signs";
import { getCategory } from "../../utils/functions";

interface Props {
  menuMainName: string;
  subUrl: string;
  menuData: any[];
  handleMenu: (e: any, level: string, childNumber?: number) => void;
  handleOnHoverMainMenu: (e: any) => void;
  closeAllSubMenus: () => void;
  handleProductMouseOver: (e: any) => void;
  closeProductDetailSubMenus: (e: any) => void;
  closeMainMobileMenu: () => void;
  setIsOpen: (b: boolean) => void;
}

function MenuItemAndSubmenu({
  menuMainName,
  menuData,
  subUrl,
  handleMenu,
  handleOnHoverMainMenu,
  closeAllSubMenus,
  handleProductMouseOver,
  closeProductDetailSubMenus,
  closeMainMobileMenu,
  setIsOpen,
}: Props) {
  return (
    <li
      onClick={(e) => handleMenu(e, "0")}
      onMouseOver={handleOnHoverMainMenu}
      className={`relative border-slate-200 border-b bg-white md:bg-transparent p-2 text-sm sm:text-reg lg:text-lg md:border-none mx-1 sm:min-w-25 min-w-37.5 px-2 flex md:justify-center justify-start items-center cursor-pointer`}
    >
      {/* main menu name like محصولات or سیروبا */}
      {menuMainName}
      <span className="pointer-events-none relative mr-2">
        <Down />
      </span>
      {/* products sub menu */}
      <ul
        onMouseLeave={closeAllSubMenus}
        onMouseOver={(e) => e.stopPropagation()}
        className={`absolute submenu menu-shadow
          group-hover-block animate-fade-in 
          sm:min-w-62.5 min-w-45 flex flex-col md:top-17 w-full top-7.5 md:right-[50%] md:translate-x-[50%] 
          md:border-2 border-slate-300 right-[50%] bg-slate-200/50 rounded-md p-0 hidden z-100`}
      >
        {_.sortBy(menuData, ["id"]).map((m: any) => (
          <li
            key={m.id}
            className={`table border-b border-slate-200 py-[0.2rem] bg-white hover:bg-slate-200 hover:font-bold ${m.models.length > 1
              ? "relative md:hover:border-t-slate-200 hover:border-t-slate-300 "
              : ""
              }`}
          >
            {/* *** DESKTOP LINK *** */}
            {m.brand !== "nolink" ? (
              <Link
                onClick={(e) => handleMenu(e, "1", 1)}
                onMouseOver={handleProductMouseOver}
                className="hidden md:block w-full h-full md:px-4 px-2 text-sm sm:text-reg lg:text-lg"
                href={`${m.models.length > 1
                  ? m.sub_menu_url + "/" + getCategory(m.category)
                  : m.sub_menu_url +
                  "/" +
                  getCategory(m.category) +
                  "/" +
                  m.models[0].title
                  }`}
              >
                {m.farsi}
              </Link>
            ) : (
              <span
                onMouseOver={handleProductMouseOver}
                className="hidden md:block w-full h-full md:px-4 px-2 text-sm sm:text-reg lg:text-lg"
              >
                {m.farsi}
              </span>
            )}

            {/* *** MOBILE LINK **** */}
            <div className="md:hidden w-full h-full md:px-4 px-2 text-sm sm:text-reg lg:text-lg flex items-center z-40">
              {m.models.length > 1 ? (
                <div className="flex items-center justify-between w-full">
                  {m.brand === "nolink" ? (
                    <MobileSubMenuHeadNoLink
                      handleProductMouseOver={handleProductMouseOver}
                      farsi={m.farsi}
                    />
                  ) : (
                    <MobileSubMenuHeadLink
                      handleProductMouseOver={handleProductMouseOver}
                      category={m.category}
                      sub_menu_url={m.sub_menu_url}
                      farsi={m.farsi}
                    />
                  )}

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
                  href={`${m.models.length > 1
                    ? m.sub_menu_url + "/" + getCategory(m.category)
                    : m.sub_menu_url +
                    "/" +
                    getCategory(m.category) +
                    "/" +
                    m.models[0].title
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

            {/* details sub menu */}
            {m.models.length > 1 ? (
              <div className="md:animate-none">
                <ul className={`relative md:absolute animate-fade-in-scale 
                  md:animate-fade-in-right porduct-details top-2 md:top-0 
                  hidden md:mr-0.5 invisible hover:block md:right-full 
                  md:mb-2 mb-1 drop-shadow md:px-0 pr-2 bg-white 
                  border-2 md:border-2 md:shadow-md md:border-slate-200 md:rounded-md rounded-sm border-b border-slate-3  00 sm:w-70 w-50 z-100`}>
                  {_.sortBy(m.models, ["id"]).map((model: any) => {
                    return (
                      <li
                        key={model.id}
                        className={`${model.sub_category == "" ? "hidden" : "block"
                          } border-b border-slate-300 py-[0.15rem] sm:py-1 hover:block w-full bg-white hover:bg-slate-200/75`}
                      >
                        <Link
                          onClick={() => {
                            closeMainMobileMenu();
                            setIsOpen(false);
                          }}
                          href={`${m.sub_menu_url}/${getCategory(m.category)}/${model.title
                            }`}
                          className={`leading-normal block w-full h-full mx-4 text-xs sm:text-reg lg:text-lg font-normal hover:text-blue-500`}
                        // dangerouslySetInnerHTML={{
                        //   __html: model.sub_category,
                        // }}
                        >
                          <span className="p-0 m-0">{model.sub_category}</span>
                          {model.menu_note ? (
                            <span className="text-xm md:text-sm text-[#FA461E] p-0 m-0">
                              {" "}
                              ({model.title}){" "}
                            </span>
                          ) : null}

                          {/* <p className="text-xm sm:text-sm text-[#FA461E] p-0 m-0">
                            {model.title}
                          </p> */}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default MenuItemAndSubmenu;
