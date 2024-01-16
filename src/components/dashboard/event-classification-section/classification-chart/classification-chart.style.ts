import { SxProps } from "@mui/material";
import { pieArcLabelClasses, type PieChartProps } from "@mui/x-charts";

export const chartStyleProps: Omit<PieChartProps, "series"> = {
  width: 400,
  height: 200,
  margin: { left: 195, right: 0 },
  slotProps: {
    legend: {
      markGap: -26,
      labelStyle: { fontSize: "1.25rem" },
      position: { vertical: "middle", horizontal: "left" },
      direction: "column",
      padding: { left: 150 },
    },
  },
};

export const arcAngleStyle: SxProps = {
  overflow: "visible",
  [`& .${pieArcLabelClasses.root}`]: {
    fontSize: "0.75rem",
    fill: "white",
  },
};
