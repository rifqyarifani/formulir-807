import prisma from "@/prisma/client";
import { Heading } from "@radix-ui/themes";
import { count } from "console";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import DokumenChart from "./DokumenChart";

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
