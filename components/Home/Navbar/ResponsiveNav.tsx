"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Nav  />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
    </>
  );
};

export default ResponsiveNav;
