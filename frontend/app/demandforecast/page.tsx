"use client";

import { useState } from "react";
import {
    LayoutDashboard,
    Boxes,
    BarChart3,
    Settings,
    Truck,
    Store,
    X,
    } from "lucide-react";
    import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    } from "recharts";

    /* ================= SAMPLE DATA ================= */
    const forecastData = {
        "All categories": [
            { month: "Jul", actual: 300, predicted: 280 },
            { month: "Aug", actual: 350, predicted: 340 },
            { month: "Sep", actual: 420, predicted: 410 },
            { month: "Oct", actual: 460, predicted: 440 },
            { month: "Nov", actual: 520, predicted: 500 },
            { month: "Dec", actual: 600, predicted: 580 },
        ],
    T_shirt: [
        { month: "Jul", actual: 420, predicted: 400 },
        { month: "Aug", actual: 500, predicted: 470 },
        { month: "Sep", actual: 610, predicted: 590 },
        { month: "Oct", actual: 560, predicted: 540 },
        { month: "Nov", actual: 700, predicted: 670 },
        { month: "Dec", actual: 820, predicted: 780 },
    ],
    "Dress": [
        { month: "Jul", actual: 300, predicted: 280 },
        { month: "Aug", actual: 350, predicted: 340 },
        { month: "Sep", actual: 420, predicted: 410 },
        { month: "Oct", actual: 460, predicted: 440 },
        { month: "Nov", actual: 520, predicted: 500 },
        { month: "Dec", actual: 600, predicted: 580 },
    ],
    "Trousers": [
        { month: "Jul", actual: 200, predicted: 210 },
        { month: "Aug", actual: 260, predicted: 250 },
        { month: "Sep", actual: 310, predicted: 300 },
        { month: "Oct", actual: 390, predicted: 370 },
        { month: "Nov", actual: 450, predicted: 430 },
        { month: "Dec", actual: 520, predicted: 500 },
    ],
    };

    /* ================= PAGE ================= */
    export default function DemandForecastingPage() {
    const categories = Object.keys(forecastData);
    const [selectedCategory, setSelectedCategory] = useState("Electronics");
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#050B1A] text-white flex">
        {/* Sidebar */}
        <aside className="w-[90px] bg-[#070F24] border-r border-white/10 flex flex-col items-center py-6 gap-8">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <Truck className="text-cyan-400" />
            </div>
            <a rel="stylesheet" href="/dashboard" >
            <SidebarIcon icon={<LayoutDashboard size={20} />} label="Dashboard" />
            </a>
            <SidebarIcon icon={<Boxes size={20} />} label="Inventory" />
            <SidebarIcon icon={<BarChart3 size={20} />} label="Demand" active />
            <SidebarIcon icon={<Store size={20} />} label="Market" />
            <SidebarIcon icon={<Settings size={20} />} label="Settings" />
            <div className="mt-auto w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500/20 transition" />
        </aside>

        {/* Filter Panel */}
        <section className="w-[340px] bg-[#070F24] border-r border-white/10 p-6 flex flex-col">
 


            {/* Predictive Parameters */}
            <h2 className="text-xs tracking-widest text-white/50 mb-6 uppercase">
            Predictive Parameters
            </h2>

            <p className="text-sm text-white/70 mb-3">Confidence Interval</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-cyan-400 rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-white/40 mt-2">
            <span>80%</span>
            <span>95%</span>
            <span>99%</span>
            </div>

            {/* Toggles */}
            <div className="mt-8 space-y-5">
            <Toggle label="Seasonal Adjustment" enabled />
            <Toggle label="Market Volatility" />
            </div>

            {/* New Forecast Button */}
            <button
            onClick={() => setModalOpen(true)}
            className="mt-auto w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
            + New Forecast
            </button>
        </section>

        {/* Main Dashboard */}
        <main className="flex-1 p-10">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Demand Forecasting</h1>
                <p className="text-white/60">
                Showing data for:{" "}
                <span className="text-cyan-400 font-semibold">
                    {selectedCategory}
                </span>
                </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
                {["7D", "1M", "3M", "1Y"].map((t) => (
                <button
                    key={t}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                    {t}
                </button>
                ))}

                <button className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition">
                Export Report
                </button>
            </div>
            </div>

            {/* Chart */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold mb-2">
                Actual vs Predicted Inventory Demand
            </h2>
            <p className="text-sm text-white/50 mb-6">
                Aggregate data across SKUs
            </p>

            <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData[selectedCategory]}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#ffffff15" />
                    <XAxis dataKey="month" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip />
                    <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#22d3ee"
                    strokeWidth={3}
                    dot={false}
                    />
                    <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#94a3b8"
                    strokeWidth={2}
                    strokeDasharray="6 6"
                    dot={false}
                    />
                </LineChart>
                </ResponsiveContainer>
            </div>
            </section>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-6">
            <Card title="Forecast Accuracy" value="94.2%" subtitle="Model v4.2" />
            <Card title="Expected Growth" value="+12.5%" subtitle="Volume Trend" />
            <Card title="Stockout Risk Items" value="12 SKUs" subtitle="3 Critical" danger />
            </div>
        </main>

        {/* Modal */}
        {modalOpen && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-[#070F24] border border-white/10 rounded-2xl p-8 w-[420px] relative">
                <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                <X />
                </button>
                <h2 className="text-xl font-bold mb-6">Create New Forecast</h2>
                <p className="text-white/60 text-sm mb-4">Select category to display in chart:</p>
                <div className="space-y-3">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => {
                        setSelectedCategory(cat);
                        setModalOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-black transition"
                    >
                    {cat}
                    </button>
                ))}
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }

    /* ================= Components ================= */
    function SidebarIcon({ icon, label, active }) {
    return (
        <div
        className={`flex flex-col items-center gap-1 text-xs cursor-pointer transition ${
            active ? "text-cyan-400" : "text-white/60 hover:text-white"
        }`}
        >
        {icon}
        <span>{label}</span>
        </div>
    );
    }

    function CategoryButton({ title, active, onClick }) {
    return (
        <button
        onClick={onClick}
        className={`w-full text-left px-4 py-3 rounded-xl transition ${
            active
            ? "bg-cyan-400 text-black font-semibold"
            : "bg-white/5 text-white/70 hover:border hover:border-cyan-400"
        }`}
        >
        {title}
        </button>
    );
    }

    function Toggle({ label, enabled }) {
    return (
        <div className="flex justify-between items-center">
        <span className="text-sm text-white/70">{label}</span>
        <div
            className={`w-11 h-6 rounded-full px-1 flex items-center transition ${
            enabled ? "bg-cyan-400" : "bg-white/20"
            }`}
        >
            <div
            className={`w-4 h-4 bg-white rounded-full transition ${
                enabled ? "translate-x-5" : ""
            }`}
            />
        </div>
        </div>
    );
    }

    function Card({ title, value, subtitle, danger }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 transition">
        <p className="text-sm text-white/50">{title}</p>
        <h2 className={`text-3xl font-bold mt-3 ${danger ? "text-red-400" : "text-white"}`}>
            {value}
        </h2>
        <p className="text-xs text-white/40 mt-2">{subtitle}</p>
        </div>
    );
    }