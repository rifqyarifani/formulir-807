import Image from "next/image";
import React from "react";
import djp from "@/img/djp.png";

const page = () => {
  return (
    <>
      <div className=" flex py-6 justify-center container">
        <h1 className=" text-center font-bold text-3xl">Lokasi</h1>
      </div>
      <div className=" flex flex-col gap-8 mb-4">
        <div className=" container md:px-36 text-center">
          <div className=" bg-white flex flex-col p-6 rounded-xl">
            <h1 className=" text-[#093B6E] font-bold text-3xl">
              KPP Pratama Bantaeng
            </h1>
            <div className=" flex items-center justify-between">
              <Image src={djp} alt="foto kantor" width={300} height={200} />
              <div className=" flex flex-col font-medium">
                <h3>
                  Alamat: Jalan Andi Mannapiang, Lamalaka, Kec. Bantaeng,
                  Sulawesi Selatan 92415
                </h3>
                <h3>Telepon: (0413) 21189</h3>
                <h3>Email: kpp.807@pajak.go.id</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0904789883475!2d119.96537017579469!3d-5.553604594426776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbeb2ac73b02de3%3A0x67bef74ccc5b6b02!2sKantor%20Pelayanan%20Pajak%20Pratama%20Bantaeng!5e0!3m2!1sid!2sid!4v1709357157263!5m2!1sid!2sid"
                width="300"
                height="250"
                loading="lazy"
                className=" rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
        <div className=" container md:px-36 text-center">
          <div className=" bg-[#093B6E] flex flex-col p-6 rounded-xl">
            <h1 className=" text-yellow-400 font-bold text-3xl">
              KPP Pratama Bantaeng
            </h1>
            <div className=" flex items-center justify-between">
              <Image src={djp} alt="foto kantor" width={300} height={200} />
              <div className=" flex flex-col font-medium text-white">
                <h3>
                  Alamat: Jalan Andi Mannapiang, Lamalaka, Kec. Bantaeng,
                  Sulawesi Selatan 92415
                </h3>
                <h3>Telepon: (0413) 21189</h3>
                <h3>Email: kpp.807@pajak.go.id</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0904789883475!2d119.96537017579469!3d-5.553604594426776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbeb2ac73b02de3%3A0x67bef74ccc5b6b02!2sKantor%20Pelayanan%20Pajak%20Pratama%20Bantaeng!5e0!3m2!1sid!2sid!4v1709357157263!5m2!1sid!2sid"
                width="300"
                height="250"
                loading="lazy"
                className=" rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
