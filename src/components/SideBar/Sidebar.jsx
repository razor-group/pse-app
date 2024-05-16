import {
  Home,
  Folder,
  Calendar,
  Bell,
  FolderAlt,
  SettingLine,
} from "../../assets";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {} from "@heroicons/react/20/solid";
import { Link, NavLink } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  // { name: "Dashboard", href: "/", icon: Home, current: true },
  // {
  //   name: "Coupon Upload",
  //   href: "/coupon-upload",
  //   icon: Folder,
  //   current: false,
  // },
  {
    name: "Shopify Coupon Upload",
    href: "/shopify-coupon-upload",
    icon: Folder,
    current: false,
  },
  // {
  //   name: "Activity & Error Logs",
  //   href: "/activity-&-error-logs",
  //   icon: FolderAlt,
  //   current: false,
  // },
  // {
  //   name: "Historical Data",
  //   href: "/historical-data",
  //   icon: Calendar,
  //   current: false,
  // },
  // {
  //   name: "Notification & Alerts",
  //   href: "/notification-and-alerts",
  //   icon: Bell,
  //   current: false,
  // }
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
 
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <h3 className="text-indigo-600" hidden>
                      Price Pulse Portal
                    </h3>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                  isActive
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-bold"
                                }
                              >
                                <item.icon
                                  color={"currentcolor"}
                                  className={classNames(
                                    item.current
                                      ? "text-indigo-600 fill-indigo-100"
                                      : " fill-black group-hover:text-indigo-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>

                      {/* <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 leading-6  hover:text-indigo-600"
                        >
                          <SettingLine
                            color={"currentcolor"}
                            className="h-6 w-6 shrink-0 group-hover:text-indigo-600 text-black"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h3 className="text-indigo-600 font-bold" hidden>
              Price Pulse Portal
            </h3>
            <h3 className="text-indigo-600 font-bold">Coupon Upload</h3>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-50 text-indigo-600 stroke-indigo-100 group-hover:text-indigo-600 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-bold"
                            : "text-gray-700 stroke-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6"
                        }
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0 hover:stroke-indigo-600"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              {/* <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm  leading-6 text-black  hover:bg-gray-50 hover:text-indigo-600"
                >
                  <SettingLine
                    color={"currentcolor"}
                    className="h-6 w-6 shrink-0 text-black group-hover:text-indigo-600 "
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
