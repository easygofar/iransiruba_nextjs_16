"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import _ from "lodash";
import MenuItemAndSubmenu from "./menuItemAndSubmenu";

import { machines, siruba_menu } from "../data/machines";
// import { siruba_menu } from "../data/machines";
import logoImage from "../../public/siruba-logo-farsi.png";
import { Bars, Close } from "../components/menu/signs";

const MenuResponsive = () => {
  const [isOpen, setIsOpen] = useState(false); // this toggles icon for mobile menu
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(null);
  const [productSubMenus, setProductSubMenus] = useState(null as any);
  const menuElement = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const pathName = usePathname();

  // const machines = getData();

  useEffect(() => {
    if (pathName.includes("products")) setBottomBar(1);
    else if (pathName.includes("history") || pathName.includes("introduction"))
      setBottomBar(2);
    else if (pathName.includes("downloads")) setBottomBar(3);
    else if (pathName.includes("customercare")) setBottomBar(4);
    else if (pathName.includes("contact")) setBottomBar(5);
    else setBottomBar(0);
  }, [pathName]);

  const handleRoute = (url: string) => {
    router.replace(url);
  };

  const setBottomBar = (childNumber: number) => {
    const barElement = menuElement.current?.querySelectorAll(
      "#bar"
    )[0] as HTMLLIElement;
    const menuButtons: any[] = [];
    // get all the children elements of the main menu

    if (!menuElement.current) return;

    const children = [...menuElement.current.children];
    //get main menu <li> elements, excluding the <spans>
    Object.keys(children).forEach((key: any) => {
      const child = children[key];
      if (!child.id) menuButtons.push(child); // <span>s have id attribute, so choose non id elements
    });
    // set the bottom red bar position and width
    if (!barElement) return;

    barElement.style.left = menuButtons[childNumber].offsetLeft + "px";
    barElement.style.width = menuButtons[childNumber].clientWidth + "px";
  };

  const closeMainMobileMenu = () => {
    if (isMobileMenu) {
      menuElement.current?.classList.add("invisible");
      menuElement.current?.classList.remove("visible");
      menuElement.current?.classList.remove("block");
      menuElement.current?.classList.add("hidden");
      setIsOpen(false);
    }
  };

  const openMainMobileMenu = () => {
    menuElement.current?.classList.remove("invisible");
    menuElement.current?.classList.add("visible");
    menuElement.current?.classList.remove("hidden");
    menuElement.current?.classList.add("block");
  };
  // closeProductMenu = ()=>{}
  const toggleMobileMenu = () => {
    if (!isOpen) {
      openMainMobileMenu();
      setIsOpen(true);
    } else {
      closeMainMobileMenu();
      setIsOpen(false);
    }
    unhideMainMenuButtons();
    closeAllSubMenus();
    setIsMobileMenu(true);
  };

  const handleOnHoverMainMenu = (e: any) => {
    e.stopPropagation();
    const barElement = menuElement.current?.querySelectorAll("#bar")[0];
    const scrElement = menuElement.current?.querySelectorAll(
      "#screen"
    )[0] as HTMLLinkElement;

    const left = e.target.offsetLeft;
    const width = e.target.clientWidth;
    scrElement.style.left = left + "px";
    scrElement.style.width = width + "px";
    closeAllSubMenus();
  };

  const unhideMainMenuButtons = () => {
    const parentButtons =
      menuElement.current?.querySelectorAll(".parent-button");

    if (!parentButtons) return;
    parentButtons.forEach((pButton: any) => {
      pButton.classList.remove("hidden");
      pButton.classList.add("block");
    });
  };

  const closeProductDetailSubMenus = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const iconsMore = menuElement.current?.querySelectorAll(".icon.more");
    const iconsLess = menuElement.current?.querySelectorAll(".icon.less");
    const porduct_details =
      menuElement.current?.querySelectorAll(".porduct-details");

    if (!porduct_details) return;
    porduct_details.forEach((submenu: any) => {
      submenu.classList.add("hidden");
      submenu.classList.remove("block");
    });

    if (!iconsMore) return;
    iconsMore.forEach((icon: any) => {
      icon.classList.remove("hidden");
      icon.classList.add("block");
    });

    if (!iconsLess) return;
    iconsLess.forEach((icon: any) => {
      icon.classList.add("hidden");
      icon.classList.remove("block");
    });
    setIsSubMenuOpen(null);
  };

  const closeProductSubMenus = () => {
    if (productSubMenus !== null) {
      productSubMenus.classList.remove("block");
      productSubMenus.classList.remove("visible");
      productSubMenus.classList.add("hidden");
      productSubMenus.classList.add("invisible");
      const iconsMore = menuElement.current?.querySelectorAll(".icon.more");
      const iconsLess = menuElement.current?.querySelectorAll(".icon.less");
      if (!iconsMore) return;
      iconsMore.forEach((icon: any) => {
        icon.classList.remove("hidden");
        icon.classList.add("block");
      });
      if (!iconsLess) return;
      iconsLess.forEach((icon: any) => {
        icon.classList.add("hidden");
        icon.classList.remove("block");
      });
    }
  };

  const handleProductMouseOver = (e: any) => {
    e.stopPropagation();
    if (isMobileMenu) {
      if (!isSubMenuOpen) {
        //sub menu closed
        e.preventDefault();
        setIsSubMenuOpen(e.currentTarget); // sub menu opened
      } else if (isSubMenuOpen !== e.currentTarget) {
        e.preventDefault();
        setIsSubMenuOpen(null);
      } else {
        closeMainMobileMenu();
        closeAllSubMenus();
        setIsSubMenuOpen(null);
      }
    }
    const target = e.currentTarget.closest("li");
    const productSubMenuElement = target.querySelector("ul");
    const icons = target.querySelectorAll(".icon");
    closeProductSubMenus();
    if (productSubMenuElement !== null) {
      productSubMenuElement.classList.remove("hidden");
      productSubMenuElement.classList.remove("invisible");
      productSubMenuElement.classList.add("block");
      productSubMenuElement.classList.add("visible");
      icons[0].classList.remove("block");
      icons[0].classList.add("hidden");
      icons[1].classList.remove("hidden");
      icons[1].classList.add("block");
      setProductSubMenus(productSubMenuElement);
    }
  };

  const closeAllSubMenus = () => {
    // close all submenus on mobile menu click
    const allSubMenus =
      menuElement.current?.querySelectorAll(".group-hover-block");
    if (!allSubMenus) return;
    allSubMenus.forEach((submenu: any) => {
      submenu.classList.add("hidden");
    });
  };

  const handleMenu = (e: any, level: string, childNumber?: number) => {
    e.stopPropagation();
    closeProductSubMenus();
    if (childNumber !== undefined && childNumber < 5) setBottomBar(childNumber);

    //sub menu item clicked. get sub menu and clear it. mobile and desktop
    if (level === "1") {
      const target = e.currentTarget.closest(".group-hover-block");
      target.classList.add("hidden");

      // if mobile then clear the main menu as well
      if (level === "1" && isMobileMenu) {
        const target = e.currentTarget.parentNode.parentNode.parentNode;
        target.classList.add("hidden");
      }
      setIsOpen(false); // toggle mobile menu icon back to bars
    }

    // main menu item clicked
    if (level === "0") {
      //get its sub menu and sibling sub menus
      const target = e.currentTarget.querySelector("ul");
      const allSiblingsInclusive: any = e.currentTarget.parentNode.children;
      let siblings = [];
      for (let i = 0; i < allSiblingsInclusive.length; i++) {
        if (allSiblingsInclusive[i] !== e.currentTarget) {
          siblings.push(allSiblingsInclusive[i]);
        }
      }
      siblings.forEach((sibling) => {
        const sib_submenu = sibling.querySelectorAll("ul")[0];
        // close sibling submenu anyway if it exists
        if (sib_submenu) {
          sib_submenu.classList.remove("block");
          sib_submenu.classList.add("hidden");
        }
      });

      // if there is a sub menu then toggle it
      if (target) {
        if ([...target.classList].find((att) => att === "hidden")) {
          target.classList.remove("hidden");
        } else {
          target.classList.add("hidden");
        }
      }
      setIsSubMenuOpen(null);
    }
  };
  return (
    <header className="relative xl:w-312.5 w-[99%] flex justify-between items-center z-100 py-6 md:py-8">
      <nav
        aria-label="Primary Menu"
        className="flex justify-start items-center flex-wrap select-none"
      >
        <span
          className="relative mx-1 md:hidden block p-0 mr-4 cursor-pointer animate-fade-in transition"
          onClick={toggleMobileMenu}
        >
          {isOpen ? <Close /> : <Bars />}
        </span>
        <ul
          ref={menuElement}
          className="group flex flex-col animate-fade-in md:h-15 h-auto md:flex-row absolute md:static md:translate-y-0 bg-white md:bg-transparent invisible md:visible top-17.5 md:shadow-none rounded-md mx-2 w-35"
        >
          <li
            id="bar"
            className="h-0.5 bg-red-500 -bottom-2 absolute md:block hidden transition-all duration-500"
          ></li>
          <li
            id="screen"
            className="group-hover:bg-red-500/25 rounded-lg h-15 min-w-20 left-0 top-0 absolute md:block hidden transition-all duration-300"
          ></li>
          <li
            onClick={(e) => {
              handleMenu(e, "0", 0);
              handleRoute("/");
              {
                isMobileMenu ? closeMainMobileMenu() : "";
              }
            }}
            onMouseOver={handleOnHoverMainMenu}
            className={`relative border-slate-200 border-b bg-white md:bg-transparent p-2 text-sm sm:text-reg lg:text-lg md:border-none mx-1 sm:min-w-20 min-w-[150px] px-2 flex md:justify-center justify-start items-center cursor-pointer`}
          >
            خانه
          </li>
          <MenuItemAndSubmenu
            menuMainName="محصولات"
            subUrl="products"
            menuData={machines}
            closeAllSubMenus={closeAllSubMenus}
            closeProductDetailSubMenus={closeProductDetailSubMenus}
            closeMainMobileMenu={closeMainMobileMenu}
            handleMenu={handleMenu}
            handleOnHoverMainMenu={handleOnHoverMainMenu}
            handleProductMouseOver={handleProductMouseOver}
            setIsOpen={setIsOpen}
          />

          <MenuItemAndSubmenu
            menuMainName="سیروبا"
            subUrl="/"
            menuData={siruba_menu}
            closeAllSubMenus={closeAllSubMenus}
            closeProductDetailSubMenus={closeProductDetailSubMenus}
            closeMainMobileMenu={closeMainMobileMenu}
            handleMenu={handleMenu}
            handleOnHoverMainMenu={handleOnHoverMainMenu}
            handleProductMouseOver={handleProductMouseOver}
            setIsOpen={setIsOpen}
          />

          <li
            onClick={(e) => {
              handleMenu(e, "0", 3);
              handleRoute("/downloads");
              {
                isMobileMenu ? closeMainMobileMenu() : "";
              }
            }}
            onMouseOver={handleOnHoverMainMenu}
            className={`relative border-slate-200 border-b-[1px] bg-white md:bg-transparent p-2 text-sm sm:text-reg lg:text-lg md:border-none mx-1 sm:min-w-[80px] min-w-[150px] px-2 flex md:justify-center justify-start items-center cursor-pointer`}
          >
            کاتالوگ‌ها
          </li>

          <li
            onClick={(e) => {
              handleMenu(e, "0", 4);
              handleRoute("/customercare");
              {
                isMobileMenu ? closeMainMobileMenu() : "";
              }
            }}
            onMouseOver={handleOnHoverMainMenu}
            className={`relative border-slate-200 border-b-[1px] bg-white md:bg-transparent p-2 text-sm sm:text-reg lg:text-lg md:border-none mx-1 sm:min-w-[80px] min-w-[150px] px-2 flex md:justify-center justify-start items-center cursor-pointer`}
          >
            پشتیبانی
          </li>

          <li
            onClick={(e) => {
              handleMenu(e, "0", 5);
              handleRoute("/contact/");
              {
                isMobileMenu ? closeMainMobileMenu() : "";
              }
            }}
            onMouseOver={handleOnHoverMainMenu}
            className={`relative border-slate-200 border-b-[1px] bg-white md:bg-transparent p-2 text-sm sm:text-reg lg:text-lg md:border-none mx-1 sm:min-w-[80px] min-w-[150px] px-2 flex md:justify-center justify-start items-center cursor-pointer`}
          >
            تماس
          </li>
        </ul>
      </nav>
      <div className="md:py-0 w-[60%] flex justify-end select-none">
        <Link href="/">
          <Image
            src={logoImage}
            className="object-cover h-auto lg:w-[300px] md:w-[250px] sm:w-[180px] w-[150px]"
            alt=" لوگوی نمایندگی انحصاری چرخ خیاطی های صنعتی سیروبا در ایران "
            priority={true}
          />
        </Link>
      </div>
    </header>
  );
};
export default MenuResponsive;
