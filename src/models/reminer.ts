import { Phase } from "../engine/phases";

export interface Reminder {
  phase: Phase | "any";
  text: string;
  source: string;
}
