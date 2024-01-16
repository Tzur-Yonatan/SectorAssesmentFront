import { Event, SEVERITY_SCORES } from "../../../../../api/services/events.api";

export const getEventsScore = (events: Event[] = []) =>
  events.reduce((acc, { severity }) => acc + SEVERITY_SCORES[severity], 0);

export const getBarTitle = (basicTitle: string, value: string) =>
  `${basicTitle} (${value})`;
