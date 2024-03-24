"use client";

import Image from "next/image";
import React from "react";
import bantaeng from "@/img/bantaeng.webp";
import gowa from "@/img/gowa.webp";
import takalar from "@/img/takalar.webp";
import bontosunggu from "@/img/bontosunggu.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const page = () => {
  return (
    <>
      <div className=" flex pt-20 justify-center container">
        <h1 className=" text-center text-3xl uppercase text-white font-black">
          Lokasi
        </h1>
      </div>
      <div className=" pt-6">
        <div className=" flex flex-col gap-8 mb-4 text-center bg-white p-6">
          <div className=" flex flex-col md:flex-row gap-2 items-center justify-between container md:px-36">
            <Image
              src={bantaeng}
              alt="Kantor KPP Pratama Bantaeng"
              className=" w-full md:w-1/2 md:h-96 rounded-lg border border-first"
            />
            <div className=" flex flex-col justify-between font-medium md:h-96 gap-4 md:w-1/2 text-first ">
              <div className=" text-left flex flex-col gap-1">
                <h1 className="  font-black uppercase text-2xl">
                  KPP Pratama Bantaeng
                </h1>
                <h3 className=" font-light">
                  Jl. Andi Mannapiang, Lamalaka, Kec. Bantaeng, Kab. Bantaeng,
                  Sulawesi Selatan 92415
                </h3>
                <a
                  href="tel:041321189"
                  className="hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                >
                  <BsFillTelephoneFill /> (0413) 21189
                </a>
                <a
                  href="https://wa.me/628114002807"
                  className="hover:text-purple-300 flex items-center gap-2 font-light  max-w-fit"
                  target="_blank"
                >
                  <IoLogoWhatsapp /> 08114002807
                </a>
                <a
                  href="mailto:kpp.807@pajak.go.id"
                  className="hover:text-purple-300 flex items-center gap-2 font-light  max-w-fit"
                >
                  <MdEmail /> kpp.807@pajak.go.id
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0904789883475!2d119.96537017579469!3d-5.553604594426776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbeb2ac73b02de3%3A0x67bef74ccc5b6b02!2sKantor%20Pelayanan%20Pajak%20Pratama%20Bantaeng!5e0!3m2!1sid!2sid!4v1709357157263!5m2!1sid!2sid"
                loading="lazy"
                className=" rounded-lg w-full md:h-56 border-first border "
              ></iframe>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 mb-4 text-center p-6">
          <div className=" flex flex-col md:flex-row gap-2 items-center justify-between container md:px-36">
            <Image
              src={gowa}
              alt="Kantor KP2KP Sungguminasa"
              className=" w-full md:w-1/2 md:h-96 rounded-lg border border-first"
            />
            <div className=" flex flex-col justify-between font-medium md:h-96 gap-4 md:w-1/2 text-white ">
              <div className=" text-left flex flex-col gap-1">
                <h1 className="  font-black uppercase text-2xl">
                  KP2KP Sungguminasa
                </h1>
                <h3 className=" font-light">
                  Jl. Mesjid Raya No.24, Sungguminasa, Kec. Somba Opu, Kab.
                  Gowa, Sulawesi Selatan 92114
                </h3>
                <a
                  href="https://instagram.com/pajaksungguminasa"
                  className="hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                  target="_blank"
                >
                  <AiFillInstagram /> @pajaksungguminasa
                </a>
                <a
                  href="tel:0411861143"
                  className=" hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                >
                  <BsFillTelephoneFill /> (0411) 861143
                </a>
                <a
                  href="https://wa.me/6281340258057"
                  className=" hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                  target="_blank"
                >
                  <IoLogoWhatsapp /> 081340258057
                </a>
                <a
                  href="mailto:kp2kp.sungguminasa@pajak.go.id"
                  className="hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                >
                  <MdEmail /> kp2kp.sungguminasa@pajak.go.id
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3829206402233!2d119.45149099999999!3d-5.20236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee23a6f428ac3%3A0x969c2dd8eb24d089!2sKantor%20Pelayanan%20Penyuluhan%20Dan%20Konsultasi%20Perpajakan%20Sungguminasa!5e0!3m2!1sid!2sid!4v1709440902628!5m2!1sid!2sid"
                loading="lazy"
                className=" rounded-lg w-full md:h-56 border-first border "
              ></iframe>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 mb-4 text-center bg-white p-6">
          <div className=" flex flex-col md:flex-row gap-2 items-center justify-between container md:px-36">
            <Image
              src={takalar}
              alt="Kantor KP2KP Takalar"
              className=" w-full md:w-1/2 md:h-96 rounded-lg border border-first"
            />
            <div className=" flex flex-col justify-between font-medium md:h-96 gap-4 md:w-1/2 text-first ">
              <div className=" text-left flex flex-col gap-1">
                <h1 className="  font-black uppercase text-2xl">
                  KP2KP Takalar
                </h1>
                <h3 className=" font-light">
                  Lingk. Kalampa, Jalan Badaming Dg. Rani No.12, Kalabbirang,
                  Kec. Pattallassang, Kab. Takalar, Sulawesi Selatan
                </h3>
                <a
                  href="https://instagram.com/pajaktakalar"
                  className="hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                  target="_blank"
                >
                  <AiFillInstagram /> @pajaktakalar
                </a>
                <a
                  href="tel:041821880"
                  className=" hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                >
                  <BsFillTelephoneFill /> (0418) 21880
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3972.0215008833675!2d119.440012!3d-5.4136956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbed8421a530c71%3A0x8ebc24124e4bad08!2sKP2KP%20Takalar!5e0!3m2!1sid!2sid!4v1709444325595!5m2!1sid!2sid"
                loading="lazy"
                className=" rounded-lg w-full md:h-56 border-first border "
              ></iframe>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 text-center  p-6">
          <div className=" flex flex-col md:flex-row gap-2 items-center justify-between container md:px-36">
            <Image
              src={bontosunggu}
              alt="Kantor KP2KP Bontosunggu"
              className=" w-full md:w-1/2 md:h-96 rounded-lg border border-first"
            />
            <div className=" flex flex-col justify-between font-medium md:h-96 gap-4 md:w-1/2 text-white ">
              <div className=" text-left flex flex-col gap-1">
                <h1 className="  font-black uppercase text-2xl">
                  KP2KP Bontosunggu
                </h1>
                <h3 className=" font-light">
                  Jalan Pahlawan No.33, Empoang, Kec. Binamu, Kab. Jeneponto,
                  Sulawesi Selatan
                </h3>
                <a
                  href="https://instagram.com/pajakbontosunggu"
                  className="hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                  target="_blank"
                >
                  <AiFillInstagram /> @pajakbontosunggu
                </a>
                <a
                  href="tel:041921277"
                  className=" hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                >
                  <BsFillTelephoneFill /> (0419) 21277
                </a>
                <a
                  href="https://wa.me/6285256815422"
                  className=" hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                  target="_blank"
                >
                  <IoLogoWhatsapp /> 085256815422
                </a>
                <a
                  href="mailto:kp2kpbontosunggu807@gmail.com"
                  className="hover:text-purple-300 flex items-center gap-2 font-light max-w-fit"
                >
                  <MdEmail /> kp2kpbontosunggu807@gmail.com
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2692695764918!2d119.7563497!3d-5.674157600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db9364e6822bff1%3A0xd91fccbf79b1c552!2sKP2KP%20Bontosunggu%20(Kantor%20Pelayanan%2C%20Penyuluhan%2C%20dan%20Konsultasi%20Perpajakan)!5e0!3m2!1sid!2sid!4v1709444590246!5m2!1sid!2sid"
                loading="lazy"
                className=" rounded-lg w-full md:h-56 border-first border "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
