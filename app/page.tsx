import React from "react";
import Image from "next/image";
import hero from "@/img/hero.webp";

const Main = async () => {
  return (
    <>
      {" "}
      <Image
        src={hero}
        alt="Hero"
        fetchPriority="high"
        decoding="async"
        className="object-cover w-full md:h-[44.7vw] h-[500px]"
      />
      <div className="">
        <div className="flex flex-col justify-center items-center gap-4 absolute top-80 left-0 right-0 text-white font-bold select-none">
          <h1 className="md:text-6xl text-4xl border p-2">
            KPP Pratama Bantaeng
          </h1>
        </div>
        <div className=" text-center flex flex-col gap-4">
          <div className=" container md:px-36 p-6 flex flex-col gap-4">
            <h1 className=" text-[#093B6E] font-bold text-3xl">
              Maklumat Pelayanan
            </h1>
            <p className=" font-medium text-xl">
              Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan
              sesuai Standar Pelayanan yang telah di tetapkan dan apabila tidak
              menepati janji ini, kami siap menerima saksi sesuai peraturan
              perundang-undangan yang berlaku.
            </p>
          </div>
        </div>
        <div className=" text-center flex flex-col gap-4 bg-[#093B6E] ">
          <div className=" container md:px-36 p-6 flex flex-col gap-4">
            <h1 className=" text-yellow-400 font-bold text-3xl">
              Saluran Pengaduan Pelayanan
            </h1>
            <ul className=" font-medium text-xl text-white flex flex-col sm:flex-row gap-2">
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
