"use client"

import { ColumnDef } from "@tanstack/react-table"

import { numericFormat } from "@/lib/formatting-utils"
import { DataTable } from "@/components/ui/data-table"

type FirstCaseSummary = {
  "1st Cases": number
  "Late Starts": number
  "% of First Cases On-Time": number
  "% Late Start": number
  "Pct FC Delayed < 15": number
  "Pct FC Delayed 15-30": number
  "Pct FC Delayed > 30": number
  "Total Hours Lost": number
}

const columns: ColumnDef<FirstCaseSummary>[] = [
  {
    accessorKey: "1st Cases",
    header: "1st Cases",
    cell: (info) => numericFormat(info.getValue(), 0),
  },
  {
    accessorKey: "Late Starts",
    header: "Late Starts",
  },
  {
    accessorKey: "% of First Cases On-Time",
    header: "% of First Cases On-Time",
    cell: (info) => `${numericFormat(info.getValue(), 1)}%`,
  },
  {
    accessorKey: "% Late Start",
    header: "% Late Start",
    cell: (info) => `${numericFormat(info.getValue(), 1)}%`,
  },
  {
    accessorKey: "Pct FC Delayed < 15",
    header: "<15min Late",
    cell: (info) => `${numericFormat(info.getValue(), 1)}%`,
  },
  {
    accessorKey: "Pct FC Delayed 15-30",
    header: "<15-30min Late",
    cell: (info) => `${numericFormat(info.getValue(), 1)}%`,
  },
  {
    accessorKey: "Pct FC Delayed > 30",
    header: ">30min Late",
    cell: (info) => `${numericFormat(info.getValue(), 1)}%`,
  },
  {
    accessorKey: "Total Hours Lost",
    header: "Total Hrs Lost",
    cell: (info) => numericFormat(info.getValue(), 1),
  },
]

// Replaced by API calls that returns JSON representation of data
const tableData = [
  {
    "1st Cases": 69,
    "Late Starts": 23,
    "% of First Cases On-Time": 66.66666666666666,
    "% Late Start": 33.33333333333333,
    "Pct FC Delayed < 15": 73.91304347826086,
    "Pct FC Delayed 15-30": 17.391304347826086,
    "Pct FC Delayed > 30": 8.695652173913043,
    "Total Hours Lost": 6.166666666666667,
  },
]

export default function SummaryDataTable() {
  return (
    <DataTable
      title="First Case Summary Statistics"
	  subtitle="Summary of First Case Statistics"
      columns={columns}
      data={tableData}
    />
  )
}
