// src/services/jobAnalyzerService.ts
import type { JobAnalysis } from "../types/jobAnalyzer";

export async function analyzeJobDescription(
  jdText: string
): Promise<JobAnalysis> {
  // TODO: replace with your real endpoint
  const response = await fetch("/api/job-analyzer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jd: jdText }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze job description");
  }

  const data = (await response.json()) as JobAnalysis;
  return data;
}
