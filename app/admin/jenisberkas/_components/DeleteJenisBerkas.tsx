"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  jenisBerkasId: string;
}

const DeleteJenisBerkas = ({ jenisBerkasId }: Props) => {
  const router = useRouter();
  return (
    <div className=" text-red-500">
      <AlertDialog>
        <AlertDialogTrigger>
          <AiFillDelete />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Jenis Berkas?</AlertDialogTitle>
            <AlertDialogDescription>
              Jenis Berkas akan dihapus secara permanen
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await axios.delete(`/api/admin/jenisberkas/${jenisBerkasId}`);
                router.refresh();
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteJenisBerkas;

export const dynamic = "force-dynamic";
