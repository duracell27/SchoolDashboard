"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 95,
    absent: 45,
  },
  {
    name: "Tue",
    present: 98,
    absent: 53,
  },
  {
    name: "Wed",
    present: 86,
    absent: 47,
  },
  {
    name: "Thu",
    present: 85,
    absent: 38,
  },
  {
    name: "Fri",
    present: 90,
    absent: 41,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Students</h1>
        <Image src={"/moreDark.png"} alt="more" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:'10px', borderColor: 'lightgray'}}/>
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="present" fill="#c3ebfa" legendType="circle" radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#fae27c" legendType="circle" radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
