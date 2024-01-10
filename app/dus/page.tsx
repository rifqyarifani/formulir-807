import prisma from "@/prisma/client";
import { Heading } from "@radix-ui/themes";
import { DataTable } from "../../components/DataTable";
import { columns } from "../dus/_components/Columns";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const TableData = async () => {
  const dus = await prisma.dus.findMany({
    include: {
      _count: {
        select: { Dokumen: true },
      },
    },
  });

  const dusAndCount = dus.map((docs) => ({
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
      <div className=" flex justify-between container">
        <Heading mb={"5"}>Daftar Dus</Heading>
      </div>
      <div className="container">
        <DataTable columns={columns} data={dusAndCount} />
      </div>
    </>
  );
};

export default TableData;

export const dynamic = "force-dynamic";
