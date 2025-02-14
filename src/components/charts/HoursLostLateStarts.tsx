"use client"

import { format } from "date-fns"

import { getMaxCeiledValue, getMinFlooredValue } from "@/lib/utils"

import { AreaGraph, ChartConfig } from "../ui/area-graph"

interface HoursLostLateStarts {
  caseYear: number
  caseMonth: number
  percent: number
  caseCount: number
  hoursLost: number
}

const data = [
  {
    caseYear: 2024,
    caseMonth: 1,
    percent: 74.52229299363057,
    caseCount: 40,
    hoursLost: 14.616666666666667,
  },
  {
    caseYear: 2024,
    caseMonth: 2,
    percent: 72.53521126760563,
    caseCount: 39,
    hoursLost: 15.683333333333334,
  },
  {
    caseYear: 2024,
    caseMonth: 3,
    percent: 86.70886075949366,
    caseCount: 21,
    hoursLost: 6.683333333333334,
  },
  {
    caseYear: 2024,
    caseMonth: 4,
    percent: 83.43558282208589,
    caseCount: 27,
    hoursLost: 5.25,
  },
  {
    caseYear: 2024,
    caseMonth: 5,
    percent: 71.42857142857143,
    caseCount: 58,
    hoursLost: 20.033333333333335,
  },
  {
    caseYear: 2024,
    caseMonth: 6,
    percent: 83.33333333333334,
    caseCount: 30,
    hoursLost: 9.65,
  },
  {
    caseYear: 2024,
    caseMonth: 7,
    percent: 75.28089887640449,
    caseCount: 44,
    hoursLost: 18.75,
  },
  {
    caseYear: 2024,
    caseMonth: 8,
    percent: 78.125,
    caseCount: 35,
    hoursLost: 8.4,
  },
  {
    caseYear: 2024,
    caseMonth: 9,
    percent: 76.85185185185185,
    caseCount: 25,
    hoursLost: 10.616666666666667,
  },
  {
    caseYear: 2024,
    caseMonth: 10,
    percent: 80.64516129032258,
    caseCount: 18,
    hoursLost: 8.5,
  },
  {
    caseYear: 2024,
    caseMonth: 11,
    percent: 67.08074534161491,
    caseCount: 53,
    hoursLost: 16.15,
  },
  {
    caseYear: 2024,
    caseMonth: 12,
    percent: 66.66666666666666,
    caseCount: 23,
    hoursLost: 6.166666666666667,
  },
]

const chartConfig: ChartConfig = {
  x_axis: {
    label: "Month of Room In",
    dataKey: "caseMonth",
    formatter: (value) => {
      const date = new Date()

      date.setMonth((value as number) - 1)

      return format(date, "MMM")
    },
  },
  y_axis: {
    label: "Hours Lost to First Case Late Starts",
  },
}

export function HoursLostLateStarts() {
  const maxY = getMaxCeiledValue(data, "hoursLost")
  const minY = getMinFlooredValue(data, "hoursLost")

  const label = (value: unknown) => {
    return `Hours Lost to First Case Late Starts: ${value}`
  }

  return (
    <AreaGraph
      className="w-[700px]"
      title="Hours Lost to First Case Late Starts"
      data={data}
      configuration={{
        label,
        x: {
          key: "caseMonth",
          color: "#00AC72",
          formatter: (value) => {
            const date = new Date()

            date.setMonth((value as number) - 1)

            return format(date, "MMM")
          },
        },
        y: {
          key: "hoursLost",
          color: "#00AC72",
          min: minY,
          max: maxY,
          formatter: (value: unknown) => `${value}`,
        },
      }}
    />
  )
}
