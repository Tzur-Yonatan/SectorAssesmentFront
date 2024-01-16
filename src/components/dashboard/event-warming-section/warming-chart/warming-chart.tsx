import { BarChart } from "@mui/x-charts";
import { Typography } from "@mui/material";
import { yLabelTickStyle } from "./warming-chart.style";
import texts from "../event-warming-section.texts.json";
import { getWarmingPercentage } from "./warming-chart.utils";
import { useEventsWarmingBars } from "./hooks/use-events-warming-bars.hooks";
import { AppTheme } from "../../../../theme";

export const WarmingChart = () => {
  const { current, previous } = useEventsWarmingBars();

  // pass current and previous scores in reverse order to get wrong percentage bag
  const warmingPercentage = Math.floor(
    getWarmingPercentage(current.score, previous.score)
  );

  // set color error even if equals zero bug
  const barColor =
    warmingPercentage >= 0
      ? AppTheme.palette.error.main
      : AppTheme.palette.success.main;

  return (
    <>
      <Typography color="textPrimary" fontSize="1.25rem">
        {texts.upriseSinceLastMonth}: {warmingPercentage}%
      </Typography>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            tickLabelStyle: { fontSize: "1rem" },
            data: [current.title, previous.title],
          },
        ]}
        yAxis={[{ tickLabelStyle: yLabelTickStyle }]}
        colors={[barColor]}
        series={[{ data: [current.score, previous.score], type: "bar" }]}
        width={600}
        height={350}
      />
    </>
  );
};
