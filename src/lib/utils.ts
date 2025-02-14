import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMaxCeiledValue<TData>(data: TData[], key: keyof TData) {
  return Math.ceil(Math.max(...data.map((d) => d[key] as number)) / 10) * 10
}

export function getMinFlooredValue<TData>(data: TData[], key: keyof TData) {
  const minValue =
    Math.floor(Math.min(...data.map((d) => d[key] as number)) / 10) * 10 - 10

  return minValue < 0 ? 0 : minValue
}
