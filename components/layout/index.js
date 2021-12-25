import { useRouter } from "next/router";
import Link from "next/link";
import React, { useContext } from "react";
import TopNav from "../navigationBar/topNav";

function Layout({ children }) {
  return (
    <div
      id="homepage"
      className="antialiased relative flex flex-col font-poppins min-h-screen bg-primary"
    >
      <TopNav/>
      {children}
    </div>
  );
}

export default Layout;
