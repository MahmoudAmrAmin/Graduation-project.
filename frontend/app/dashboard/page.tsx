"use client";

import Sidebar from "@/app/components/sidebar";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FiAlertCircle, FiTruck, FiEdit3 } from "react-icons/fi";

const data = [
  { month: "Jan", revenue: 200, cost: 180 },
  { month: "Feb", revenue: 240, cost: 210 },
  { month: "Mar", revenue: 220, cost: 190 },
  { month: "Apr", revenue: 300, cost: 260 },
  { month: "May", revenue: 280, cost: 230 },
  { month: "Jun", revenue: 360, cost: 300 },
];

export default function DashboardPage() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("userName") || "User");
  }, []);

  return (
    <main className="min-h-screen bg-[#0B1120] text-white pl-[256px]">
      <Sidebar />

      {/* HEADER */}
      <header className="
        h-[104px] flex items-center justify-between
        px-8 bg-[#0A1931]/80
        border-b border-white/10
        backdrop-blur
      ">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-400">
            Welcome back, here’s a look at your supply chain.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-cyan-400/20 flex items-center justify-center">
            {user[0]}
          </div>
          <div>
            <p className="text-sm font-medium">{user}</p>
            <span className="text-xs text-gray-400">Logistics Manager</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* METRICS */}
        <Metric title="Fulfillment Rate" value="98.2%" />
        <Metric title="Inventory Turnover" value="4.5" />
        <Metric title="Forecast Accuracy" value="94.8%" />

        {/* CHART */}
        <div className="lg:col-span-2 bg-[#162B4A]/50 p-6 rounded-xl border border-white/10">
          <h3 className="mb-4 text-sm text-gray-300">
            Cost vs Revenue Over Time
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22D3EE"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="cost"
                stroke="#EC4899"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* AI Recommendations */}
        <Card title="AI Recommendations">
          <Rec icon={<FiTruck />} text="Reroute Shipment X" />
          <Rec icon={<FiEdit3 />} text="Adjust Stock for SKU-YZ" />
        </Card>

        {/* Risk Alerts */}
        <Card title="Proactive Risk Alerts">
          <Risk text="Supplier Shortage Risk" />
          <Risk text="Port Congestion Alert" yellow />
          <Risk text="Critical Stock Low" />
        </Card>
      </section>
    </main>
  );
}

/* ---------------- Components ---------------- */

function Metric({ title, value }: any) {
  return (
    <div className="bg-[#162B4A]/50 p-6 rounded-xl border border-white/10">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="bg-[#162B4A]/50 p-6 rounded-xl border border-white/10 space-y-4">
      <h3 className="text-sm text-gray-300">{title}</h3>
      {children}
    </div>
  );
}

function Rec({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
      <div className="text-cyan-400">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function Risk({ text, yellow }: any) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-400">
      <FiAlertCircle className={yellow ? "text-yellow-400" : "text-red-500"} />
      {text}
    </div>
  );
}
