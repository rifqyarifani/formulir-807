import { DataTable } from "@/components/DataTable";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import { columns } from "@/app/dus/[id]/_components/Columns";
import { Heading } from "@radix-ui/themes";

interface Props {
  params: { id: string };
}

const AddPage = async ({ params }: Props) => {
  const dokumen = await prisma.dokumen.findMany({
    include: { jenisBerkas: true, noDus: true },
    where: {
      noDusId: params.id,
    },
  });
  const dokumenWithJenisBerkasAndNoDus = dokumen.map((docs) => ({
    ...docs,
    jenisBerkas: docs.jenisBerkas.nama,
    noDus: docs.noDus.noDus,
  }));

  const dus = await prisma.dus.findUnique({
    where: { id: params.id },
  });

  if (!dokumen) {
    return NextResponse.json({ error: "Dus tidak ditemukan" }, { status: 404 });
  }
  return (
    <>
      <div className=" flex justify-between container">
        <Heading mb={"5"}>{`Daftar Dus ${dus?.noDus}`}</Heading>
      </div>
      <div className="container">
        <DataTable columns={columns} data={dokumenWithJenisBerkasAndNoDus} />
      </div>
    </>
  );
};

export default AddPage;
