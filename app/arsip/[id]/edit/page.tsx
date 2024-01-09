import React from "react";
import DokumenForm from "@/app/arsip/_components/DokumenForm";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

const AddPage = async ({ params }: Props) => {
  const dokumen = await prisma.dokumen.findUnique({
    where: { id: parseInt(params.id) },
    include: { jenisBerkas: true, noDus: true },
  });

  const jenisBerkas = await prisma.jenisBerkas.findMany();
  const dus = await prisma.dus.findMany();

  if (!dokumen) {
    return NextResponse.json(
      { error: "Dokumen tidak ditemukan" },
      { status: 404 }
    );
  }
  return <DokumenForm dokumen={dokumen} jenisBerkas={jenisBerkas} dus={dus} />;
};

export default AddPage;
