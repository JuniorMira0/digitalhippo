import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* Faz a formatação do preço usando a API Intl e tnm convertente de string para number */
export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'BRL',
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const {currency = 'USD', notation = 'compact'} = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(numericPrice)) {
    throw new Error('Invalid price value');
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}

