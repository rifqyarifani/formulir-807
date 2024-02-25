import { Heading } from "@radix-ui/themes";
import { DataTable } from "@/app/permohonan/_components/DataTable";
import { columns } from "./_components/Columns";
import data from "../../data.json";

const TableData = async () => {
  return (
    <>
      <div className=" flex justify-center">
        <Heading mb={"5"}>Daftar Formulir</Heading>
      </div>
      <div className="">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default TableData;

export const dynamic = "force-dynamic";
