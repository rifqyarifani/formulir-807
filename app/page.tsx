import prisma from "@/prisma/client";
import { Heading } from "@radix-ui/themes";
import React from "react";
import DokumenChart from "./DokumenChart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const Main = async () => {
  const data = await prisma.jenisBerkas.findMany({
    include: {
      _count: {
        select: { Dokumen: true },
      },
    },
  });
  const countData = data.map((docs) => ({
    ...docs,
    _count: docs._count.Dokumen,
  }));

  const session = await getServerSession(authOptions);
  if (session === null) {
    return (
      <>
        <div className=" h-60 flex items-center justify-center">
          <h1 className=" text-5xl font-bold">Login Terlebih dahulu</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <Heading mb={"5"}>Dashboard</Heading>
        <DokumenChart jenisBerkasData={countData} />
      </div>
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
