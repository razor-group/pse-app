import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownButton({list,title}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center SecondaryBtn relative w-full cursor-default rounded-md bg-white btn SecondaryBtn  text-left text-textColor">
          {title}
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
      
         <Menu.Items className="absolute right-0 w-full z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-25 focus:outline-none" >
         <div className="py-1">
         {list.map((item)=>(
           <Menu.Item >
             {({ active }) => (
               <button
                 type="submit"
                 className={classNames(
                   active ? "bg-gray-100 text-textColor" : "text-textColor",
                   "block w-full px-4 py-2 text-left text-sm hover:bg-indigo-100 hover:text-white"
                 )}
               >
               {item}
               </button>
             )}
           </Menu.Item>
           ))}
         </div>
       </Menu.Items>
        
       
      </Transition>
    </Menu>
  );
}
