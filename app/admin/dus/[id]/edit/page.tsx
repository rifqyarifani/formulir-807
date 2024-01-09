import { authOptions } from "@/lib/auth";
import DusForm from "../../_components/DusForm";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

const EditDusPage = async ({ params }: Props) => {
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
  const dus = await prisma.dus.findUnique({
    where: { id: params.id },
  });

  if (!dus) {
    return NextResponse.json({ error: "Dus tidak ditemukan" }, { status: 404 });
  }
  return <DusForm dus={dus} />;
};

export default EditDusPage;
