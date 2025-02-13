"use client"

import { LineChartConfig } from "@/types/chart-config"
import { getShortMonth } from "@/lib/enumerations"

import { AreaGraph } from "../ui/area-graph"

const chartData = [
  {
    case_year: 2024,
    case_month: 1,
    "Pct FCOS": 74.52229299363057,
    "FC Delayed Case Count": 40,
    "Total Hours Lost": 14.616666666666667,
  },
  {
    case_year: 2024,
    case_month: 2,
    "Pct FCOS": 72.53521126760563,
    "FC Delayed Case Count": 39,
    "Total Hours Lost": 15.683333333333334,
  },
  {
    case_year: 2024,
    case_month: 3,
    "Pct FCOS": 86.70886075949366,
    "FC Delayed Case Count": 21,
    "Total Hours Lost": 6.683333333333334,
  },
  {
    case_year: 2024,
    case_month: 4,
    "Pct FCOS": 83.43558282208589,
    "FC Delayed Case Count": 27,
    "Total Hours Lost": 5.25,
  },
  {
    case_year: 2024,
    case_month: 5,
    "Pct FCOS": 71.42857142857143,
    "FC Delayed Case Count": 58,
    "Total Hours Lost": 20.033333333333335,
  },
  {
    case_year: 2024,
    case_month: 6,
    "Pct FCOS": 83.33333333333334,
    "FC Delayed Case Count": 30,
    "Total Hours Lost": 9.65,
  },
  {
    case_year: 2024,
    case_month: 7,
    "Pct FCOS": 75.28089887640449,
    "FC Delayed Case Count": 44,
    "Total Hours Lost": 18.75,
  },
  {
    case_year: 2024,
    case_month: 8,
    "Pct FCOS": 78.125,
    "FC Delayed Case Count": 35,
    "Total Hours Lost": 8.4,
  },
  {
    case_year: 2024,
    case_month: 9,
    "Pct FCOS": 76.85185185185185,
    "FC Delayed Case Count": 25,
    "Total Hours Lost": 10.616666666666667,
  },
  {
    case_year: 2024,
    case_month: 10,
    "Pct FCOS": 80.64516129032258,
    "FC Delayed Case Count": 18,
    "Total Hours Lost": 8.5,
  },
  {
    case_year: 2024,
    case_month: 11,
    "Pct FCOS": 67.08074534161491,
    "FC Delayed Case Count": 53,
    "Total Hours Lost": 16.15,
  },
  {
    case_year: 2024,
    case_month: 12,
    "Pct FCOS": 66.66666666666666,
    "FC Delayed Case Count": 23,
    "Total Hours Lost": 6.166666666666667,
  },
]

const chartConfig = {
  x_axis: {
    label: "Month of Room In",
    data_key: "case_month",
    formatter: (value: number) => getShortMonth(value),
  },
  y_axis: {
    label: "Hours Lost to First Case Late Starts",
    formatter: (value: number) =>
      `Hours Lost to First Case Late Starts: ${value}`,
    dataKey: "Total Hours Lost",
    color: "#00AC72",
  },
} satisfies LineChartConfig

export default function HoursLostLateStarts() {
  return (
    <AreaGraph
      title="Hours Lost to First Case Late Starts"
      data={chartData}
      chartConfig={chartConfig}
    />
  )
}
