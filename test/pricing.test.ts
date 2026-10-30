import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateCartSubtotal, formatCurrency } from "../src/pricing.ts";

test("adds up a single line", () => {
  assert.equal(
    calculateCartSubtotal([{ sku: "pen", name: "Pen", unitPrice: 250, quantity: 1 }]),
    250,
  );
});

test("formats cents as dollars", () => {
  assert.equal(formatCurrency(3150), "$31.50");
});
