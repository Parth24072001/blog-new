/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/20/solid";
import MenuOption from "./MenuOption";
import { useWindowSize } from "usehooks-ts";
import MobileMenuOption from "./MobileMenuOption";
import DarkModeSwitch from "./DarkModeSwitch";

import clsx from "clsx";

export default function UpperNavbar({ menus }: any) {
  const { width } = useWindowSize();

  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [currentDateTime, setCurrentDateTime] = useState("");

  // function formatDateTime(date: Date): string {
  //   const options: Intl.DateTimeFormatOptions = {
  //     weekday: "short",
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   };

  //   return date.toLocaleDateString("en-US", options);
  // }

  // useEffect(() => {
  //   setCurrentDateTime(formatDateTime(new Date()));
  // }, []);
  console.log(navbarOpen);

  return (
    <nav
      className={clsx(
        "w-full relative flex flex-wrap items-center justify-center bg-background",
        { "border-b border-solid border-primary": navbarOpen }
      )}
    >
      <div
        className={clsx(
          "w-full   flex flex-wrap items-center justify-between "
        )}
      >
        <div
          className={clsx(
            "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start common_container  border-primary "
          )}
        >
          <p className="navbar-title">Retro</p>
          <div className=" flex justify-center items-center gap-4">
            {width <= 1023 && (
              <div className="flex px-3 py-2  lg:z-10 lg:ml-4 lg:items-center">
                <DarkModeSwitch />
              </div>
            )}

            <button
              className="rounded bg-primary px-2 py-1 text-xs font-semibold text-textt shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen && (
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
              )}
              {navbarOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className=" h-[0.0625rem] w-full bg-primary "></div>
        )}

        {width >= 1023 ? (
          <MenuOption menus={menus} />
        ) : (
          navbarOpen && <MobileMenuOption menus={menus} />
        )}
      </div>
    </nav>
  );
}
