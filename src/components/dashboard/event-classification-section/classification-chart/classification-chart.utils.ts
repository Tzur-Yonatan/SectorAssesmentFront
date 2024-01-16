import {
  type Event,
  EventClassification,
} from "../../../../api/services/events.api";

export const getClassificationChartData = (
  events: Event[]
): {
  label: string;
  value: number;
}[] => {
  const classificationMap = Object.values(EventClassification).reduce(
    (acc, classification) => ({ ...acc, [classification]: 0 }),
    {}
  ) as { [key in EventClassification]: 0 };

  events.forEach(({ classification }) => {
    classificationMap[classification] += 1;
  });

  return Object.entries(classificationMap).map(([label, value]) => ({
    label,
    value,
  }));
};
