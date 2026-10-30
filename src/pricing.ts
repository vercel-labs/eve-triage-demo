export interface CartLine {
  sku: string;
  name: string;
  unitPrice: number;
  quantity: number;
}

export function calculateCartSubtotal(lines: CartLine[]): number {
  return lines.reduce((total, line) => total + line.unitPrice, 0);
}

export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    cents / 100,
  );
}
