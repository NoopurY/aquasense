"use client";

import { memo, useMemo } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { HeatmapChart } from "@/components/ui/HeatmapChart";

type DailyPoint = {
  day: string;
  liters: number;
};

type Props = {
  dailyUsage: DailyPoint[];
  slabDistribution: { name: string; value: number }[];
  averageFlow?: number;
};

const slabColors = ["#00e5ff", "#1e90ff", "#ffb300"];

function innerFormatter(value: number | string | undefined): string {
  const numericValue = typeof value === "number" ? value : Number(value ?? 0);
  return `Rs ${numericValue.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function buildHourlySeries() {
  return [
    { t: "06:00", flow: 1.2 },
    { t: "08:00", flow: 3.1 },
    { t: "10:00", flow: 2.2 },
    { t: "12:00", flow: 2.6 },
    { t: "14:00", flow: 1.8 },
    { t: "16:00", flow: 2.0 },
    { t: "18:00", flow: 3.7 },
    { t: "20:00", flow: 2.9 },
    { t: "22:00", flow: 1.7 }
  ];
}

function DashboardChartsImpl({ dailyUsage, slabDistribution, averageFlow = 2.1 }: Props) {
  const hourlyPreview = useMemo(() => buildHourlySeries(), []);

  const enhancedDaily = useMemo(
    () =>
      dailyUsage.map((point) => ({
        ...point,
        intensity: point.liters > 400 ? "high" : point.liters > 250 ? "mid" : "low"
      })),
    [dailyUsage]
  );

  const totalBill = useMemo(() => slabDistribution.reduce((sum, item) => sum + item.value, 0), [slabDistribution]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="glass-card lg:col-span-2">
        <h3 className="mb-4 text-xl font-semibold text-[var(--text-bright)]">Flow Rate Command Stream</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <AreaChart data={hourlyPreview}>
              <CartesianGrid stroke="rgba(131, 232, 255, 0.12)" strokeDasharray="4 6" />
              <XAxis dataKey="t" stroke="#8bc8ff" tickLine={false} />
              <YAxis stroke="#8bc8ff" tickLine={false} />
              <ReferenceLine label="Avg 2.1" stroke="#9fdcff" strokeDasharray="4 4" y={averageFlow} />
              <Tooltip
                contentStyle={{
                  border: "1px solid rgba(122,236,255,0.3)",
                  borderRadius: "12px",
                  background: "#020f27"
                }}
              />
              <defs>
                <linearGradient id="flowGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="#00e5ff" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area dataKey="flow" fill="url(#flowGradient)" stroke="#45efff" strokeWidth={3} type="monotone" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="glass-card">
        <h3 className="mb-4 text-xl font-semibold text-[var(--text-bright)]">Bill Distribution Donut</h3>
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
                animationDuration={850}
                labelLine={false}
                label
              >
                {slabDistribution.map((entry, index) => (
                  <Cell fill={slabColors[index % slabColors.length]} key={entry.name} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => innerFormatter(value)} />
              <Legend />
              <text x="50%" y="49%" textAnchor="middle" fill="#9fdcff" fontSize={12}>
                TOTAL
              </text>
              <text x="50%" y="56%" textAnchor="middle" fill="#00e5ff" fontSize={18} fontWeight={700}>
                {innerFormatter(totalBill)}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="glass-card lg:col-span-3">
        <h3 className="mb-4 text-xl font-semibold text-[var(--text-bright)]">Daily Water Usage Trend</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <BarChart data={enhancedDaily}>
              <CartesianGrid stroke="rgba(131, 232, 255, 0.1)" strokeDasharray="4 6" />
              <XAxis dataKey="day" minTickGap={18} stroke="#8bc8ff" />
              <YAxis stroke="#8bc8ff" />
              <ReferenceLine label="Target" stroke="#ffb300" strokeDasharray="4 4" y={200} />
              <Tooltip
                contentStyle={{
                  border: "1px solid rgba(122,236,255,0.3)",
                  borderRadius: "12px",
                  background: "#020f27"
                }}
              />
              <Bar animationDuration={900} dataKey="liters" fill="url(#barGlow)" radius={[10, 10, 0, 0]} />
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

      <section className="lg:col-span-3">
        <HeatmapChart />
      </section>
    </div>
  );
}

export const DashboardCharts = memo(DashboardChartsImpl);
