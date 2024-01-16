import { apiClient, handleRequest } from "../api-client";

const SERVICE_NAME = "soldiers";

export interface Soldier {
  id: number;
  name: string;
  attendanceStatus: AttendanceStatuses;
}

export enum AttendanceStatuses {
  PRESENT = "נוכח",
  VACATION = "חופש",
  SICK = "גימלים",
  OTHER = "Other",
}

export const SoldiersClient = {
  getAllSoldiers: async () =>
    handleRequest(() => apiClient.get<Soldier[]>(SERVICE_NAME)),
};
