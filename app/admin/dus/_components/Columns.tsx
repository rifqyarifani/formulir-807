"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteUser from "./DeleteDus";

export type Dus = {
  id: string;
  noDus: string;
  noRak: string;
};

export const columns: ColumnDef<Dus>[] = [
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
    accessorKey: "noDus",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            No Dus
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("noDus")}</div>
    ),
  },
  {
    accessorKey: "noRak",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            No Rak
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("noRak")}</div>
    ),
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => (
      <div className=" flex text-xl justify-center gap-2 ">
        <Link href={`/admin/dus/${row.getValue("id")}/edit`}>
          <div className=" text-yellow-500">
            <FaEdit />
          </div>
        </Link>
        <DeleteUser dusId={row.getValue("id")} />
      </div>
    ),
  },
];
