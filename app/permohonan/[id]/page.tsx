import React from "react";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import data from "../../../data.json";
import * as querystring from "querystring";
import { parse } from "path";

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
        {permohonan.persyaratan.map((detail: any) => (
          <h1>{detail}</h1>
        ))}
      </div>
    </>
  );
};

export default DetailPage;
