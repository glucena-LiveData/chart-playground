"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"


const chartData = [
  { "month": "January", "desktop": 186, "mobile": 80 },
  { "month": "February", "desktop": 305, "mobile": 200 },
  { "month": "March", "desktop": 237, "mobile": 120 },
  {"month": "April", "desktop": 73, "mobile": 190 },
  { "month": "May", "desktop": 209, "mobile": 130 },
  { "month": "June", "desktop": 214, "mobile": 140 },
]

const chartConfig = {
  desktop: {
    label: "Type A",
    color: "#2563eb",
  },
  mobile: {
    label: "Type B",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function App() {
  return (
  <div className="visualization-container">
    <h1 className="chart-title">Sample Bar Chart</h1>
    <div className="live-data-bar-chart">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-fit">
        <BarChart width={300} height={200} accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0,3)}
          />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  </div>
)
}

