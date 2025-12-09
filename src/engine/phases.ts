export const PHASES = [
  "Command",
  "Movement",
  "Shooting",
  "Charge",
  "Fight",
  "Morale",
  "Any"
] as const;

export type Phase = (typeof PHASES)[number];