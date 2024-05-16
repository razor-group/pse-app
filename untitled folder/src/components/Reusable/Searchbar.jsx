import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { SignOutCircle, User, Sort } from "../../assets";
import { AppContext } from "../../contexts/AppContext";
import React from "react";
export default function Searchbar({ userNavigation, setSidebarOpen }) {
  const { setLogoutStatus } = React.useContext(AppContext);
  return (
    
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Sort
          color={"currentcolor"}
          className="h-6 w-6 text-black"
          aria-hidden="true"
        />
      </button>

      {/* Separator */}
      <div className="h-6 w-px  lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            color={"currentcolor"}
            className="pointer-events-none text-black absolute inset-y-0 left-0 h-full w-5 "
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 font-normal  focus:ring-0 text-base"
            placeholder="Search for ASIN, SKU, FNSKU, Product Name"
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5" onClick={()=> setLogoutStatus(true)}>
            <span className="sr-only">Logout</span>
            <SignOutCircle
              color={"currentcolor"}
              className="color-black"
              aria-hidden="true"
            />
          </button>
          <button type="button" className="-m-2.5 p-2.5">
            <span className="sr-only">User</span>
            <User
              color={"currentcolor"}
              className="color-black"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
