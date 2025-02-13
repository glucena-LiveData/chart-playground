/**
 * Month Enumeration
 */
export const monthNames: { [key: number]: string } = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
}

/**
 * Maps numeric representation of month to textual.
 * Example: 1 -> "January"
 *
 * @param key - Numeric representation for the month.
 * @returns The name of the month as a string.
 */
export const getMonth = (key: number): string => {
  if (key < 1 || key > 12 || isNaN(key)) return ""
  else return monthNames[key]
}

/**
 * Maps numeric representation of month to abbreviated textual.
 * Example: 1 -> "Jan"
 *
 * @param key - Numeric representation for the month.
 * @returns The name of the month as a 3 character string.
 */
export const getShortMonth = (key: number): string => {
  if (key < 1 || key > 12 || isNaN(key)) return ""
  else return monthNames[key].substring(0, 3)
}
