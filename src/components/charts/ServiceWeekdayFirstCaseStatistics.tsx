"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/components/ui/data-table"

import { Button } from "../ui/button"

interface FirstCaseSummary {
  scheduled_service: string
  fc_count: number
  "Pct FCOS": number
}

const visualizationData = [
  {
    scheduled_service: "Anesthesiology",
    fc_count: 1,
    "Pct FCOS": 100.0,
  },
  {
    scheduled_service: "Colorectal",
    fc_count: 2,
    "Pct FCOS": 50.0,
  },
  {
    scheduled_service: "Gen",
    fc_count: 1,
    "Pct FCOS": 100.0,
  },
  {
    scheduled_service: "General",
    fc_count: 10,
    "Pct FCOS": 90.0,
  },
  {
    scheduled_service: "Gynecology",
    fc_count: 5,
    "Pct FCOS": 100.0,
  },
  {
    scheduled_service: "Hand",
    fc_count: 1,
    "Pct FCOS": 0.0,
  },
  {
    scheduled_service: "Ophthalmology",
    fc_count: 14,
    "Pct FCOS": 85.71428571428571,
  },
  {
    scheduled_service: "Orthopedics",
    fc_count: 8,
    "Pct FCOS": 62.5,
  },
  {
    scheduled_service: "Otorhinolaryngology",
    fc_count: 5,
    "Pct FCOS": 20.0,
  },
  {
    scheduled_service: "Plastic",
    fc_count: 5,
    "Pct FCOS": 40.0,
  },
  {
    scheduled_service: "Podiatry",
    fc_count: 5,
    "Pct FCOS": 40.0,
  },
  {
    scheduled_service: "Urology",
    fc_count: 3,
    "Pct FCOS": 66.66666666666666,
  },
  {
    scheduled_service: "Vascular",
    fc_count: 9,
    "Pct FCOS": 55.55555555555556,
  },
]

const columns: ColumnDef<FirstCaseSummary>[] = [
  {
    accessorKey: "scheduled_service",
    header: ({ column }) => (
      <Button
        className="bg-transparent"
        variant="invisible"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Service
      </Button>
    ),
    cell: (info) => {
      return info.getValue()
    },
  },
  {
    accessorKey: "fc_count",
    header: ({ column }) => (
      <Button
        className="bg-transparent"
        variant="invisible"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        "First Case Count"
      </Button>
    ),
  },
  {
    accessorKey: "Pct FCOS",
    header: "% First Caes On Time",
    cell: (info) => {
      //   type: "barChartColumn",
      // maxBar: 100,
      // cell: (info: { getValue: () => number | string }) => {
      const value = info.getValue()
      return typeof value === "number" ? `${Math.round(value)}%` : value
    },
  },
]

export default function ServiceWeekdayFirstCaseStatsTable() {
  return (
    <DataTable
      title="Service Weekday First Case Statistics"
      subtitle=""
      columns={columns}
      data={visualizationData}
    />
  )
}
