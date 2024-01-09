import React from "react";
import DokumenForm from "../_components/DokumenForm";
import prisma from "@/prisma/client";

const AddPage = async () => {
  const jenisBerkas = await prisma.jenisBerkas.findMany();
  const dus = await prisma.dus.findMany();

  return <DokumenForm jenisBerkas={jenisBerkas} dus={dus} />;
};

export default AddPage;

export const dynamic = "force-dynamic";
