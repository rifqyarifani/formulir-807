import React from "react";
import Image from "next/image";
import hero from "@/img/hero.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

import Link from "next/link";

const Main = async () => {
  return (
    <>
      {" "}
      <Image
        src={hero}
        alt="Kantor KPP Pratama Bantaeng"
        fetchPriority="high"
        decoding="async"
        className="md:object-cover w-full md:h-screen h-[250px] object-fill"
      />
      <div className="">
        {/* <div className="flex flex-col justify-center items-center absolute top-80 left-0 right-0 text-white font-bold select-none">
          <h1 className="md:text-6xl text-4xl bg-gradient-to-r from-pink-500 to-purple-400 inline-block text-transparent bg-clip-text">
            SIRUJAK BANTAENG
          </h1>
          <h1 className="md:text-4xl text-2xl text-white font-normal">
            Situs Rumah Pajak Bantaeng
          </h1>
        </div> */}
        <div className=" text-center bg-white p-2 font-black">
          <h1 className=" md:text-4xl text-2xl bg-gradient-to-r from-pink-500 to-purple-400 inline-block text-transparent bg-clip-text">
            Pajak Kuat APBN Sehat
          </h1>
        </div>
        <div className=" text-center flex flex-col gap-4">
          <div className=" container md:px-36 p-4 flex flex-col gap-2">
            <h1 className="  text-white font-black md:text-4xl text-2xl uppercase">
              Maklumat Pelayanan
            </h1>
            <p className=" font-light text-base text-white">
              Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan
              sesuai Standar Pelayanan yang telah di tetapkan dan apabila tidak
              menepati janji ini, kami siap menerima saksi sesuai peraturan
              perundang-undangan yang berlaku.
            </p>
          </div>
        </div>
        <div className=" text-center flex flex-col gap-4 bg-white text-second">
          <div className=" container md:px-36 p-4 flex flex-col gap-2">
            <h1 className=" text-first font-black uppercase md:text-4xl text-2xl">
              Saluran Pengaduan Pelayanan
            </h1>
            <div className=" flex flex-wrap md:flex-row gap-8 md:justify-between justify-center text-sm md:text-base">
              <Link href="tel:1500200" target="_blank">
                <div className=" flex flex-col items-center">
                  <div className=" w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-70 flex justify-center items-center rounded-full">
                    <BsFillTelephoneFill className=" text-2xl md:text-5xl text-white" />
                  </div>
                  <h1 className="text-first">1500200</h1>
                </div>
              </Link>
              <Link href="mailto:pengaduan@pajak.go.id" target="_blank">
                <div className=" flex flex-col items-center">
                  <div className=" w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-70 flex justify-center items-center rounded-full">
                    <MdEmail className=" text-2xl md:text-5xl text-white" />
                  </div>
                  <h1 className=" text-first">pengaduan@pajak.go.id</h1>
                </div>
              </Link>
              <Link href="https://twitter.com/kringpajak" target="_blank">
                <div className=" flex flex-col items-center">
                  <div className=" w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-70 flex justify-center items-center rounded-full">
                    <FaTwitter className=" text-2xl md:text-5xl text-white" />
                  </div>
                  <h1 className=" text-first">@kring_pajak</h1>
                </div>
              </Link>
              <Link href="https://pengaduan.pajak.go.id/form" target="_blank">
                <div className=" flex flex-col items-center">
                  <div className=" w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-70 flex justify-center items-center rounded-full">
                    <TbWorldWww className=" text-2xl md:text-5xl text-white" />
                  </div>
                  <h1 className=" text-first">pengaduan.pajak.go.id</h1>
                </div>
              </Link>
              <Link href="https://www.pajak.go.id" target="_blank">
                <div className=" flex flex-col items-center">
                  <div className=" w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-70 flex justify-center items-center rounded-full">
                    <MdChatBubble className=" text-2xl md:text-5xl text-white" />
                  </div>
                  <h1 className=" text-first">Chat Pajak</h1>
                </div>
              </Link>
            </div>

            {/* 
            <ul className=" font-medium text-lg text-white flex flex-col sm:flex-row gap-2">
              <li className=" hover:text-stone-300">
                <a href="tel:1500200">Kring Pajak: 1500200</a>
              </li>
              <li className=" hover:text-stone-300">
                <a href="mailto:pengaduan@pajak.go.id">
                  Email Pengaduan: pengaduan@pajak.go.id
                </a>
              </li>
              <li className=" hover:text-stone-300">
                <a href="https://twitter.com/kringpajak">
                  Twitter: @kring_pajak
                </a>
              </li>
              <li>Faksimile: (021)5251245</li>
              <li className=" hover:text-stone-300">
                <a href="https://pengaduan.pajak.go.id/form">
                  Situs Pajak: pengaduan.pajak.go.id
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
