"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

type DailyPoint = {
  day: string;
  liters: number;
};

type Props = {
  dailyUsage: DailyPoint[];
  slabDistribution: { name: string; value: number }[];
};

export function DashboardCharts({ dailyUsage, slabDistribution }: Props) {
  const hourlyPreview = [
    { t: "09:00", flow: 1.8 },
    { t: "10:00", flow: 2.4 },
    { t: "11:00", flow: 2.1 },
    { t: "12:00", flow: 3.2 },
    { t: "13:00", flow: 2.9 },
    { t: "14:00", flow: 3.5 }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="glass-card lg:col-span-2">
        <h3 className="mb-4 text-xl font-semibold text-white">Flow Pattern · Last Hour</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <LineChart data={hourlyPreview}>
              <CartesianGrid stroke="rgba(131, 232, 255, 0.12)" strokeDasharray="4 6" />
              <XAxis dataKey="t" stroke="#8bc8ff" />
              <YAxis stroke="#8bc8ff" />
              <Tooltip
                contentStyle={{
                  border: "1px solid rgba(122,236,255,0.3)",
                  borderRadius: "12px",
                  background: "#020f27"
                }}
              />
              <Line dataKey="flow" dot={false} stroke="#45efff" strokeWidth={3} type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="glass-card">
        <h3 className="mb-4 text-xl font-semibold text-white">Monthly Slab Distribution</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={slabDistribution}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={94}
                fill="#45efff"
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="glass-card lg:col-span-3">
        <h3 className="mb-4 text-xl font-semibold text-white">Daily Water Usage Trend</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <BarChart data={dailyUsage}>
              <CartesianGrid stroke="rgba(131, 232, 255, 0.1)" strokeDasharray="4 6" />
              <XAxis dataKey="day" minTickGap={18} stroke="#8bc8ff" />
              <YAxis stroke="#8bc8ff" />
              <Tooltip
                contentStyle={{
                  border: "1px solid rgba(122,236,255,0.3)",
                  borderRadius: "12px",
                  background: "#020f27"
                }}
              />
              <Bar dataKey="liters" fill="url(#barGlow)" radius={[10, 10, 0, 0]} />
              <defs>
                <linearGradient id="barGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#74f5ff" stopOpacity={0.95} />
                  <stop offset="95%" stopColor="#106dd9" stopOpacity={0.55} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
