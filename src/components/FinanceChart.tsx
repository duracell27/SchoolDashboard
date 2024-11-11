"use client";
import Image from "next/image";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jun",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 5000,
    expense: 2800,
  },
  {
    name: "Mar",
    income: 3000,
    expense: 2600,
  },
  {
    name: "Apr",
    income: 4500,
    expense: 2900,
  },
  {
    name: "May",
    income: 5500,
    expense: 3200,
  },
  {
    name: "Jun",
    income: 4800,
    expense: 3300,
  },
  {
    name: "Jul",
    income: 6000,
    expense: 3500,
  },
  {
    name: "Aug",
    income: 5300,
    expense: 3000,
  },
  {
    name: "Sep",
    income: 4200,
    expense: 2700,
  },
  {
    name: "Oct",
    income: 5000,
    expense: 3100,
  },
  {
    name: "Nov",
    income: 4800,
    expense: 3400,
  },
  {
    name: "Dec",
    income: 4500,
    expense: 3200,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Finance</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={4} />
          <Line type="monotone" dataKey="expense" stroke="#cfceff" strokeWidth={4}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
