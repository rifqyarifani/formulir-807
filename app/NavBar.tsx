"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "@/app/icon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const changeNavbar = () => {
    if (window.scrollY >= 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  function handleClick() {
    setToggle(toggle ? false : true);
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  const navbarData = [
    ["Beranda", "/"],
    ["Layanan", "/layanan"],
    ["Profil", "/profil"],
    ["Galeri", "/galeri"],
    ["Lokasi", "/lokasi"],
  ];

  return (
    <>
      <div
        className={`z-50 fixed w-full ${
          isScrolled && pathname === "/"
            ? "bg-white text-first"
            : pathname !== "/"
            ? "bg-white text-first"
            : "text-white"
        }`}
      >
        <div
          className={`flex h-14 font-bold items-center justify-between container p-6 md:px-36 `}
        >
          <p
            className="text-xl cursor-pointer hover:text-purple-100 transition duration-150"
            onClick={goTop}
          >
            <Link href="/" legacyBehavior passHref>
              <Image
                src={logo}
                alt="Kantor KPP Pratama Bantaeng"
                fetchPriority="high"
                decoding="async"
                className=" w-10 h-10"
              />
            </Link>
          </p>
          <ul className=" md:flex gap-6 text-lg hidden">
            {navbarData.map((obj: any) => (
              <li
                key={obj[0]}
                className=" cursor-pointer hover:text-purple-300 transition duration-150"
              >
                <Link onClick={goTop} href={obj[1]}>
                  {obj[0]}
                </Link>
              </li>
            ))}
          </ul>
          <FaBars
            onClick={handleClick}
            className=" md:hidden hover:text-purple-300 text-xl cursor-pointer"
          />
        </div>
        {toggle && (
          <div className=" w-full h-full left-0 right-0 top-0 bottom-0 fixed z-50 sm:hidden">
            <FaX
              onClick={handleClick}
              className="fixed right-6 top-6 text-xl cursor-pointer text-purple-500 hover:text-purple-300"
            />
            <ul className=" flex text-2xl flex-col justify-center items-center gap-4 font-bold sm:hidden w-full h-full bg-white z-50">
              {navbarData.map((obj: any) => (
                <li
                  className=" cursor-pointer text-purple-500 hover:text-purple-300 transition duration-150"
                  onClick={handleClick}
                  key={obj[0]}
                >
                  <Link href={obj[1]}>{obj[0]}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
