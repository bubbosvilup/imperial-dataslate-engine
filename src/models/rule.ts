import { Phase } from "../engine/phases";
import { ReminderTiming } from "../engine/reminderTypes";

export interface Rule {
  id: string;
  name: string;
  phase: Phase | "any";
  timing: ReminderTiming;
  source: string;
  text: string;
  tags: string[];
}
