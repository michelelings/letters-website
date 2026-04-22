"use client";

import { useEffect } from "react";
import { installGlobalAnalytics } from "@/lib/analytics";

export function AnalyticsBootstrap() {
  useEffect(() => {
    installGlobalAnalytics();
  }, []);
  return null;
}
