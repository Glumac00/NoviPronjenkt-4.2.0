import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState } from "react";

const Layout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<Boolean>(false);

  return (
    <>
      <Header
        toggleSidebar={() => {
          setSidebarIsOpen(!sidebarIsOpen);
        }}
      />
      <Outlet />
      <Sidebar onClose={() => setSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
    </>
  );
};
export default Layout;
