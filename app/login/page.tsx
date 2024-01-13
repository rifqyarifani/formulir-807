import UserAuthForm from "@/app/login/_components/user-auth-form";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const page = async () => {
  return (
    <div className="flex justify-center items-center">
      <UserAuthForm />
    </div>
  );
};

export default page;
