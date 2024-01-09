import React from "react";
import JenisBerkasForm from "../_components/JenisBerkasForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const AddPage = async () => {
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
  return <JenisBerkasForm />;
};

export default AddPage;
