import { apiClient, handleRequest } from "../api-client";

const SERVICE_NAME = "easterEgg";

export interface EasterEgg {
  justDontAddAnything: string;
}

export const EasterEggClient = {
  getEasterEgg: async () =>
    handleRequest(() => apiClient.get<EasterEgg[]>(SERVICE_NAME)),
};
