import React from "react";
import Image from "next/image";
import hero from "@/img/hero.webp";

const Main = async () => {
  return (
    <>
      <Image
        src={hero}
        alt="Hero"
        fetchPriority="high"
        decoding="async"
        className="object-cover w-full sm:h-[44.7vw] h-[500px]"
      />
      <h1>KPP Pratama Bantaeng</h1>
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
