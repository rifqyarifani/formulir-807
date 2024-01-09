"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Delete } from "lucide-react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteDokumen from "./DeleteDokumen";
import { Checkbox } from "@/components/ui/checkbox";

export type Dokumen = {
  noDokumen: string;
  npwp: string;
  namaWp: string;
  jenisBerkas: string;
  noDus: string;
};

export const columns: ColumnDef<Dokumen>[] = [
  {
    accessorKey: "noDokumen",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            No Dokumen
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("noDokumen")}</div>
    ),
  },
  {
    accessorKey: "npwp",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            NPWP
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("npwp")}</div>
    ),
  },
  {
    accessorKey: "namaWp",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nama WP
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("namaWp")}</div>
    ),
  },
  {
    accessorKey: "jenisBerkas",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Jenis Berkas
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("jenisBerkas")}</div>
    ),
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
      <div className=" text-center">{row.getValue(`noDus`)}</div>
    ),
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => (
      <div className=" flex text-xl justify-center gap-2 ">
        <Link href={`/arsip/${row.getValue("id")}/edit`}>
          <div className=" text-yellow-500">
            <FaEdit />
          </div>
        </Link>
        <DeleteDokumen dokumenId={row.getValue("id")} />
      </div>
    ),
  },
];
