import { AreaGraph, ChartConfig } from "./../ui/area-graph"

const chartData = [
  {
    case_year: 2024,
    case_month: 1,
    "Late Start Case Count": 40,
  },
  {
    case_year: 2024,
    case_month: 2,
    "Late Start Case Count": 39,
  },
  {
    case_year: 2024,
    case_month: 3,
    "Late Start Case Count": 21,
  },
  {
    case_year: 2024,
    case_month: 4,
    "Late Start Case Count": 27,
  },
  {
    case_year: 2024,
    case_month: 5,
    "Late Start Case Count": 58,
  },
  {
    case_year: 2024,
    case_month: 6,
    "Late Start Case Count": 30,
  },
  {
    case_year: 2024,
    case_month: 7,
    "Late Start Case Count": 44,
  },
  {
    case_year: 2024,
    case_month: 8,
    "Late Start Case Count": 35,
  },
  {
    case_year: 2024,
    case_month: 9,
    "Late Start Case Count": 25,
  },
  {
    case_year: 2024,
    case_month: 10,
    "Late Start Case Count": 18,
  },
  {
    case_year: 2024,
    case_month: 11,
    "Late Start Case Count": 53,
  },
  {
    case_year: 2024,
    case_month: 12,
    "Late Start Case Count": 23,
  },
]

const chartConfig: ChartConfig = {
  x_axis: {
    label: "Month of Room In",
    dataKey: "case_month",
    formatter: (value: string) => value, //getShortMonth(value),
  },
  y_axis: {
    label: "Late Start Case Count",
    formatter: (value: string) => `Late Start Case Count: ${value}`,
    dataKey: "Late Start Case Count",
    color: "#1B41FF",
  },
}

export default function LateStartCaseCounts() {
  return (
    <AreaGraph
      title="Late Start Case Counts"
      subtitle=""
      data={chartData}
      chartConfig={chartConfig}
    />
  )
}
