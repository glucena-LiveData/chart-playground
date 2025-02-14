import { format } from "date-fns"

import { getMaxCeiledValue, getMinFlooredValue } from "@/lib/utils"

import { AreaGraph } from "./../ui/area-graph"

interface LateStartCaseCounts {
  caseYear: number
  caseMonth: number
  caseCount: number
}

const data: LateStartCaseCounts[] = [
  {
    caseYear: 2024,
    caseMonth: 1,
    caseCount: 40,
  },
  {
    caseYear: 2024,
    caseMonth: 2,
    caseCount: 39,
  },
  {
    caseYear: 2024,
    caseMonth: 3,
    caseCount: 21,
  },
  {
    caseYear: 2024,
    caseMonth: 4,
    caseCount: 27,
  },
  {
    caseYear: 2024,
    caseMonth: 5,
    caseCount: 58,
  },
  {
    caseYear: 2024,
    caseMonth: 6,
    caseCount: 30,
  },
  {
    caseYear: 2024,
    caseMonth: 7,
    caseCount: 44,
  },
  {
    caseYear: 2024,
    caseMonth: 8,
    caseCount: 35,
  },
  {
    caseYear: 2024,
    caseMonth: 9,
    caseCount: 25,
  },
  {
    caseYear: 2024,
    caseMonth: 10,
    caseCount: 18,
  },
  {
    caseYear: 2024,
    caseMonth: 11,
    caseCount: 53,
  },
  {
    caseYear: 2024,
    caseMonth: 12,
    caseCount: 23,
  },
]

export function LateStartCaseCounts() {
  const maxY = getMaxCeiledValue(data, "caseCount")
  const minY = getMinFlooredValue(data, "caseCount")

  const label = (value: unknown) => {
    return `Late Start Case Count: ${value}`
  }

  return (
    <AreaGraph
      className="w-[700px]"
      title="Late Start Case Counts"
      data={data}
      configuration={{
        label: label,
        x: {
          key: "caseMonth",
          color: "#1B41FF",
          formatter: (value) => {
            const date = new Date()

            date.setMonth((value as number) - 1)

            return format(date, "MMM")
          },
        },
        y: {
          key: "caseCount",
          color: "#1B41FF",
          max: maxY,
          min: minY,
          formatter: (value) => `${value}`,
        },
      }}
    />
  )
}
