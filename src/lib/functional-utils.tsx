import { ArrowUpDown } from "lucide-react"
import { Column } from "@tanstack/react-table" 
import { Button } from "@/components/ui/button"


/**
 * Formats a number to a specified number of decimal places.
 * If the value is not a number, it returns the value as is.
 *
 * @param column - Column where button will be added.
 * @param value - Column header string.
 * @returns The column header followed by sorting icon with button trigger.
 */
export const addSortButton = (column: Column<any, any>, value: string) => {
	return(	
		<Button
		  variant="ghost"
		  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
		>
		  {value}
		  <ArrowUpDown className="ml-2 h-4 w-4" />
		</Button>
	)
}