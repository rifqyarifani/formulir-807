"use client";

import { wrap } from "module";
import React from "react";
import { ResponsiveContainer, XAxis, YAxis, Bar, BarChart } from "recharts";

interface Props {
  jenisBerkasData: { nama: string; _count: number }[];
}

const DokumenChart = ({ jenisBerkasData }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={jenisBerkasData}>
        <XAxis
          dataKey="nama"
          stroke="#888888"
          fontSize={12}
          tickLine={true}
          axisLine={true}
        />
        <YAxis
          stroke="#888888"
          fontSize={16}
          tickLine={true}
          axisLine={true}
          allowDecimals={false}
        />
        <Bar dataKey="_count" fill="#8884d8" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DokumenChart;
