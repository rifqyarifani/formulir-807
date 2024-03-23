import React from "react";
import data from "../../../data.json";
import * as querystring from "querystring";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const DetailPage = async ({ params }: Props) => {
  const queryString = `param1=${params.id}`;
  const parsedQuery = querystring.parse(queryString).param1;
  let layanan: any = {};
  for (const x of data) {
    if (x.layanan === parsedQuery) {
      layanan = x;
    }
  }

  const formulirList = layanan.formulir.map((obj: any) => {
    const entries = Object.entries(obj)[0];
    return entries;
  });

  const lampiranList = layanan.lampiran.map((obj: any) => {
    const entries = Object.entries(obj)[0];
    return entries;
  });

  return (
    <>
      <div className=" py-6 container md:px-36 ">
        <Link href="/layanan">
          <div className="text-xs inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-first bg-balance hover:bg-opacity-70 bg-white mt-10 mb-5">
            <ChevronLeftIcon className="w-2.5 h-2.5" />
            <span className="ml-2">Kembali</span>
          </div>
        </Link>
        <div className=" flex pb-12 justify-center container">
          <h1 className=" text-center text-3xl text-white font-black uppercase">
            {layanan.layanan}
          </h1>
        </div>
        <div className=" md:flex md:justify-between">
          <div className=" mb-8">
            {" "}
            <h2 className=" text-xl text-center text-white w-60 border-white border p-2 rounded-full font-black mb-2">
              Formulir
            </h2>
            {formulirList.map((detail: any) => (
              <li
                key={detail}
                className=" py-1 flex items-center gap-2 text-white hover:opacity-70 underline underline-offset-4 decoration-2 decoration-white text-base"
              >
                <a
                  href={detail[1]}
                  target="_blank"
                  className=""
                  key={detail[0]}
                >
                  <div className=" flex items-center gap-1">
                    <FaDownload />
                    {detail[0]}
                  </div>
                </a>
                {/* <a
                  href={detail[1]}
                  target="_blank"
                  className=""
                  key={detail[0]}
                >
                  <FaDownload />
                </a> */}
              </li>
            ))}
          </div>
          <div>
            <div className=" mb-8">
              <h2 className=" text-xl text-center text-white w-60 border-white border p-2 rounded-full font-black mb-2">
                Saluran Permohonan
              </h2>
              {layanan.saluran.map((obj: any) => (
                <li key={obj}>{obj}</li>
              ))}
            </div>
            <div className=" mb-8">
              <h2 className=" text-xl text-center text-white w-60 border-white border p-2 rounded-full font-black mb-2">
                Jangka Waktu
              </h2>
              <ol>
                <li>{layanan.jangkaWaktu}</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className=" text-xl text-center text-white w-60 border-white border p-2 rounded-full font-black mb-2">
            Lampiran
          </h2>
          <div className=" grid md:grid-cols-2">
            {lampiranList.map((detail: any) => (
              <div key={detail}>
                <h2
                  key={detail}
                  className=" py-2 font-medium text-lg  underline underline-offset-4 decoration-2 decoration-white"
                >
                  {detail[0]}
                </h2>
                <div>
                  {detail[1].map((x: any) => (
                    <li key={x} className=" font-normal list-disc ml-6">
                      {x}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className=" w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);
