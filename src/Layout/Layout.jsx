import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
   <>
     <div className="p-[10px]">
      <Link className = 'p-[10px]' to="/">Home</Link>
      <Link className = 'p-[10px]' to="/about">About</Link>
      <Link className = 'p-[10px]' to="/login">Login</Link>
    </div>
      <Outlet/>
   </>
  );
};

export default Layout;