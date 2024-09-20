import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}