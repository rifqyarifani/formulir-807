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

  return (
    <>
      <div>
        <h1>{permohonan.permohonan}</h1>
        <ul>
          {permohonan.persyaratan.map((detail: any) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailPage;
