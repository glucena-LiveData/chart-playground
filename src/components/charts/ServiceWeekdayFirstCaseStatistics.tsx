"use client"

import { ColumnDef } from "@tanstack/react-table"

import { addSortButton } from "@/lib/functional-utils.tsx"
import { DataTable } from "@/components/ui/data-table"

interface FirstCaseSummary {
  scheduled_service: string
  "FC Count": number
  "Pct FCOS": number
}

type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  type?: string
  maxBar?: number
}

const visualizationData = [
  {
    scheduled_service: "Anesthesiology",
    "FC Count": 1,
    "Pct FCOS": 100.0,
  },
  {
    scheduled_service: "Colorectal",
    "FC Count": 2,
    "Pct FCOS": 50.0,
  },
  {
    scheduled_service: "Gen",
    "FC Count": 1,
    "Pct FCOS": 100.0,
  },
  {
    scheduled_service: "General",
    "FC Count": 10,
    "Pct FCOS": 90.0,
  },
  {
    scheduled_service: "Gynecology",
    "FC Count": 5,
    "Pct FCOS": 100.0,
  },
  {
    scheduled_service: "Hand",
    "FC Count": 1,
    "Pct FCOS": 0.0,
  },
  {
    scheduled_service: "Ophthalmology",
    "FC Count": 14,
    "Pct FCOS": 85.71428571428571,
  },
  {
    scheduled_service: "Orthopedics",
    "FC Count": 8,
    "Pct FCOS": 62.5,
  },
  {
    scheduled_service: "Otorhinolaryngology",
    "FC Count": 5,
    "Pct FCOS": 20.0,
  },
  {
    scheduled_service: "Plastic",
    "FC Count": 5,
    "Pct FCOS": 40.0,
  },
  {
    scheduled_service: "Podiatry",
    "FC Count": 5,
    "Pct FCOS": 40.0,
  },
  {
    scheduled_service: "Urology",
    "FC Count": 3,
    "Pct FCOS": 66.66666666666666,
  },
  {
    scheduled_service: "Vascular",
    "FC Count": 9,
    "Pct FCOS": 55.55555555555556,
  },
]

const columns: CustomColumnDef<FirstCaseSummary, any>[] = [
  {
    accessorKey: "scheduled_service",
    header: ({ column }) => {
      return addSortButton(column, "Service")
    },
    cell: (info) => {
      return info.getValue()
    },
  },
  {
    accessorKey: "FC Count",
    header: ({ column }) => {
      return addSortButton(column, "First Case Count")
    },
  },
  {
    accessorKey: "Pct FCOS",
    header: "% First Caes On Time",
    type: "barChartColumn",
    maxBar: 100,
    cell: (info: { getValue: () => number | string }) => {
      const value = info.getValue()
      return typeof value === "number" ? `${Math.round(value)}%` : value
    },
  },
]

export default function ServiceWeekdayFirstCaseStatsTable() {
  return (
    <DataTable
      title="Service Weekday First Case Statistics"
      columns={columns}
      data={visualizationData}
    />
  )
}
