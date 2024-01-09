import { columns } from "@/app/admin/jenisberkas/_components/Columns";
import { jenisBerkasSchema } from "@/app/schema";
import { DataTable } from "@/components/DataTable";
import { authOptions } from "@/lib/auth";
import prisma from "@/prisma/client";
import { Button, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const jenisBerkasAdminPage = async () => {
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
  const jenisberkas = await prisma.jenisBerkas.findMany();
  return (
    <>
      <div className=" flex justify-between container">
        <Heading mb={"5"}>Daftar Jenis Berkas</Heading>
        <Button size={"3"} color="violet">
          <Link
            href="/admin/jenisberkas/add"
            className=" flex items-center gap-2 text-base"
          >
            Add
            <BsPlusCircle />
          </Link>
        </Button>
      </div>
      <div className="container">
        <DataTable columns={columns} data={jenisberkas} />
      </div>
    </>
  );
};

export default jenisBerkasAdminPage;
