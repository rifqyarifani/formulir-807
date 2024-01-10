import React from "react";
import DokumenForm from "../_components/DokumenForm";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

const AddPage = async ({ params: { id } }: Props) => {
  const jenisBerkas = await prisma.jenisBerkas.findMany();
  const dus = await prisma.dus.findUnique({
    where: { id: id },
  });
  console.log(dus);
  return <DokumenForm jenisBerkas={jenisBerkas} dus={dus!} />;
};

export default AddPage;

export const dynamic = "force-dynamic";
