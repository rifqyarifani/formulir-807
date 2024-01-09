import prisma from "@/prisma/client";
import { Heading } from "@radix-ui/themes";
import { DataTable } from "../../components/DataTable";
import { columns } from "../dus/_components/Columns";

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
