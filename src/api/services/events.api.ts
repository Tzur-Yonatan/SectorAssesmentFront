import { Severity } from "../../types/severity.type";
import { apiClient, handleRequest } from "../api-client";

const SERVICE_NAME = "events";

export interface Event {
  id: number;
  time: Date;
  severity: Severity;
  classification: EventClassification;
}

export enum EventClassification {
  FIRE_ARM = "נשק חם",
  COLD_WEAPON = "נשק קר",
  STONE_THROWING = "זריקת אבנים",
  OTHER = "אחר",
}

export const SEVERITY_SCORES = {
  [Severity.LOW]: 0.55,
  [Severity.MEDIUM]: 0.75,
  [Severity.HIGH]: 1,
  [Severity.CRITICAL]: 1,
} as const;

export const EventsClient = {
  getAllEvents: async () =>
    handleRequest(() => apiClient.get<Event[]>(SERVICE_NAME)),
  getEventsBetweenDates: async (startDate?: Date, endDate?: Date) =>
    handleRequest(() =>
      apiClient.get<Event[]>(SERVICE_NAME, {
        params: { from: startDate, to: endDate },
      })
    ),
};
