import { useRequest } from "ahooks";
import { PieChart } from "@mui/x-charts";
import { getDateOneMonthAgo } from "../../../../utils/dates.utils";
import { EventsClient } from "../../../../api/services/events.api";
import { getClassificationChartData } from "./classification-chart.utils";
import { arcAngleStyle, chartStyleProps } from "./classification-chart.style";

const ONE_MONTH_AGO = getDateOneMonthAgo();

export const ClassificationChart = () => {
  const { data: events } = useRequest(() =>
    EventsClient.getEventsBetweenDates(ONE_MONTH_AGO)
  );

  if (!events?.length) return null;

  const ClassificationData = getClassificationChartData(events);
  return (
    <PieChart
      series={[
        {
          data: ClassificationData,
          type: "pie",
          arcLabelMinAngle: 25,
          arcLabel: ({ value }) => `(${value})`,
        },
      ]}
      sx={arcAngleStyle}
      {...chartStyleProps}
    />
  );
};
