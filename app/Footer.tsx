import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium w-full bottom-0 mt-4">
      <div className=" container flex flex-col md:flex-row items-center justify-between sm:px-36 p-6 gap-2">
        <p className=" text-center">
          Copyright © 2024. All rights are reserved. KPP Pratama Bantaeng
        </p>
        <div className=" flex gap-4">
          <a
            href="https://instagram.com/pajakbantaeng"
            className=" text-3xl mr-4 hover:text-stone-300"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/pajakbantaeng"
            className=" text-3xl mr-4 hover:text-stone-300"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/628114002807"
            className=" text-3xl mr-4 hover:text-stone-300"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.tiktok.com/@pajakbantaeng"
            className=" text-3xl mr-4 hover:text-stone-300"
            target="_blank"
          >
            <FaTiktok />
          </a>
          <a
            href="https://twitter.com/pajakbantaeng"
            className=" text-3xl mr-4 hover:text-stone-300"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
