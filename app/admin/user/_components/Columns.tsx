"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteUser from "./DeleteUser";

export type User = {
  username: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Username
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <div className=" text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Role
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" text-center">{row.getValue("role")}</div>
    ),
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => (
      <div className=" flex text-xl justify-center gap-2 ">
        <Link href={`/admin/user/${row.getValue("id")}/edit`}>
          <div className=" text-yellow-500">
            <FaEdit />
          </div>
        </Link>
        <DeleteUser userId={row.getValue("id")} />
      </div>
    ),
  },
];
