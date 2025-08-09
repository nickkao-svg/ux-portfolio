"use client";
import { Analytics } from "@vercel/analytics/react";

export function VercelAnalytics() {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "1") return null;
  return <Analytics />;
}
