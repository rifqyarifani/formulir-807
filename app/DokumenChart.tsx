"use client";

import React from "react";
import { ResponsiveContainer, XAxis, YAxis, Bar, BarChart } from "recharts";

interface Props {
  jenisBerkasData: { nama: string; _count: number }[];
}

const DokumenChart = ({ jenisBerkasData }: Props) => {
  return (
    <ResponsiveContainer width="50%" height={350}>
      <BarChart data={jenisBerkasData}>
        <XAxis
          dataKey="nama"
          stroke="#888888"
          fontSize={14}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="_count" fill="lightblue" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DokumenChart;
