import { AreaGraph, ChartConfig } from "../ui/area-graph"

const chartData = [
  {
    case_year: 2024,
    case_month: 1,
    "Pct FCOS": 74.52229299363057,
  },
  {
    case_year: 2024,
    case_month: 2,
    "Pct FCOS": 72.53521126760563,
  },
  {
    case_year: 2024,
    case_month: 3,
    "Pct FCOS": 86.70886075949366,
  },
  {
    case_year: 2024,
    case_month: 4,
    "Pct FCOS": 83.43558282208589,
  },
  {
    case_year: 2024,
    case_month: 5,
    "Pct FCOS": 71.42857142857143,
  },
  {
    case_year: 2024,
    case_month: 6,
    "Pct FCOS": 83.33333333333334,
  },
  {
    case_year: 2024,
    case_month: 7,
    "Pct FCOS": 75.28089887640449,
  },
  {
    case_year: 2024,
    case_month: 8,
    "Pct FCOS": 78.125,
  },
  {
    case_year: 2024,
    case_month: 9,
    "Pct FCOS": 76.85185185185185,
  },
  {
    case_year: 2024,
    case_month: 10,
    "Pct FCOS": 80.64516129032258,
  },
  {
    case_year: 2024,
    case_month: 11,
    "Pct FCOS": 67.08074534161491,
  },
  {
    case_year: 2024,
    case_month: 12,
    "Pct FCOS": 66.66666666666666,
  },
]

const chartConfig: ChartConfig = {
  x_axis: {
    label: "Month of Room In",
    dataKey: "case_month",
    formatter: (value: string) => value, //format with date-fns,
  },
  y_axis: {
    label: "% of First Case On-Time Starts",
    dataKey: "Pct FCOS",
    formatter: (value: string) => `% of First Case On-Time Starts: ${value}%`,
    tickFormatter: (value: string) => `${value}%`,
    color: "#0096DD",
  },
}

export default function PercentFCOS() {
  return (
    <AreaGraph
      title="% of FCOS"
      subtitle="(< 0 Minutes Delay)"
      data={chartData}
      chartConfig={chartConfig}
    />
  )
}
