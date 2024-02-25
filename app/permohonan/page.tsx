import { Heading } from "@radix-ui/themes";
import { DataTable } from "@/app/permohonan/_components/DataTable";
import { columns } from "./_components/Columns";
import data from "../../data.json";

const TableData = async () => {
  return (
    <>
      <div className=" flex pt-10 justify-center container">
        <h1 className=" text-center font-bold text-3xl mb-8">
          Daftar Formulir
        </h1>
      </div>
      <div className="xl:container">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default TableData;

export const dynamic = "force-dynamic";
