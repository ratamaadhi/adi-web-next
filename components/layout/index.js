import React, { useContext, useState } from "react";
import TopNav from "../navigationBar/topNav";
import MenuRight from "../navigationBar/menuRight";

function Layout({ children }) {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div
      id="homepage"
      className="antialiased relative flex flex-col font-poppins min-h-screen bg-primary"
    >
      <TopNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      <MenuRight toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      {children}
    </div>
  );
}

export default Layout;
