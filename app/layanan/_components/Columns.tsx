"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";

export type Dokumen = {
  id: string;
  permohonan: string;
  jangkaWaktu: string;
};

export const columns: ColumnDef<Dokumen>[] = [
  {
    accessorKey: "permohonan",
    header: ({ column }) => {
      return (
        <div className=" text-left text-white">
          <Button
            variant="ghost"
            className=" font-extrabold"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Permohonan
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <Link href={`/permohonan/${row.getValue("permohonan")}`}>
        <div className=" text-left font-normal text-white hover:text-gray-400">
          {" "}
          {row.getValue("permohonan")}
        </div>
      </Link>
    ),
  },
  {
    accessorKey: "jangkaWaktu",
    header: ({ column }) => {
      return (
        <div className=" text-left text-white">
          <Button
            variant="ghost"
            className=" font-extrabold"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Jangka Waktu
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <Link href={`/permohonan/${row.getValue("jangkaWaktu")}`}>
        <div className=" text-left font-normal text-white hover:text-gray-400">
          {" "}
          {row.getValue("jangkaWaktu")}
        </div>
      </Link>
    ),
  },
];
