"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteUser from "./DeleteJenisBerkas";

export type JenisBerkas = {
  id: string;
  nama: string;
};

export const columns: ColumnDef<JenisBerkas>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div className=" text-center">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nama
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("nama")}</div>
    ),
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => (
      <div className=" flex text-xl justify-center gap-2 ">
        <Link href={`/admin/jenisberkas/${row.getValue("id")}/edit`}>
          <div className=" text-yellow-500">
            <FaEdit />
          </div>
        </Link>
        <DeleteUser jenisBerkasId={row.getValue("id")} />
      </div>
    ),
  },
];
