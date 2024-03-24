import { DataTable } from "@/app/layanan/_components/DataTable";
import { columns } from "./_components/Columns";
import data from "../../data.json";

const TableData = async () => {
  return (
    <>
      <div className=" flex pt-20 justify-center container">
        <h1 className=" text-center text-3xl uppercase text-white font-black">
          Layanan
        </h1>
      </div>
      <div className="md:px-36 p-6 container">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default TableData;

export const dynamic = "force-dynamic";
