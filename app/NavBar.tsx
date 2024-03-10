"use client";

import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import logo from "@/app/icon.png";
import Image from "next/image";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(toggle ? false : true);
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className=" bg-[#093B6E] z-50 fixed w-full">
        <div className="flex h-14 font-bold items-center justify-between container p-6 md:px-36 text-white">
          <p className="text-xl cursor-pointer hover:text-stone-300 transition duration-150">
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
            <li className=" cursor-pointer hover:text-stone-300 transition duration-150">
              <Link href="/">Dashboard</Link>
            </li>
            <li className=" cursor-pointer hover:text-stone-300 transition duration-150">
              <Link href="/permohonan">Permohonan</Link>
            </li>
            <li className=" cursor-pointer hover:text-stone-300 transition duration-150">
              <Link href="/lokasi">Lokasi</Link>
            </li>
          </ul>
          <FaBars
            onClick={handleClick}
            className=" md:hidden hover:text-stone-300 text-xl cursor-pointer"
          />
        </div>
        {toggle && (
          <div className=" w-full h-full left-0 right-0 top-0 bottom-0 fixed z-50 sm:hidden">
            <FaX
              onClick={handleClick}
              className="fixed right-6 top-6 text-xl cursor-pointer hover:text-blue-500"
            />
            <ul className=" flex text-2xl flex-col justify-center items-center gap-4 font-bold sm:hidden w-full h-full bg-white z-50">
              <li
                className=" cursor-pointer hover:text-blue-500 transition duration-150"
                onClick={handleClick}
              >
                <Link href="/">Dashboard</Link>
              </li>
              <li
                className=" cursor-pointer hover:text-blue-500 transition duration-150"
                onClick={handleClick}
              >
                <Link href="/permohonan">Permohonan</Link>
              </li>
              <li
                className=" cursor-pointer hover:text-blue-500 transition duration-150"
                onClick={handleClick}
              >
                <Link href="/lokasi">Lokasi</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
