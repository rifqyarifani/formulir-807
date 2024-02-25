import React from "react";
import data from "../../../data.json";
import * as querystring from "querystring";

interface Props {
  params: { id: string };
}

interface detail {
  id: string;
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

  const mappedList = permohonan.formulir.map((obj: any) => {
    const entries = Object.entries(obj)[0];
    return entries;
  });

  return (
    <>
      <div className=" mt-10 container">
        <h1 className=" text-center font-bold text-4xl mb-8">
          {permohonan.permohonan}
        </h1>
        <div className=" mb-8">
          {" "}
          <h2 className=" font-medium text-2xl">Formulir</h2>
          {mappedList.map((detail: any, index: any) => (
            <li key={detail}>
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
        <div>
          <h2 className=" font-medium text-2xl">Lampiran</h2>
          <ol>
            {permohonan.lampiran.map((detail: any, index: any) => (
              <li key={detail} className=" mb-2">
                {index + 1}. {detail}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
