// src/types/jobAnalyzer.ts

export interface TopSkill {
  name: string;
  foundIn: string;
  usage: string;
  importance: string;
}

export interface ScoringRow {
  skill: string;
  freq: number;
  boost: string;
  importance: string;
}

export interface JobAnalysis {
  roleContext: string;
  topSkills: TopSkill[];
  scoring: ScoringRow[];
}
