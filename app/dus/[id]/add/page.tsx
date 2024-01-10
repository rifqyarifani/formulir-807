import React from "react";
import DokumenForm from "../_components/DokumenForm";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

interface Props {
  params: { id: string };
}

const AddPage = async ({ params: { id } }: Props) => {
  const jenisBerkas = await prisma.jenisBerkas.findMany();
  const dus = await prisma.dus.findUnique({
    where: { id: id },
  });

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
  return <DokumenForm jenisBerkas={jenisBerkas} dus={dus!} />;
};

export default AddPage;

export const dynamic = "force-dynamic";
