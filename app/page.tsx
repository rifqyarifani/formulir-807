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
          <div className=" container md:px-36 p-6">
            <h1 className=" text-[#093B6E] font-bold text-3xl">
              Maklumat Pelayanan
            </h1>
            <p className=" font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              laboriosam fuga quibusdam sit, magnam est consequatur odio
              incidunt veniam. Aut similique, unde quisquam officiis laborum eos
              cumque et consequuntur harum dicta, ducimus ad nam? Amet facilis
              repellat libero fugit nemo, praesentium mollitia, autem
              exercitationem alias, sunt tempora animi! Molestias, rerum!
            </p>
          </div>
        </div>
        <div className=" text-center flex flex-col gap-4 bg-[#093B6E] ">
          <div className=" container md:px-36 p-6">
            <h1 className=" text-yellow-400 font-bold text-3xl">
              Maklumat Pelayanan
            </h1>
            <p className=" font-medium text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              laboriosam fuga quibusdam sit, magnam est consequatur odio
              incidunt veniam. Aut similique, unde quisquam officiis laborum eos
              cumque et consequuntur harum dicta, ducimus ad nam? Amet facilis
              repellat libero fugit nemo, praesentium mollitia, autem
              exercitationem alias, sunt tempora animi! Molestias, rerum!
            </p>
          </div>
        </div>
        <div className=" text-center flex flex-col gap-4">
          <div className=" container md:px-36 p-6">
            <h1 className=" text-[#093B6E] font-bold text-3xl">
              Maklumat Pelayanan
            </h1>
            <p className=" font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              laboriosam fuga quibusdam sit, magnam est consequatur odio
              incidunt veniam. Aut similique, unde quisquam officiis laborum eos
              cumque et consequuntur harum dicta, ducimus ad nam? Amet facilis
              repellat libero fugit nemo, praesentium mollitia, autem
              exercitationem alias, sunt tempora animi! Molestias, rerum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
