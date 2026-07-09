const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

/**
 * Simple in-memory sliding-window limiter. Resets on redeploy/restart and is
 * per-instance only — sufficient as a basic spam brake, not a security boundary.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}
