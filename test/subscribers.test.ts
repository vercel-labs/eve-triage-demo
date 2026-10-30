import assert from "node:assert/strict";
import { test } from "node:test";
import { validateSubscriberEmail } from "../src/subscribers.ts";

test("normalizes a valid address", () => {
  assert.deepEqual(validateSubscriberEmail("  Reader@Example.com "), {
    ok: true,
    email: "reader@example.com",
  });
});

test("rejects an address without an @", () => {
  assert.deepEqual(validateSubscriberEmail("reader.example.com"), {
    ok: false,
    error: "Enter a valid email address.",
  });
});
