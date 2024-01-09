"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Delete } from "lucide-react";
import Link from "next/link";
import { CgDetailsMore } from "react-icons/cg";
import { Checkbox } from "@/components/ui/checkbox";

export type Dus = {
  noDus: string;
  noRak: string;
  _count: number;
};

export const columns: ColumnDef<Dus>[] = [
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
    accessorKey: "_count",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Jumlah Berkas
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("_count")}</div>
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
    header: () => <div className="text-center">Detail</div>,
    cell: ({ row }) => (
      <div className=" flex text-xl justify-center gap-2 ">
        <Link href={`/dus/${row.getValue("id")}`}>
          <div className=" text-gray-500">
            <CgDetailsMore />
          </div>
        </Link>
      </div>
    ),
  },
];
