"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(toggle ? false : true);
    console.log(toggle);
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="flex border-b h-14 font-bold items-center justify-between container px-6 sm:px-36 py-6 bg-gradient-to-t from-gray-200">
        <p className="text-xl cursor-pointer hover:text-blue-700 transition duration-150">
          <Link href="/" legacyBehavior passHref>
            Dashboard
          </Link>
        </p>
        <ul className=" sm:flex gap-6 text-lg hidden">
          <li className=" cursor-pointer hover:text-blue-700 transition duration-150">
            <Link href="/permohonan">Permohonan</Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          onClick={handleClick}
          className=" sm:hidden hover:text-blue-500 text-xl cursor-pointer"
        />
      </div>
      {toggle && (
        <div className=" w-full h-full left-0 right-0 top-0 bottom-0 fixed z-50 sm:hidden">
          <FontAwesomeIcon
            icon={faX}
            className=" fixed right-6 top-6 text-xl cursor-pointer hover:text-blue-500"
            onClick={handleClick}
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
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
