import { authOptions } from "@/lib/auth";
import JenisBerkasForm from "../../_components/JenisBerkasForm";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

const EditJenisBerkasPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
  if (session?.user.role !== "Admin") {
    return (
      <>
        <div className=" h-60 flex items-center justify-center">
          <h1 className=" text-5xl font-bold">Anda bukan admin</h1>
        </div>
      </>
    );
  }
  const jenisBerkas = await prisma.jenisBerkas.findUnique({
    where: { id: params.id },
  });

  if (!jenisBerkas) {
    return NextResponse.json(
      { error: "Jenis Berkas tidak ditemukan" },
      { status: 404 }
    );
  }
  return <JenisBerkasForm jenisBerkas={jenisBerkas} />;
};

export default EditJenisBerkasPage;
