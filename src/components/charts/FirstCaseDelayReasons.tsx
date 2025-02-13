"use client"

import { ColumnDef } from "@tanstack/react-table"

import { addSortButton } from "@/lib/functional-utils.tsx"
import { DataTable } from "@/components/ui/data-table"

interface FirstCaseDelayReasons {
  delay_reason: string
  fc_count: number
  minutes_delay: number
}


const visualizationData = [
  {
    ehr_delay_reasons: "None",
    "FC Count": 7,
    "Median Actual Minutes Case": 10.0,
  },
  {
    ehr_delay_reasons: "ANESTHESIA NOT AVAILABLE",
    "FC Count": 2,
    "Median Actual Minutes Case": 13.0,
  },
  {
    ehr_delay_reasons: "ANESTHESIA PRE-OP NOTE",
    "FC Count": 1,
    "Median Actual Minutes Case": 10.0,
  },
  {
    ehr_delay_reasons: "ATTENDING SURGEON NOTE NEEDED",
    "FC Count": 3,
    "Median Actual Minutes Case": 14.0,
  },
  {
    ehr_delay_reasons: "CONSENT NOT COMPLETED",
    "FC Count": 3,
    "Median Actual Minutes Case": 12.0,
  },
  {
    ehr_delay_reasons: "LAB RESULTS",
    "FC Count": 1,
    "Median Actual Minutes Case": 97.0,
  },
  {
    ehr_delay_reasons: "ORDERS NOT AVAILABLE",
    "FC Count": 1,
    "Median Actual Minutes Case": 34.0,
  },
  {
    ehr_delay_reasons: "PATIENT HAS CONCERNS",
    "FC Count": 1,
    "Median Actual Minutes Case": 29.0,
  },
  {
    ehr_delay_reasons: "PREOP UNIT DELAY",
    "FC Count": 1,
    "Median Actual Minutes Case": 3.0,
  },
  {
    ehr_delay_reasons: "ROOM NOT READY",
    "FC Count": 2,
    "Median Actual Minutes Case": 7.5,
  },
  {
    ehr_delay_reasons: "VENDOR NOT AVAILABLE",
    "FC Count": 1,
    "Median Actual Minutes Case": 10.0,
  },
]

const columns: ColumnDef<FirstCaseDelayReasons>[] = [
  {
    accessorKey: "ehr_delay_reasons",
    header: ({ column }) => {
      return addSortButton(column, "Delay Reasons")
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
    accessorKey: "Median Actual Minutes Case",
    header: "Median Minutes Delayed By",
    type: "barChartColumn",
    maxBar: Math.max(...visualizationData.map((d) => d["PctFCOS"])),
    cell: (info: { getValue: () => number | string }) => {
      const value = info.getValue()
      return typeof value === "number" ? Math.round(value) : value
    },
  },
]

export default function FirstCaseDelayReasonsTable() {
  return (
    <DataTable
      title="First Case Delay Reasons"
      columns={columns}
      data={visualizationData}
    />
  )
}
