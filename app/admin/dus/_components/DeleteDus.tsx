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
  dusId: string;
}

const DeleteJenisBerkas = ({ dusId }: Props) => {
  const router = useRouter();
  return (
    <div className=" text-red-500">
      <AlertDialog>
        <AlertDialogTrigger>
          <AiFillDelete />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Dus?</AlertDialogTitle>
            <AlertDialogDescription>
              Dus akan dihapus secara permanen
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await axios.delete(`/api/admin/dus/${dusId}`);
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
