import React from "react";
import data from "../../../data.json";
import * as querystring from "querystring";

interface Props {
  params: { id: string };
}

const DetailPage = async ({ params }: Props) => {
  const queryString = `param1=${params.id}`;
  const parsedQuery = querystring.parse(queryString).param1;
  let permohonan: any = {};
  for (const x of data) {
    if (x.permohonan === parsedQuery) {
      permohonan = x;
    }
  }

  const formulirList = permohonan.formulir.map((obj: any) => {
    const entries = Object.entries(obj)[0];
    return entries;
  });

  const lampiranList = permohonan.lampiran.map((obj: any) => {
    const entries = Object.entries(obj)[0];
    return entries;
  });

  return (
    <>
      <div className=" py-6 container md:px-36">
        <h1 className=" text-center font-bold text-3xl mb-8">
          {permohonan.permohonan}
        </h1>
        <div className=" md:flex md:justify-between">
          <div className=" mb-8">
            {" "}
            <h2 className=" font-medium text-2xl">Formulir</h2>
            {formulirList.map((detail: any, index: any) => (
              <li key={detail} className=" py-1">
                <a
                  href={detail[1]}
                  target="_blank"
                  className=" underline hover:no-underline hover:text-blue-700"
                >
                  {detail[0]}
                </a>
              </li>
            ))}
          </div>
          <div className=" mb-8">
            <h2 className=" font-medium text-2xl">Jangka Waktu</h2>
            <ol>
              <li>{permohonan.jangkaWaktu}</li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className=" font-medium text-2xl">Lampiran</h2>
          <div className=" grid md:grid-cols-2">
            {lampiranList.map((detail: any) => (
              <div className="">
                <h2 key={detail} className=" py-2 font-medium">
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
