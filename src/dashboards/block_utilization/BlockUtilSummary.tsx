"use client"

import { 
	ColumnDef, 
} from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { numericFormat } from "@/lib/formatting-utils"

// Replaced by API call that returns JSON representation of data
const tableData = [
	{
		"block_case_count": 0,
		"block_case_hours": 0.0,
		"block_duration_hours": 28.0,
		"block_used_hours": 0.0,
		"block_unused_hours": 28.0,
		"block_utilization": 0.0,
		"pct_sched": null,
		"block_case_count_sched": 0,
		"case_hours_scheduled": 0.0,
		"pct_addon": null,
		"block_case_count_addon": 0,
		"case_hours_addon": 0.0
	}
]

type BlockCaseCountsHours = {
	"block_case_count": number,
	"block_case_hours": number
}

const blockCaseCountsColumns: ColumnDef<BlockCaseCountsHours>[] = [
	{
	  accessorKey: "block_case_count",
	  header: "Block Case Count",
	  cell: info => numericFormat(info.getValue(), 0)
	},
	{
	  accessorKey: "block_case_hours",
	  header: "Case Hours",
		cell: info => numericFormat(info.getValue(), 1)
	}
]

export function BlockCaseCountsColumnsTable() {
	return (
		<DataTable title="Block Case Counts & Hours" columns={blockCaseCountsColumns} data={tableData} />
	)
}

type BlockUtilization = {
	"block_duration_hours": number,
	"block_used_hours": number,
	"block_unused_hours": number,
	"block_utilization": number
}

const blockUtilizationColumns: ColumnDef<BlockUtilization>[] = [
	{
	  accessorKey: "block_duration_hours",
	  header: "Block Hours Available",
	  cell: info => numericFormat(info.getValue(), 1)
	},
	{
	  accessorKey: "block_used_hours",
	  header: "Block Hours Used (In Block + Turnover)",
		cell: info => numericFormat(info.getValue(), 1)
	},
	{
	  accessorKey: "block_unused_hours",
	  header: "Surplus of Available Block Hours",
		cell: info => numericFormat(info.getValue(), 1)
	},
	{
	  accessorKey: "block_utilization",
	  header: "% Block Utilization",
		cell: info => numericFormat(info.getValue(), 1, '%')
	}
]

export function BlockUtilizationTable() {
	return (
		<DataTable title="Block Utilization" columns={blockUtilizationColumns} data={tableData} />
	)
}

type ScheduledElectiveCaseSummary = {
	"pct_sched": number | null,
	"block_case_count_sched": number,
	"case_hours_scheduled": number
}

const scheduledElectiveCaseSummaryColumns: ColumnDef<ScheduledElectiveCaseSummary>[] = [
	{
	  accessorKey: "block_case_count_sched",
	  header: "Elective Cases",
		cell: info => numericFormat(info.getValue(), 1)
	},
	{
	  accessorKey: "case_hours_scheduled",
	  header: "Elective Hours",
		cell: info => numericFormat(info.getValue(), 1)
	}
]

export function ScheduledElectiveCaseSummaryTable() {
	return (
		<DataTable title="Elective Cases in Block" columns={scheduledElectiveCaseSummaryColumns} data={tableData} />
	)
}

type AddonCaseSummary = {
	"block_case_count_addon": number,
	"case_hours_addon": number
}

const addonCaseSummaryColumns: ColumnDef<AddonCaseSummary>[] = [
	{
	  accessorKey: "block_case_count_addon",
	  header: "Add-On Cases in Block",
		cell: info => numericFormat(info.getValue(), 0)
	},
	{
	  accessorKey: "case_hours_addon",
	  header: "Add On Hours",
	  cell: info => numericFormat(info.getValue(), 1)
	},
]
   
export function AddonCaseSummaryTable() {
	return (
		<DataTable title="Add-Ons in Block Time" columns={addonCaseSummaryColumns} data={tableData} />
	)
}