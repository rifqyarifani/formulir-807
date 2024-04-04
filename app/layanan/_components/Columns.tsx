"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

export type Dokumen = {
  id: string;
  layanan: string;
  jangkaWaktu: string;
};

export const columns: ColumnDef<Dokumen>[] = [
  {
    accessorKey: "layanan",
    header: ({ column }) => {
      return (
        <div className=" text-center text-white">
          <Button
            variant="ghost"
            className=" font-extrabold text-xl"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Layanan
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <Link href={`/layanan/${row.getValue("layanan")}`}>
        <div className=" text-center font-medium text-fifth hover:text-gray-400">
          {" "}
          {row.getValue("layanan")}
        </div>
      </Link>
    ),
  },
  // {
  //   accessorKey: "jangkaWaktu",
  //   header: ({ column }) => {
  //     return (
  //       <div className=" text-center text-white">
  //         <Button
  //           variant="ghost"
  //           className=" font-extrabold text-xl"
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Jangka Waktu
  //           <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       </div>
  //     );
  //   },
  //   cell: ({ row }) => (
  //     <Link href={`/permohonan/${row.getValue("jangkaWaktu")}`}>
  //       <div className=" text-center font-normal text-gray-900 hover:text-gray-400">
  //         {" "}
  //         {row.getValue("jangkaWaktu")}
  //       </div>
  //     </Link>
  //   ),
  // },
];
