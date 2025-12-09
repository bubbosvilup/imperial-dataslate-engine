import { Rule } from "./rule";

export interface Faction {
  faction: string;
  subfactions: string[];
  rules: Rule[];
}
