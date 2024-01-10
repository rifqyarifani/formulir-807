import prisma from "@/prisma/client";
import { Button, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { BsPlusCircle } from "react-icons/bs";
import { DataTable } from "@/app/arsip/_components/DataTable";
import { columns } from "../arsip/_components/Columns";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const TableData = async () => {
  const dokumen = await prisma.dokumen.findMany({
    include: { jenisBerkas: true, noDus: true },
  });
  const dokumenWithJenisBerkasAndNoDus = dokumen.map((docs) => ({
    ...docs,
    jenisBerkas: docs.jenisBerkas.nama,
    noDus: docs.noDus.noDus,
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
        <Heading mb={"5"}>Daftar Arsip</Heading>
        <Button size={"3"} color="violet">
          <Link
            href="/arsip/add"
            className=" flex items-center gap-2 text-base"
          >
            Add
            <BsPlusCircle />
          </Link>
        </Button>
      </div>
      <div className="container">
        <DataTable columns={columns} data={dokumenWithJenisBerkasAndNoDus} />
      </div>
    </>
  );
};

export default TableData;

export const dynamic = "force-dynamic";
