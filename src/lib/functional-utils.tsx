
import { Column } from "@tanstack/react-table" 
import { Button } from "@/components/ui/button"


/**
 * Table column decorator.
 * Converts a column to a sort button.
 *
 * @param column - Column where button will be added.
 * @param value - Column header string.
 * @returns The column header followed by sorting icon with button trigger.
 */
export const addSortButton = (column: Column<any, any>, value: string) => {
	return(	
		<Button className="bg-transparent"
		  variant="invisible"
		  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
		>
		  {value}
		  {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
		</Button>
	)
}