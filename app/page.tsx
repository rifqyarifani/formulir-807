import { Heading } from "@radix-ui/themes";
import React from "react";
const Main = async () => {
  return (
    <>
      <div className="flex justify-center">
        <Heading mb={"5"}>Dashboard</Heading>
      </div>
    </>
  );
};

export default Main;

export const dynamic = "force-dynamic";
