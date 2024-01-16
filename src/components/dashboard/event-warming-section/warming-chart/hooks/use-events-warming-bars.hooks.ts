import { useRequest } from "ahooks";
import { getBarTitle, getEventsScore } from "./use-events-warming-bars.utils";
import {
  getStartOfMonth,
  getDateOneMonthAgo,
  getHebrewMonthName,
} from "../../../../../utils/dates.utils";
import texts from "./use-events-warming-bars.texts.json";
import { EventsClient } from "../../../../../api/services/events.api";

export const useEventsWarmingBars = () => {
  const currentMonth = getStartOfMonth();
  const lastMonth = getStartOfMonth(getDateOneMonthAgo());
  const { data: currentMonthEvents } = useRequest(() =>
    EventsClient.getEventsBetweenDates(currentMonth)
  );

  const { data: lastMonthEvents } = useRequest(() =>
    EventsClient.getEventsBetweenDates(lastMonth, currentMonth)
  );

  return {
    current: {
      title: getBarTitle(texts.currentMonth, getHebrewMonthName(currentMonth)),
      score: getEventsScore(currentMonthEvents),
    },
    previous: {
      title: getBarTitle(texts.lastMonth, getHebrewMonthName(lastMonth)),
      score: getEventsScore(lastMonthEvents),
    },
  };
};
