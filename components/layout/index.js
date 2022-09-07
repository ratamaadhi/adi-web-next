import React, { useState } from 'react';
import TopNav from '../navigationBar/topNav';
import MenuRight from '../navigationBar/menuRight';

function Layout({ children }) {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div
      id="homepage"
      className="relative flex min-h-screen flex-col bg-primary font-poppins antialiased"
    >
      <TopNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <MenuRight toggleNav={toggleNav} setToggleNav={setToggleNav} />
      {children}
    </div>
  );
}

export default Layout;
