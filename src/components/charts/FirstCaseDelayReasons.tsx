import { ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/components/ui/data-table"

import { Button } from "../ui/button"

interface FirstCaseDelayReasons {
  delay_reason: string
  fc_count: number
  minutes_delay: number
}

const visualizationData: FirstCaseDelayReasons[] = [
  {
    delay_reason: "None",
    fc_count: 7,
    minutes_delay: 10.0,
  },
  {
    delay_reason: "ANESTHESIA NOT AVAILABLE",
    fc_count: 2,
    minutes_delay: 13.0,
  },
  {
    delay_reason: "ANESTHESIA PRE-OP NOTE",
    fc_count: 1,
    minutes_delay: 10.0,
  },
  {
    delay_reason: "ATTENDING SURGEON NOTE NEEDED",
    fc_count: 3,
    minutes_delay: 14.0,
  },
  {
    delay_reason: "CONSENT NOT COMPLETED",
    fc_count: 3,
    minutes_delay: 12.0,
  },
  {
    delay_reason: "LAB RESULTS",
    fc_count: 1,
    minutes_delay: 97.0,
  },
  {
    delay_reason: "ORDERS NOT AVAILABLE",
    fc_count: 1,
    minutes_delay: 34.0,
  },
  {
    delay_reason: "PATIENT HAS CONCERNS",
    fc_count: 1,
    minutes_delay: 29.0,
  },
  {
    delay_reason: "PREOP UNIT DELAY",
    fc_count: 1,
    minutes_delay: 3.0,
  },
  {
    delay_reason: "ROOM NOT READY",
    fc_count: 2,
    minutes_delay: 7.5,
  },
  {
    delay_reason: "VENDOR NOT AVAILABLE",
    fc_count: 1,
    minutes_delay: 10.0,
  },
]

const columns: ColumnDef<FirstCaseDelayReasons>[] = [
  {
    accessorKey: "delay_reason",
    header: ({ column }) => (
      <Button
        className="bg-transparent"
        variant="invisible"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Delay Reasons
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
        First Case Count
      </Button>
    ),
  },
  {
    accessorKey: "minutes_delay",
    header: "Median Minutes Delayed By",
    // type: "barChartColumn",
    // maxBar: Math.max(...visualizationData.map((d) => d["PctFCOS"])),
    // cell: (info: { getValue: () => number | string }) => {
    //   const value = info.getValue()
    //   return typeof value === "number" ? Math.round(value) : value
    // },
    cell: (info) => {
      const value = info.getValue()
      return typeof value === "number" ? Math.round(value) : value
    },
  },
]

export default function FirstCaseDelayReasonsTable() {
  return (
    <DataTable
      title="First Case Delay Reasons"
      subtitle=""
      columns={columns}
      data={visualizationData}
    />
  )
}
