
/**
 * Formats a number to a specified number of decimal places.
 * If the value is not a number, it returns the value as is.
 *
 * @param value - The value to format. Expected to be a number.
 * @param decimals - The number of decimal places to format the number to.
 * @returns The formatted number as a string, or the original value if it's not a number.
 */
export const numericFormat = (value: any, decimals: number, format: string | undefined = undefined): string => {
	if (typeof value != 'number')
		return value

	const formattedValue = value.toFixed(decimals);
  if (typeof format === 'undefined')
		return formattedValue;

	// Room for adding other types of numeric formatting, such as currency $
	if (format === '%')
		return `${formattedValue}%`
	else
		return formattedValue
}