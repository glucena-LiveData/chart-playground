import { format } from "date-fns"

import { AreaGraph } from "../ui/area-graph"

interface PercentFCOS {
  caseYear: number
  caseMonth: number
  percent: number
}

const data: PercentFCOS[] = [
  {
    caseYear: 2024,
    caseMonth: 1,
    percent: 74.52229299363057,
  },
  {
    caseYear: 2024,
    caseMonth: 2,
    percent: 72.53521126760563,
  },
  {
    caseYear: 2024,
    caseMonth: 3,
    percent: 86.70886075949366,
  },
  {
    caseYear: 2024,
    caseMonth: 4,
    percent: 83.43558282208589,
  },
  {
    caseYear: 2024,
    caseMonth: 5,
    percent: 71.42857142857143,
  },
  {
    caseYear: 2024,
    caseMonth: 6,
    percent: 83.33333333333334,
  },
  {
    caseYear: 2024,
    caseMonth: 7,
    percent: 75.28089887640449,
  },
  {
    caseYear: 2024,
    caseMonth: 8,
    percent: 78.125,
  },
  {
    caseYear: 2024,
    caseMonth: 9,
    percent: 76.85185185185185,
  },
  {
    caseYear: 2024,
    caseMonth: 10,
    percent: 80.64516129032258,
  },
  {
    caseYear: 2024,
    caseMonth: 11,
    percent: 67.08074534161491,
  },
  {
    caseYear: 2024,
    caseMonth: 12,
    percent: 66.66666666666666,
  },
]

export function PercentFCOS() {
  const maxY = Math.ceil(Math.max(...data.map((d) => d.percent)) / 10) * 10
  let minY = Math.floor(Math.min(...data.map((d) => d.percent)) / 10) * 10 - 10
  minY = minY < 0 ? 0 : minY

  const label = (value: unknown) => {
    return `% of First Case On-Time Starts: ${Number(value).toFixed(2)}%`
  }

  return (
    <AreaGraph
      className="w-[700px]"
      title="% of FCOS"
      subtitle="(< 0 Minutes Delay)"
      data={data}
      configuration={{
        label: label,
        x: {
          dataKey: "caseMonth",
          color: "#7B71FA",
          formatter: (value) => {
            const date = new Date()

            date.setMonth((value as number) - 1)

            return format(date, "MMM")
          },
        },
        y: {
          dataKey: "percent",
          color: "#7B71FA",
          max: maxY,
          min: minY,
          formatter: (value) => `${value}%`,
        },
      }}
    />
  )
}
