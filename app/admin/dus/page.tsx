import { columns } from "@/app/admin/dus/_components/Columns";
import { DataTable } from "@/components/DataTable";
import { authOptions } from "@/lib/auth";
import prisma from "@/prisma/client";
import { Button, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
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

  const dus = await prisma.dus.findMany();
  return (
    <>
      <div className=" flex justify-between container">
        <Heading mb={"5"}>Daftar Dus</Heading>
        <Button size={"3"} color="violet">
          <Link
            href="/admin/dus/add"
            className=" flex items-center gap-2 text-base"
          >
            Add
            <BsPlusCircle />
          </Link>
        </Button>
      </div>
      <div className="container">
        <DataTable columns={columns} data={dus} />
      </div>
    </>
  );
};

export default jenisBerkasAdminPage;
