import UserForm from "@/app/admin/user/_components/UserForm";
import { authOptions } from "@/lib/auth";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

const EditUserPage = async ({ params }: Props) => {
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
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User tidak ditemukan" },
      { status: 404 }
    );
  }
  return <UserForm user={user} />;
};

export default EditUserPage;
