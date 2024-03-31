import React from "react";
import Image from "next/image";
import visiMisi from "@/img/visiMisi.png";
import { GiBullseye } from "react-icons/gi";
import { BiSolidBinoculars } from "react-icons/bi";
import { PiMountainsFill } from "react-icons/pi";

const page = () => {
  return (
    <>
      <div className=" flex pt-20 justify-center container">
        <h1 className=" text-center text-3xl uppercase text-white font-black pb-6">
          Profil
        </h1>
      </div>
      <Image
        src={visiMisi}
        alt="Visi Misi KPP Pratama Bantaeng"
        fetchPriority="high"
        decoding="async"
        className=" object-cover w-full h-80 hidden md:block"
      />

      <div className=" w-full bg-slate-100 flex flex-col gap-4 py-4 md:hidden">
        <h1 className=" font-black md:text-4xl text-2xl uppercase text-center text-[#3e0b3f]">
          VISI DAN MISI
        </h1>
        <div className=" w-full px-6">
          <div className=" flex justify-around items-start gap-4 bg-gradient-to-b from-white to-gray-200 w-full py-2 px-4 text-[#3e0b3f] rounded-l-3xl rounded-r-3xl">
            <div className=" w-fit h-fit rounded-full bg-gradient-to-br from-second to-first p-1">
              <BiSolidBinoculars className="text-5xl p-3 rounded-full bg-gradient-to-b from-first to-second text-white" />
            </div>
            <div className=" max-w-lg flex flex-col">
              <h1 className=" text-xl font-bold">VISI</h1>
              <h2 className=" font-light text-sm text-justify">
                Menjadi Mitra Tepercaya Pembangunan Bangsa untuk Menghimpun
                Penerimaan Negara melalui Penyelenggaraan Administrasi
                Perpajakan yang Efisien, Efektif, Berintegritas, dan Berkeadilan
                dalam rangka mendukung Visi Kementerian Keuangan: "Menjadi
                Pengelola Keuangan Negara untuk Mewujudkan Perekonomian
                Indonesia yang Produktif, Kompetitif, Inklusif, dan Berkeadilan"
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full px-6">
          <div className=" flex justify-around items-start gap-4 bg-gradient-to-b from-white to-gray-200 w-full py-2 px-4 text-[#3e0b3f] rounded-l-3xl rounded-r-3xl">
            <div className=" w-fit h-fit rounded-full bg-gradient-to-br from-second to-first p-1">
              <PiMountainsFill className="text-5xl p-3 rounded-full bg-gradient-to-b from-first to-second text-white" />
            </div>
            <div className=" max-w-lg flex flex-col">
              <h1 className=" text-xl font-bold">MISI</h1>
              <ol className=" list-decimal font-light text-sm ml-3 text-justify">
                <li>
                  Merumuskan regulasi perpajakan yang mendukung pertumbuhan
                  ekonomi Indonesia;
                </li>
                <li>
                  Meningkatkan kepatuhan pajak melalui pelayanan berkualitas dan
                  terstandarisasi, edukasi dan pengawasan yang efektif, serta
                  penegakan hukum yang adil; dan
                </li>
                <li>
                  Mengembangkan proses bisnis inti berbasis digital didukung
                  budaya organisasi yang adaptif dan kolaboratif serta aparatur
                  pajak yang berintegritas, profesional, dan bermotivasi.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
