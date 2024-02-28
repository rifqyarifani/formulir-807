import { DataTable } from "@/app/permohonan/_components/DataTable";
import { columns } from "./_components/Columns";
import data from "../../data.json";

const TableData = async () => {
  return (
    <>
      <div className=" flex pt-6 justify-center container">
        <h1 className=" text-center font-bold text-3xl">Daftar Formulir</h1>
      </div>
      <div className="xl:container md:px-36 p-6">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default TableData;

export const dynamic = "force-dynamic";
