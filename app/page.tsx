import React from "react";
import Image from "next/image";
import hero from "@/img/hero.jpg";

const Main = async () => {
  return (
    <>
      <Image
        src={hero}
        alt="Hero"
        fetchPriority="high"
        width="1468"
        height="724"
        decoding="async"
        className="object-cover w-full sm:h-[44.7vw] h-[500px] bg-blend-overlay"
      />

      {/* <img
        src="https://img.kkbahagia.com/?width=1920&image=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Fpage-assets%2Fhomepage_hero-banner.png"
        alt="Hero Banner"
        fetchPriority="high"
        width="1468"
        height="724"
        decoding="async"
        className="object-cover w-full sm:h-[44.7vw] h-[500px]"
      /> */}
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
