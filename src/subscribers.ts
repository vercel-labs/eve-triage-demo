export type SubscribeResult = { ok: true; email: string } | { ok: false; error: string };

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function validateSubscriberEmail(email: string): SubscribeResult {
  const normalized = normalizeEmail(email);
  if (normalized.includes("@")) {
    return { ok: true, email: normalized };
  }
  return { ok: false, error: "Enter a valid email address." };
}
