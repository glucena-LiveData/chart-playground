"use client"

import { 
	ColumnDef, 
} from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { numericFormat } from "@/lib/formatting-utils"
import { addSortButton } from "@/lib/functional-utils"

// Replaced by API call that returns JSON representation of data
const tableData = [
	{
		blockgroup: "Anes",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 11.466666666666667,
	},
	{
		blockgroup: "Colo",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 48.9,
	},
	{
		blockgroup: "ENT",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 54.55,
	},
	{
		blockgroup: "Eye",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 158.93333333333334,
	},
	{
		blockgroup: "Gen",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 121.68333333333334,
	},
	{
		blockgroup: "Gyn",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 45.75,
	},
	{
		blockgroup: "Hand",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 14.233333333333333,
	},
	{
		blockgroup: "NO GROUP",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 6.216666666666667,
	},
	{
		blockgroup: "Ortho",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 56.983333333333334,
	},
	{
		blockgroup: "Plas",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 74.06666666666666,
	},
	{
		blockgroup: "Pod",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 79.65,
	},
	{
		blockgroup: "Ret",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 5.95,
	},
	{
		blockgroup: "Txp",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: 0.0,
		block_duration_hours: 28.0,
		block_used_hours: 0.0,
		block_unused_hours: 28.0,
		outofblock_hours: 0.0,
	},
	{
		blockgroup: "Uro",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 42.95,
	},
	{
		blockgroup: "Vasc",
		block_case_count: 0,
		pct_addon: null,
		block_utilization: null,
		block_duration_hours: 0.0,
		block_used_hours: 0.0,
		block_unused_hours: 0.0,
		outofblock_hours: 89.13333333333334,
	},
]


type CaseCountBlockHours = {
	"blockgroup": string
	"block_case_count": number
	"pct_addon": number | null
	"block_utilization": number | null
	"block_duration_hours": number
	"block_used_hours": number
	"block_unused_hours": number
}

interface CustomColumnDef<TData, TValue> extends ColumnDef<TData, TValue> {
	type?: string;
	maxBar?: number;
}

const columns: CustomColumnDef<CaseCountBlockHours, any>[] = [
	{
		accessorKey: "blockgroup",
		header: ({ column }) => {
			return addSortButton(column, "% Block Group");
		},
	},
	{
		accessorKey: "block_case_count",
		header: ({ column }) => {
			return addSortButton(column, "Block Case Count");
		},
	},
	{
		accessorKey: "pct_addon",
		header: ({ column }) => {
			return addSortButton(column, "% Add On");
		},
		cell: info => numericFormat(info.getValue(), 1, '%'),
	},
	{
		accessorKey: "block_utilization",
		header: ({ column }) => {
			return addSortButton(column, "% Blocks Used");
		},
		cell: info => numericFormat(info.getValue(), 1, '%'),
	},
	{
		accessorKey: "block_duration_hours",
		header: ({ column }) => {
			return addSortButton(column, "Available Block Hours");
		},
		type: "barChartColumn",
		cell: info => numericFormat(info.getValue(), 1, '%'),
	},
	{
		accessorKey: "block_used_hours",
		header: ({ column }) => {
			return addSortButton(column, "Block Hours Used (in Block + Turnover)");
		},
		type: "barChartColumn",
		cell: info => numericFormat(info.getValue(), 1, '%'),
	},
	{
		accessorKey: "block_unused_hours",
		header: ({ column }) => {
			return addSortButton(column, "Unused Block Hours");
		},
		type: "barChartColumn",
		cell: info => numericFormat(info.getValue(), 1, '%'),
	}
]

export function BlockUtilByBlockGroupTable() {
	return (
		<DataTable title="Total Weekday Case Count & Block Hours" columns={columns} data={tableData} />
	)
}


