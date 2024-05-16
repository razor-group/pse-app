import React, { useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";
import Searchbar from "../components/Reusable/Searchbar";



function MainDashBoard({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
     
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="lg:pl-72 h-full">
          <Searchbar setSidebarOpen={setSidebarOpen} />
          
          <main>
            <div className="px-4 sm:px-6 lg:px-8">
           {children}
              </div>
          </main>
        </div>
      </>
  );
}

export default MainDashBoard;
