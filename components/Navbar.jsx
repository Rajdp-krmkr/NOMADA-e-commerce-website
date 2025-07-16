import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { icons } from "@/constant";
import Icon from "./icon";

const Navbar = ({ children }) => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className="font-babas-neue fixed top-0 left-0 right-0 bg-white shadow-sm z-20 grid grid-cols-3 items-center px-20">
        <ul className="flex justify-start items-center gap-4 p-4 text-xl">
          {pages.map((route, index) => (
            <li key={index}>
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Logo className="text-3xl" />
        </div>
        <ul className="flex justify-end items-center gap-4 p-4 text-xl">
          <li>
            <Link href="#">
              <Icon source={icons.search} />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Icon source={icons.cart} />
            </Link>
          </li>

          <li>
            <Link href="/profile">
              <Icon source={icons.user} />
            </Link>
          </li>
        </ul>
      </nav>
      <main className="mt-16 ">{children}</main>
    </>
  );
};

export default Navbar;
