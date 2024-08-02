import React, { useState } from "react";
import {Link} from 'react-router-dom'
import routes from "../../router/routes";
import { menu, close, logo } from "../../assets/icons";
import Button from "../elements/Button";

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  return (
    <nav className="md:text-xl px-5 md:px-10 lg:px-28">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            width={129}
            height={24}
            className="rounded"
          />
        </div>
        <ul className="hidden text-sm md: font-semibold lg:flex items-center gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Features</Link>
          </li>
          <li>
            <Link href="/portfolio">Pricing</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center text-sm font-semibold gap-6">
          <p className="text-primary">
            <Link to={routes.LOGIN}>Login</Link>
          </p>
          <Button className=" px-4 py-[10px] ">
            <Link to={routes.SIGN_UP}>Get Started</Link>
          </Button>
        </div>
        <Button
          className="lg:hidden z-20"
          onClick={toggleSideNav}
          aria-label="Toggle menu"
        >
          <img src={menu} alt="menu" width={35} height={35} />
        </Button>
      </div>

      {showSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={toggleSideNav}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full sm:w-96    bg-white z-50 p-6 flex justify-between flex-col "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 bg-primary right-4"
              onClick={toggleSideNav}
              aria-label="Close menu"
            >
              <img src={close} alt="close" width={25} height={25} />
            </button>
            <div aria-hidden="true"></div>
            <ul className="flex flex-col items-center gap-8 text-sm font-semibold mt-16 ">
              <li>
                <Link href="/about" onClick={toggleSideNav}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={toggleSideNav}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={toggleSideNav}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleSideNav}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col items-center text-sm t font-semibold gap-6">
              <p className="text-primary">
                <Link to={routes.LOGIN}>Login</Link>
              </p>
              <Button className=" px-4 py-[10px]">
                <Link to={routes.SIGN_UP}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
